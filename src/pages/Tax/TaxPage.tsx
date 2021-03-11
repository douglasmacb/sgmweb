import React from 'react'
import { History, LocationState } from 'history'
import { Button } from '../../components/Button'
import './TaxPage.css'

interface Props {
    history: History<LocationState>
}

class TaxPage extends React.Component<Props> {

    goBack = (): void => {
        this.props.history.goBack()
    }

    render() {
        return (
            <>
                <h2 className="page-title">Consulta de Imposto Territorial</h2>
                <div className="tax-container">
                    <table className="tax-table">
                        <tbody>
                            <tr>
                                <td className="tax-table-name">John Lennon</td>
                                <td className="tax-table-value">Rhythm Guitar</td>
                            </tr>
                            <tr>
                                <td className="tax-table-name">Paul McCartney</td>
                                <td className="tax-table-value">Bass</td>
                            </tr>
                            <tr>
                                <td className="tax-table-name">George Harrison</td>
                                <td className="tax-table-value">Lead Guitar</td>
                            </tr>
                            <tr>
                                <td className="tax-table-name">Ringo Starr</td>
                                <td className="tax-table-value">Drums</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Button cName="tax-btn" onClick={this.goBack}>Voltar</Button>
            </>
        )
    }
}

export default TaxPage