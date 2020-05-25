import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Player from '../src/pages/videoplayer'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/player" component={Player}/>
            </Switch>
        </BrowserRouter>
    )
}