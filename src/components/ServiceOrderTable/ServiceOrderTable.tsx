import { Table } from '../../components/Table/Table'
import { columns } from './columns'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { IRootState } from '../../store'
import * as asyncactions from '../../store/service/async-actions'
import { ServiceActions } from '../../store/service/types'
import React, { useEffect } from 'react'
import { ApiService } from '../../services/api-service'
import './ServiceOrderTable.css'
import { Button } from '../Button'

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

const ServiceOrderTable = (props: PropsFromRedux) => {

  const [data, setData] = React.useState([])

  const fetchAllServicesOrders = async () => {
    const {data} = await new ApiService().get('/servico/solicitacao')
    setData(data)
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
          data={data} />
      </div>
      <Button>Detalhar</Button>
    </>
  )
}
  

export default connector(ServiceOrderTable)