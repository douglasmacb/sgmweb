import * as React from 'react'
import './Home.css'
import { Search } from '..'

export const Home = () => {
    return (
        <div className="container">
            <Search title="Consultar CPF / CNPJ" />
            <Search title="Consultar Status do Processo" />
            <Search title="Consultar Status do Processo" />
        </div>
    )
}