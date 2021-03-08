import React from 'react'
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export interface Props {
    children?: string
    type?: 'submit' | 'reset' | 'button'
    onClick?: any
    buttonStyle?: string
    buttonSize?: string
}

export const Button: React.FC<Props> = (props) =>  {
    const { 
        buttonStyle,
        buttonSize,
        onClick,
        type,
        children
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
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}