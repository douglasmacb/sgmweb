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
        console.log(this.props.taxData)
        this.props.history.goBack()
    }


    render() {
        const {
            taxData
        } = this.props;

        return (
            <>
                <h2 className="page-title">Consulta de Imposto Territorial</h2>
                
                <div className="tax-container">
                    <table className="tax-table">
                        <thead>
                            <tr>
                            <th>Dados do Responsável</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tax-table-name">Nome</td>
                                <td className="tax-table-value">{taxData[0]?.contribuinte?.nome}</td>
                            </tr>
                            <tr>
                                <td className="tax-table-name">CPF</td>
                                <td className="tax-table-value">{taxData[0]?.contribuinte?.cpf}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <table className="tax-table">
                        <thead>
                            <tr>
                                <th>Dados da Propriedade</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tax-table-name">Endereço</td>
                                <td className="tax-table-value">{taxData[0]?.imovel?.endereco?.logradouro}</td>
                            </tr>
                            <tr>
                                <td className="tax-table-name">Número</td>
                                <td className="tax-table-value">{taxData[0]?.imovel?.endereco?.numero}</td>
                            </tr>
                            <tr>
                                <td className="tax-table-name">CEP</td>
                                <td className="tax-table-value">{taxData[0]?.imovel?.endereco?.cep}</td>
                            </tr>
                            <tr>
                                <td className="tax-table-name">Estado</td>
                                <td className="tax-table-value">{taxData[0]?.imovel?.endereco?.uf}</td>
                            </tr>
                            <tr>
                                <td className="tax-table-name">Exercício</td>
                                <td className="tax-table-value">{taxData[0]?.exercicio}</td>
                            </tr>
                            <tr>
                                <td className="tax-table-name">Valor do Imposto</td>
                                <td className="tax-table-value">{formatNumberToMoney(taxData[0]?.impostoTerritorial)}</td>
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
