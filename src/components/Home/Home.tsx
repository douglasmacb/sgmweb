import * as React from 'react'
import './Home.css'
import { Search } from '..'


const submitCpfCnpjSearch: React.FormEventHandler<HTMLFormElement>  = (event: any) => {
    event.preventDefault();
    console.log(event)
}

export const Home = () => {

    return (
        <div className="container">
            <div>
                <h3 className="page-title">Início</h3>
            </div>
            <div className="search-bar">
                <Search title="Consultar CPF / CNPJ" 
                    maxInputLength={11} 
                    handleSubmit={submitCpfCnpjSearch} 
                />
                <Search 
                    title="Consultar Status do Processo" 
                />
            </div>
        </div>
    )
}