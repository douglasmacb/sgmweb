import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Service } from '../../components/Service/Service';
import { IRootState } from '../../store';
import history from '../../history'
import * as asyncactions from '../../store/service/async-actions';
import { ServiceActions, IServiceOrderState } from '../../store/service/types';
import './ServicePage.css'

const mapStateToProps = ({ service }: IRootState) => {
    const { serviceData, error, loading } = service;
    return { serviceData, error, loading }
}

const mapDispatcherToProps = (dispatch: Dispatch<ServiceActions>) => {
    return {
        fetchServices: (): Promise<void> => asyncactions.fetchServices(dispatch),
        createServiceOrder: (serviceOrder: IServiceOrderState): Promise<boolean> => asyncactions.createServiceOrder(dispatch, serviceOrder)
    }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class ServicePage extends React.Component<ReduxType> {

    constructor(props: ReduxType) {
        super(props)
        props.fetchServices()
    }

    handleSubmit = (serviceOrder: IServiceOrderState) => {
        const isCreated = this.props.createServiceOrder(serviceOrder)
        if(isCreated) {
            history.push('/service/created')
        }
    }

    render() {
        return (
            <>
                <div>
                    <h2 className="page-title">Solicitar Serviço</h2>
                    <Service handleSubmit={this.handleSubmit} />
                </div>
            </>
        )
   }
}

export default connect(mapStateToProps, mapDispatcherToProps)(ServicePage)