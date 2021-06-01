import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import classNames from './Registration.module.css'

const Registration = () => {
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
                                placeholder="Prenom"
                            />
                        </div>
                        <div>
                            <input 
                                className = {classNames.inputStyle}
                                type="text"
                                placeholder="Nom"
                            />
                        </div>
                        <div>
                            <input 
                                className = {classNames.inputStyle}
                                type="text"
                                placeholder="Email professionnel"
                            />
                        </div>
                        <div>
                        <input 
                            className = {classNames.inputStyle}
                            type="text"
                            placeholder="Mot de passe"
                            />
                        </div>
                        <div>
                        <input 
                            className = {classNames.inputStyle}
                            type="text"
                            placeholder="Avatar"
                            />
                        </div>
                        <div>
                            <Button
                            color = "green"
                            title = "Créer"
                            ></Button></div>
                    </form>
                </div>
        

            <Footer />
        </div>
    )
}

export default Registration
