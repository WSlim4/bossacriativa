import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Player from '../src/components/VideoPlayer/VideoPlayer'
import AdminLogin from './admin/adminLogin/index'
import AdminPanel from './admin/adminPanel/index'
import Users from './admin/Users/index'
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

export default function Routes(){
    return (
        <BrowserRouter>
                <div className="App wrapper">
                    <div className="content">
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/player" component={Player}/>
                        <Route path="/restrito/admin" exact component={AdminLogin}/>
                        <Route path="/restrito/admin/adminPanel" component={AdminPanel}/>
                        <Route path="/users" component={Users}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
        </BrowserRouter>
    )
}