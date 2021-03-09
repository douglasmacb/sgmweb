import React from 'react'
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--secondary',
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
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    buttonStyle?: string
    buttonSize?: string
    cName?: string,
    value?: 'string | number | readonly string[] | undefined'
}

export const Button: React.FC<Props> = (props) =>  {
    const { 
        buttonStyle,
        buttonSize,
        onClick,
        type,
        children,
        cName,
    } = props;
    let checkButtonStyle = STYLES[0]
    let checkButtonSize = SIZES[0]

    if(buttonStyle && STYLES.includes(buttonStyle)) {
        checkButtonStyle = buttonStyle
    }
    if(buttonSize && SIZES.includes(buttonSize)) {
        checkButtonSize = buttonSize
    }
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${cName}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}