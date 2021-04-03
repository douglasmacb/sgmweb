import React from 'react'
import './Button.css'
import { Spinner } from '../components/Spinner/Spinner'

const STYLES = [
    'btn--primary',
    'btn--outline',
]

const SIZES = [
    'btn--small',
    'btn--medium',
    'btn--large'
]

export interface Props {
    children?: string
    type?: 'submit' | 'reset' | 'button'
    loading?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    buttonStyle?: string
    buttonSize?: string
    disabled?: boolean
    cName?: string,
    value?: 'string | number | readonly string[] | undefined',
}

export const Button: React.FC<Props> = (props) => {
    const {
        buttonStyle,
        buttonSize,
        loading,
        onClick,
        type,
        children,
        cName,
    } = props;
    let checkButtonStyle = STYLES[0]
    let checkButtonSize = SIZES[0]
    let checkButtonDisabled = false

    if (buttonStyle && STYLES.includes(buttonStyle)) {
        checkButtonStyle = buttonStyle
    }
    if (buttonSize && SIZES.includes(buttonSize)) {
        checkButtonSize = buttonSize
    }

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${cName}`} disabled={checkButtonDisabled || loading} onClick={onClick} type={type}>
            {
                (loading
                    ? <Spinner />
                    : children
                )
            }
        </button>
    )
}