import { useSelector } from 'react-redux'
import { IRootState } from '../../store'

export const ProtocolPage: React.FC = () => {
    const serviceSelector = (state: IRootState) => state.service

    const { serviceOrderData } = useSelector(serviceSelector)

    return (
        <>
            <div>
                <h2 className='page-title'>Protocolo {serviceOrderData?.protocolo}</h2>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>Dados da Solicitação</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Serviço</td>
                                <td className="tax-table-value">{serviceOrderData?.servico?.nome || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Solicitante</td>
                                <td className="tax-table-value">{serviceOrderData?.nomeSolicitante || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td className="tax-table-value">{serviceOrderData?.status?.nome || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Data</td>
                                <td className="tax-table-value">{serviceOrderData?.data || 'N/A'}</td>
                            </tr>
                            <tr>
                                <td>Descrição</td>
                                <td className="tax-table-value">{serviceOrderData?.descricao || 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}