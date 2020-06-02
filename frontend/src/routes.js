import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Player from '../src/components/VideoPlayer/VideoPlayer'
import AdminLogin from './admin/adminLogin/index'
import AdminPanel from './admin/adminPanel/index'
import Home from './pages/Home/Home';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/player" component={Player}/>
                <Route exact path="/admin" exact component={AdminLogin}/>
                <Route path="/adminPanel" component={AdminPanel}/>
            </Switch>
        </BrowserRouter>
    )
}