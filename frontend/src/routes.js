import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Player from '../src/pages/videoplayer'
import adminLogin from './admin/adminLogin/index'
import adminPanel from './admin/adminPanel/index'
import Users from './admin/Users/index'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/player" component={Player}/>
                <Route path="/restrito/admin" exact component={adminLogin}/>
                <Route path="/restrito/admin/adminPanel" component={adminPanel}/>
                <Route path="/users" component={Users}/>
            </Switch>
        </BrowserRouter>
    )
}