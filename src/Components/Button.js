import React from 'react'
import "./Button.css"


///Global styled button that can be used anywherte in the page 



const STYLES = ["btn--primary", 'btn---outline']

const SIZES = ['btn--medium', 'btn-large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'blue', 'red', 'green']



///exporting the value we are targeting 

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor

}) =>
{


    const checkButtonColor = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonStyle) ? buttonStyle : SIZES[0]

    const checkButtonStyle = COLOR.includes(buttonStyle) ? buttonStyle : COLOR[0]

    return (
        <button
            className={`btn${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>

            {children}
        </button>


    )
}