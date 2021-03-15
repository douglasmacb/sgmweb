import { useSelector } from 'react-redux'
import { IRootState } from '../../store'

export const ProtocolPage: React.FC = () => {
    const serviceSelector = (state: IRootState) => state.service

    const { serviceOrderData } = useSelector(serviceSelector)

    return (
        <>
            <div>
                <h2 className='page-title'>Consultar Protocolo</h2>
                <div className="tax-container">
                    <table className="tax-table">
                        <thead>
                            <tr>
                            <th>Dados da Solicitação</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="tax-table-name">Serviço</td>
                                <td className="tax-table-value">{serviceOrderData?.servico?.nome || 'N/A'}</td>
                            </tr>
                                <tr>
                                    <td className="tax-table-name">Status</td>
                                    <td className="tax-table-value">{serviceOrderData?.status?.nome || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td className="tax-table-name">Data</td>
                                    <td className="tax-table-value">{serviceOrderData?.data || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td className="tax-table-name">Descrição</td>
                                    <td className="tax-table-value">{serviceOrderData?.descricao || 'N/A'}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}