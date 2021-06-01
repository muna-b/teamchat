import React from 'react'
import {Route, Switch} from "react-router"
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

const Routes = () => {
    return (
        <Switch>
            <Route path='/connexion' exact>
                <Login />
            </Route>
            <Route path='/' exact>
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes
