import React from 'react'
import './TaxPage.css'

class TaxPage extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h2 className="page-title">Consulta IPTU / ITR</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>John Lennon</td>
                                <td>Rhythm Guitar</td>
                            </tr>
                            <tr>
                                <td>Paul McCartney</td>
                                <td>Bass</td>
                            </tr>
                            <tr>
                                <td>George Harrison</td>
                                <td>Lead Guitar</td>
                            </tr>
                            <tr>
                                <td>Ringo Starr</td>
                                <td>Drums</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default TaxPage