import { columns } from './columns'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { IRootState } from '../../store'
import * as asyncactions from '../../store/service/async-actions'
import { ServiceActions } from '../../store/service/types'
import React, { useEffect } from 'react'
import { ApiService } from '../../services/api-service'
import { Button } from '../Button'
import { formatDate } from '../../utils/format-number'
import { Table, Modal, Snackbar } from '../../components'
import './ServiceOrderTable.css'

const mapStateToProps = ({ service, user }: IRootState) => {
  const { serviceOrderData } = service
  const { email } = user
  return { serviceOrderData, email }
}

const mapDispatcherToProps = (dispatch: Dispatch<ServiceActions>) => {
  return {
    fetchAllServiceOrders: (): Promise<void> => asyncactions.fetchAllServiceOrders(dispatch),
    fetchAllServiceStatus: (): Promise<void> => asyncactions.fetchAllServiceStatus(dispatch),
  }
}

type PropsFromRedux = ConnectedProps<typeof connector>

const connector = connect(mapStateToProps, mapDispatcherToProps)

interface rowSelectedState {
  original: IOriginal
}

interface IOriginal {
  id?: number
  newDate?: string
  data?: string
  protocolo?: number
  servico?: string
  status?: string
}

interface IStatus {
  id: number
  nome: string
}

const initialState: rowSelectedState = {
  original: {}
}

const ServiceOrderTable = (props: PropsFromRedux) => {

  const [statuses, setStatuses] = React.useState([])
  const [status, setStatus] = React.useState('')
  const [showSnackbar, setShowSnackbar] = React.useState(false)
  const [showError, setError] = React.useState(false)
  const [data, setData] = React.useState([])
  const [showModal, setShowModal] = React.useState(false)
  const [rowSelected, setRowSelected] = React.useState(initialState)

  const fetchAllServicesOrders = async () => {
    const { data } = await new ApiService().get('/servico/solicitacao')
    const serviceOrders = data.map((item: any) => {
      let newDate = formatDate(new Date(item.data))
      return { ...item, newDate }
    })
    setData(serviceOrders)
  }

  const fetchAllServiceStatus = async () => {
    const { data } = await new ApiService().get('/servico/status')
    setStatuses(data)
  }

  const changeOrderStatus = async (orderId: number, statusId: number) => {
    const { data } = await new ApiService().patch(`/servico/solicitacao/${orderId}/status/${statusId}`)
    if (data) {
      setShowSnackbar(true)
      handleModal()
      fetchAllServicesOrders()
      setTimeout(() => {
        setShowSnackbar(false)
      }, 3000);
    }
  }

  const handleModal = () => {
    if (JSON.stringify(rowSelected.original) === JSON.stringify({})) {
      setError(true);
      return;
    }
    setError(false);
    setShowModal(!showModal)
  }

  const rowselected = (row: any) => {
    setRowSelected(row);
  }

  const showDetail = () => {
    handleModal()
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value)
  }

  const changeStatus = () => {
    changeOrderStatus((rowSelected.original.id || 0), parseInt(status))
  }

  useEffect(() => {
    fetchAllServicesOrders()
    fetchAllServiceStatus()
  }, [])
  return (
    <>
      <div className="order-table-container">
        <Table
          cName={`table order-table`}
          columns={columns}
          data={data}
          rowselected={rowselected} />

        <Modal show={showModal} handleClose={handleModal}>
          <div className="service-order-modal">
            <h3>Protocolo {rowSelected.original.protocolo}</h3>
            <table className={`table order-table`}>
              <thead>
                <tr>
                  <th>Serviço</th>
                  <th>Data</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{rowSelected.original.servico}</td>
                  <td>{rowSelected.original.newDate}</td>
                  <td>
                    <select name="status" id="status" className={`input-container`} onChange={handleChange}>
                      {statuses.map((status: IStatus) => (
                        <option key={status.id} value={status.id}>{status.nome}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='modal-actions'>
              <Button onClick={changeStatus}>Alterar Status</Button>
              <Button onClick={handleModal}>Fechar</Button>
            </div>
          </div>
        </Modal>
      </div>
      <Button onClick={showDetail}>Detalhar</Button>
      <div className="select-errors">{showError ? 'Selecione pelo menos 1 solicitação' : ''}</div>
      <Snackbar show={showSnackbar} message="Protocolo alterado com êxito." isSuccess={true} />
    </>
  )
}


export default connector(ServiceOrderTable)