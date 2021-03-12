import './CitizenPage.css'
import { ICitizenService, citizenServicesList } from './CitizenServicesList'

export const CitizenPage: React.FC = () => {
    return (
        <>
            <div>
                <h2 className="page-title">Serviços do Cidadão</h2>
                <div className="citizen-services">
                    {citizenServicesList.map((service: ICitizenService) => {
                        return (
                            <a href={service.url} key={service.title}>
                                <div className="citizen-service-item">
                                    <i className={service.cName}></i>
                                    <p>{service.title}</p>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}