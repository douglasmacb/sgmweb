import React from 'react'
import { connect } from 'react-redux'
import { History, LocationState } from 'history'
import { IRootState } from '../../store'
import { Button } from '../../components/Button'
import './TaxPage.css'
import { formatNumberToMoney } from '../../utils/format-number'

interface Props {
    history: History<LocationState>
}

const mapStateToProps = ({ tax }: IRootState) => {
    const { taxData } = tax;
    return { taxData }
}

type ReduxType = ReturnType<typeof mapStateToProps>;

class TaxPage extends React.Component<ReduxType & Props> {

    goBack = (): void => {        
        this.props.history.goBack()
    }

    render() {
        const {
            taxData
        } = this.props;

        return (
            <>
                <h2 className="page-title">Consulta de Imposto Territorial</h2>
                
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>Dados do Responsável</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nome</td>
                                <td>{taxData[0]?.contribuinte?.nome}</td>
                            </tr>
                            {taxData[0]?.contribuinte?.cpf &&
                                <tr>
                                    <td>CPF</td>
                                    <td>{taxData[0]?.contribuinte?.cpf}</td>
                                </tr>
                            }
                            {taxData[0]?.contribuinte?.cnpj &&
                                <tr>
                                    <td>CNPJ</td>
                                    <td>{taxData[0]?.contribuinte?.cnpj}</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                    <br />
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Dados da Propriedade</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Endereço</td>
                                <td>{taxData[0]?.imovel?.endereco?.logradouro}</td>
                            </tr>
                            <tr>
                                <td>Número</td>
                                <td>{taxData[0]?.imovel?.endereco?.numero}</td>
                            </tr>
                            <tr>
                                <td>CEP</td>
                                <td>{taxData[0]?.imovel?.endereco?.cep}</td>
                            </tr>
                            <tr>
                                <td>Estado</td>
                                <td>{taxData[0]?.imovel?.endereco?.uf}</td>
                            </tr>
                            <tr>
                                <td>Exercício</td>
                                <td>{taxData[0]?.exercicio}</td>
                            </tr>
                            <tr>
                                <td>Tipo do Imposto</td>
                                <td>{taxData[0]?.tipoImposto}</td>
                            </tr>
                            <tr>
                                <td>Valor do Imposto</td>
                                <td>{formatNumberToMoney(taxData[0]?.impostoDevido)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Button cName="tax-btn" onClick={this.goBack}>Voltar</Button>
            </>
        )
    }
}

export default connect(mapStateToProps)(TaxPage)
