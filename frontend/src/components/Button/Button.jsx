import React from 'react'
import classNames from './Button.module.css'

function Button({onClick, title, color}) {
    let styleName

    switch (color) {
        case "bigGreen":
            styleName = classNames.buttonBigGreen;
            break;
        
        case "red":
            styleName = classNames.buttonRed;
            break;

        case "bigBlue":
            styleName = classNames.buttonBigBlue
            break;
    
        default:
            styleName = classNames.buttonDefault
            break;
    }
    return (
        <button className = {styleName} onClick = {onClick}>
            {title}
        </button>
    )
}

export default Button
