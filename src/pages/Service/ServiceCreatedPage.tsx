import { useSelector } from 'react-redux'
import { IRootState } from '../../store'
import './ServiceCreatedPage.css'

export const ServiceCreatedPage: React.FC = () => {
  const serviceSelector = (state: IRootState) => state.service

  const { protocol } = useSelector(serviceSelector)

  return (
    <>
        <h2 className='page-title'>Solicitação de Serviço</h2>
        <div className='service-created'>
          <h3>Solicitação criada com sucesso! Protocolo: {protocol}</h3>
        </div>
    </>
  )  
}