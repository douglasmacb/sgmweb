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
import { Table, Modal } from '../../components'
import './ServiceOrderTable.css'

const mapStateToProps = ({ service }: IRootState) => {
    const { serviceOrderData } = service
    return { serviceOrderData }
}

const mapDispatcherToProps = (dispatch: Dispatch<ServiceActions>) => {
    return {
      fetchAllServiceOrders: (): Promise<void> => asyncactions.fetchAllServiceOrders(dispatch)
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

const initialState: rowSelectedState = {
  original: {}
}

const ServiceOrderTable = (props: PropsFromRedux) => {

  const [data, setData] = React.useState([])
  const [showModal, setShowModal] = React.useState(false)
  const [rowSelected, setRowSelected] = React.useState(initialState)

  const fetchAllServicesOrders = async () => {
    const {data} = await new ApiService().get('/servico/solicitacao')
    const serviceOrders = data.map((item: any) => {
      let newDate = formatDate(new Date(item.data))
      return { ...item, newDate }
    })
    setData(serviceOrders)
  }

  const handleModal = () => {
    setShowModal(!showModal)
  }

  const rowselected = (row: any) => {
    setRowSelected(row)
  }
  
  const showDetail = () => {
    handleModal()
  }

  useEffect(() => {
    fetchAllServicesOrders()
  }, [])
  return (
    <>
      <div className="order-table-container">
        <Table 
          cName="order-table" 
          columns={columns} 
          data={data}
          rowselected={rowselected} />

        <Modal show={showModal} handleClose={handleModal}>
          <div>
            <p>Protocolo: {rowSelected.original.protocolo}</p>
            <p>Serviço: {rowSelected.original.servico}</p>
            <p>Data: {rowSelected.original.newDate}</p>
            <p>Status: {rowSelected.original.status}</p>
            <Button onClick={handleModal}>Fechar</Button>
          </div>
        </Modal>
      </div>
      <Button onClick={showDetail}>Detalhar</Button>
    </>
  )
}
  

export default connector(ServiceOrderTable)