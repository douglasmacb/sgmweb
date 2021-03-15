import { connect } from 'react-redux'
import './FastAccess.css'
import { Search } from '../Search/Search'
import history from '../../history'
import { IRootState } from '../../store'
import { TaxActions } from '../../store/tax/types'
import { Dispatch } from 'redux'
import * as asyncactions from '../../store/tax/async-actions'
import React from 'react'
import { Snackbar } from '../../components'

const mapStateToProps = ({ tax }: IRootState) => {
    return { tax }
}

const mapDispatcherToProps = (dispatch: Dispatch<TaxActions>) => {
    return {
        searchIPTUByCpf: (cpf: string): Promise<void> => asyncactions.searchIPTUByCpfAsync(dispatch, cpf),
        searchIPTUByCnpj: (cnpj: string): Promise<void> => asyncactions.searchIPTUByCnpjAsync(dispatch, cnpj),
        searchITRByCnpj: (cpf: string): Promise<void> => asyncactions.searchITRByCnpjAsync(dispatch, cpf),
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

    searchProcessByNumber = (number: number) => {
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
                    <Search title="Consultar Processo" mask="99999999" formValues={this.searchProcessByNumber} />
                </div>
                <Snackbar show={this.state.show} message={this.state.message} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(FastAccess)