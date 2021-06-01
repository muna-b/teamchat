import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import classNames from './Login.module.css'


function Login() {
    return (
        <div>
            <Header />
                <div className = {classNames.container}>
                    <h2 className = {classNames.title}>Se connecter</h2>
                    <form action="">
                        <div>
                            <input 
                                className = {classNames.inputStyle}
                                type="text"
                                placeholder="identifiant"
                            />
                        </div>
                        <div>
                        <input 
                            className = {classNames.inputStyle}
                            type="text"
                            placeholder="mot de passe"
                            />
                        </div>
                        <div>
                            <Button
                            color = "default"
                            title = "Connexion"
                            ></Button></div>
                    </form>
                </div>
        

            <Footer />
        </div>
    )
}

export default Login
