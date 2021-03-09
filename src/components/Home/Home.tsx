import './Home.css'
import { Search, Banner } from '..'


const dispatchCpfCnpj = (event: any) => {
    console.log('eae', event)
}

export const Home = () => {

    return (
        <div className="container">
            <Banner />
            <div>
                <h2 className="page-title">Início</h2>
            </div>
            <div className="search-bar">
                <Search title="Consultar CPF / CNPJ" formValues={dispatchCpfCnpj} maxLength={12} />
                <Search title="Consultar Processos" mask="999999" formValues={dispatchCpfCnpj} />
            </div>
        </div>
    )
}