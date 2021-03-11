import { Banner } from '../../components'
import FastAccess from '../../components/FastAccess/FastAccess'
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