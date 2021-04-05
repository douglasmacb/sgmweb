import { useSelector } from 'react-redux'
import { IRootState } from '../../store'
import { formatDate, formatDateWithoutHour } from '../../utils/format-number'
import './ProtocolPage.css'

export const ProtocolPage: React.FC = () => {
    const serviceSelector = (state: IRootState) => state.service

    const { serviceOrderData } = useSelector(serviceSelector)

    return (
        <>
            <div>
                <h2 className='page-title'>Protocolo {serviceOrderData?.protocolo}</h2>
                <div className="table-container">
                    <h3 className="protocol-title">Solicitação</h3>
                    <table className="table-horizontal">
                        <thead>
                            <tr>
                                <th className='table-color'>Serviço</th>
                                <th className='table-color'>Solicitante</th>
                                <th className='table-color'>Status</th>
                                <th className='table-color'>Data</th>
                                <th className='table-color'>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tax-table-value">{serviceOrderData?.servico?.nome || 'N/A'}</td>
                                <td className="tax-table-value">{serviceOrderData?.nomeSolicitante || 'N/A'}</td>
                                <td className="tax-table-value">{serviceOrderData?.status?.nome || 'N/A'}</td>
                                <td className="tax-table-value">{formatDateWithoutHour(serviceOrderData?.data)}</td>
                                <td className="tax-table-value">{serviceOrderData?.descricao || 'N/A'}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="protocol-title">Histórico</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Última alteração</th>
                                <th>Responsável</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {serviceOrderData?.historico?.map((historico: any) => ({ ...historico, novaData: formatDate(new Date(historico.data)) })).map((historico: any) => (
                                <tr key={historico.responsavel}>
                                    <td>{historico.novaData}</td>
                                    <td>{historico.responsavel}</td>
                                    <td>{historico.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}