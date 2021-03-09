import * as React from 'react'
import { Button } from '../Button'
import InputMask from 'react-input-mask';
import './Search.css'

export interface Props {
    title?: string
    onClick?: React.MouseEvent<HTMLElement>
    mask?: string
}

export const Search: React.FC<Props> = ({ mask, title, onClick }) =>  {
    const maskInput = mask ? mask : ""

    return (
        <div className="search">
            <label className="title">{title}</label>
            <InputMask mask={maskInput} className="input" />
            <Button buttonStyle="btn--secondary" buttonSize="btn--small" onClick={onClick}>Consultar</Button>
        </div>
    )
}