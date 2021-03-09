import { Banner, FastAccess } from '../../components'
import './HomePage.css'

export const HomePage: React.FC = () => {
    return (
        <>
           <Banner />
            <div>
                <h2 className="page-title">Início</h2>
            </div>
            <FastAccess />
        </>
    )
}