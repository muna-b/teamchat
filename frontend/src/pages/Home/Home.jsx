import React from 'react'
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import Button from './../../components/Button/Button'
import classNames from './Home.module.css'

function Home() {
    return (
        <div>
            <Header />
                <div className = {classNames.container}>
                    <h1 className = {classNames.title}>Chat, salons de discussion</h1>
                        
                    <p>Fluidifiez les échanges au sein de vos équipes grâce à la messagerie Teamchat </p>


                    <div>
                        <Button
                            color = "bigBlue"
                            title = "Se connecter"
                        ></Button>
                        <Button
                            color = "bigGreen"
                            title = "S'incrire"
                        ></Button>

                        <Button
                            color = "bigBlue"
                            title = "Démo"
                        ></Button>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Home
