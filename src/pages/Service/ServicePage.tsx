import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Service } from '../../components/Service/Service';
import { IRootState } from '../../store';
import * as asyncactions from '../../store/service/async-actions';
import { ServiceActions } from '../../store/service/types';
import './ServicePage.css'

const mapStateToProps = ({ service }: IRootState) => {
    const { serviceData, error, loading } = service;
    return { serviceData, error, loading }
}

const mapDispatcherToProps = (dispatch: Dispatch<ServiceActions>) => {
    return {
        fetchServices: (): Promise<void> => asyncactions.fetchServices(dispatch)
    }
}

interface IServiceFormState {
    nome: string
    email: string
    telefone: string
    cpf: string
    servicoId: number
    logradouro: string
    numero: string
    cep: string
    estado: string
    cidade: string
    descricao: string
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

class ServicePage extends React.Component<ReduxType, IServiceFormState> {

    public state: IServiceFormState = {
        nome: '',
        email: '',
        telefone: '',
        cpf: '',
        servicoId: 0,
        logradouro: '',
        cep: '',
        estado: '',
        cidade: '',
        descricao: '',
        numero: ''
    }

    constructor(props: ReduxType) {
        super(props)
        props.fetchServices()
    }

    handleSubmit = (value: any) => {
        console.log(value)
    }

    render() {
        return (
            <>
                <div>
                    <h2 className="page-title">Solicitar Serviço</h2>
                    <Service 
                        nome={this.state.nome}
                        email={this.state.email}
                        telefone={this.state.telefone}
                        cpf={this.state.cpf}
                        servicoId={this.state.servicoId}
                        logradouro={this.state.logradouro}
                        numero={this.state.numero}
                        cep={this.state.cep}
                        cidade={this.state.cidade}
                        estado={this.state.estado}
                        descricao={this.state.descricao}
                        handleSubmit={this.handleSubmit} />
                </div>
            </>
        )
   }
}

export default connect(mapStateToProps, mapDispatcherToProps)(ServicePage)

