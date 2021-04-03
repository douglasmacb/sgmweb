import './Contact.css'
import { useSelector } from 'react-redux'
import { IRootState } from '../../store'
import { IServiceState } from '../../store/service/types'

interface IService {
    name: string
    phone: string
}

export const Contact = () => {
    const serviceStateSelector = (state: IRootState) => state.service
    const serviceState: IServiceState = useSelector(serviceStateSelector)
    return (
        <>
            <h2 className="page-title">Fale Conosco</h2>
            <ul className="list">
                {serviceState.serviceContactsData.map((service: IService) => {
                    return (
                        <div className="item">
                            <li className="child-primary">{service.name}</li>
                            <li className="child-secondary"><a href={`tel:${service.phone}`}>{service.phone}</a></li>
                        </div>
                    )
                })
                }
            </ul>
        </>
    )
}