import './FastAccess.css'
import { Search } from '../Search/Search'
import history from '../../history'

const SearchByCpfCnpj = (event: any) => {
    console.log(event)
    history.push('/tax')
}

const searchProcess = (event: any) => {
}

export const FastAccess: React.FC = () => {

    return (
        <div className="fast-access">
            <div className="search-bar">
                <Search title="Consultar Imposto Territorial por CPF / CNPJ" formValues={SearchByCpfCnpj} maxLength={14} />
                <Search title="Consultar Processos" mask="999999" formValues={searchProcess} />
            </div>
        </div>
    )
}