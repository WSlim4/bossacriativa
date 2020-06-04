import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Player from '../src/components/VideoPlayer/VideoPlayer'
import AdminLogin from './admin/adminLogin/index'
import AdminPanel from './admin/adminPanel/index'
import Home from './pages/Home/Home'
import Route from './Route'

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/player" component={Player}/>
                <Route exact path="/admin" exact component={AdminLogin}/>
                <Route path="/admin/adminPanel" component={AdminPanel}  isPrivate/>
            </Switch>
        </BrowserRouter>
    )
}