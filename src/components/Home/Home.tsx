import './Home.css'
import { Banner } from '../../components'
import { FastAccess } from '../FastAccess/FastAccess'

export const Home: React.FC = () => {
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