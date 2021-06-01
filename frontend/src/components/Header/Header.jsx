import React from 'react'
import classNames from './Header.module.css'

function header() {
    return (
        <header className = {classNames.headerColor}>
            <div className = {classNames.container}>
                <ul>
                    <li className = {classNames.logo}>Teamchat <i class="fas fa-comment-alt"></i></li>
                </ul> 
                <ul className = {classNames.menu}>
                    <li className = {classNames.styleLi}>Inscription</li>
                    <li className = {classNames.styleLi}>Connexion</li>
                </ul>
            </div>
            <div className = {classNames.underline}></div>
           
        </header>
    )
}

export default header
