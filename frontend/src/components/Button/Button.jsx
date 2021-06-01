import React from 'react'
import classNames from './Button.module.css'

function Button({onClick, title, color}) {
    let styleName

    switch (color) {
        case "green":
            styleName = classNames.buttonGreen;
            break;
        
        case "red":
            styleName = classNames.buttonRed;
            break;

        case "blue":
            styleName = classNames.buttonBlue
            break;
    
        default:
            styleName = classNames.buttonBlue
            break;
    }
    return (
        <button className = {styleName} onClick = {onClick}>
            {title}
        </button>
    )
}

export default Button
