import './FastAccess.css'
import { Search } from '../Search/Search'


const handleCpfCnpj = (event: any) => {
    console.log('eae', event)
}

export const FastAccess: React.FC = () => {
    return (
        <div className="fast-access">
            <div className="search-bar">
                <Search title="Consultar CPF / CNPJ" formValues={handleCpfCnpj} maxLength={12} />
                <Search title="Consultar Processos" mask="999999" formValues={handleCpfCnpj} />
            </div>
        </div>
    )
}