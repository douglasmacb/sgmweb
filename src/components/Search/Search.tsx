import * as React from 'react'
import { Button } from '../Button'
import InputMask from 'react-input-mask';
import './Search.css'

export interface Props {
    title?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    mask?: string,
    handleSubmit?: React.FormEventHandler<HTMLFormElement> 
    maxInputLength?: number
}

export const Search: React.FC<Props> = ({ mask, title, maxInputLength, handleSubmit }) =>  {

    const [value, setValue] = React.useState('')
 
    const maskInput = mask ? mask : ""

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label className="title">{title}</label>
            <div className="field-area">
                <InputMask 
                    mask={maskInput} 
                    value={value} 
                    maxLength={maxInputLength}
                    onChange={handleChange} 
                    className="input" 
                />
                <Button 
                    buttonStyle="btn--secondary" 
                    buttonSize="btn--small"
                    type="submit">
                    Consultar
                </Button>
            </div>
        </form>
    )
}