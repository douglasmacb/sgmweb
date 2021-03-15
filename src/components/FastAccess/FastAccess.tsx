import { connect } from 'react-redux'
import './FastAccess.css'
import { Search } from '../Search/Search'
import history from '../../history'
import { IRootState } from '../../store'
import { TaxActions } from '../../store/tax/types'
import { Dispatch } from 'redux'
import * as asyncactions from '../../store/tax/async-actions'
import * as asyncserviceactions from '../../store/service/async-actions'
import React from 'react'
import { Snackbar } from '../../components'
import { ServiceActions } from '../../store/service/types'

const mapStateToProps = ({ tax, service }: IRootState) => {
    return { tax, service }
}

const mapDispatcherToProps = (dispatch: Dispatch<TaxActions | ServiceActions>) => {
    return {
        searchIPTUByCpf: (cpf: string): Promise<void> => asyncactions.searchIPTUByCpfAsync(dispatch, cpf),
        searchIPTUByCnpj: (cnpj: string): Promise<void> => asyncactions.searchIPTUByCnpjAsync(dispatch, cnpj),
        searchITRByCnpj: (cpf: string): Promise<void> => asyncactions.searchITRByCnpjAsync(dispatch, cpf),
        searchServiceOrderByProtocol: (protocol: number): Promise<void> => asyncserviceactions.searchServiceOrderByProtocol(dispatch, protocol),
    }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

interface SnackbarState {
    message: string
    show: boolean
}

class FastAccess extends React.Component<ReduxType, SnackbarState> {

    public state: SnackbarState = {
        show: false,
        message: ''
    }

    handleMessage = (message: string) => {
        this.setState({ show: true, message })
        setTimeout(() => { 
            this.setState({ show: false, message: '' })
         }, 3000);
    }

    redirectToTaxPageOrSendErrorMessage = () => {
        if(this.props.tax.taxData.length > 0) {
            history.push('/tax')
        } else {
            this.handleMessage('Dados inválidos!')
        }
    }

    searchIPTUByCpfCnpj = async (cpfCnpj: string) => {
        if(cpfCnpj.length === 14) {
            await this.props.searchIPTUByCnpj(cpfCnpj)
        } else {
            await this.props.searchIPTUByCpf(cpfCnpj)
        }
        this.redirectToTaxPageOrSendErrorMessage()
    }

    searchITRByCnpj = async (cnpj: string) => {
        await this.props.searchITRByCnpj(cnpj)
        this.redirectToTaxPageOrSendErrorMessage()
    }

    searchProtocol = async (protocol: number) => {
        await this.props.searchServiceOrderByProtocol(protocol)
        const order = this.props.service.serviceOrderData
        if(order) {
            history.push('/protocol')
        } else {
            this.handleMessage('Dados inválidos!')
        }
    }

    render() {
        return (
            <div className="fast-access">
                <h3><i className="fas fa-running"></i> Acesso Rápido</h3>
                <div className="search-bar">
                    <Search 
                        title="Consultar IPTU por CPF / CNPJ" 
                        formValues={this.searchIPTUByCpfCnpj} 
                        maxLength={11} 
                        loading={this.props.tax.loading}
                    />
                    <Search 
                        title="Consultar ITR por CNPJ" 
                        formValues={this.searchITRByCnpj} 
                        maxLength={14} 
                        loading={this.props.tax.loading}
                    />
                    <Search title="Consultar Protocolo" mask="99999999" formValues={this.searchProtocol} />
                </div>
                <Snackbar show={this.state.show} message={this.state.message} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(FastAccess)