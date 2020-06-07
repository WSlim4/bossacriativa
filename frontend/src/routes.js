import React from 'react'
import { Router, Switch } from 'react-router-dom'
import AdminLogin from './pages/admin/adminLogin/index'
import AdminPanel from './pages/admin/adminPanel/index'
import Home from './pages/Home/Home'
import Route from './Route'
import About from './pages/About/About';
import Imprensa from './pages/Imprensa/Imprensa';
import Videoaulas from './pages/Videoaulas/Videoaulas';
import Parceiros from './pages/Parceiros/Parceiros';
import Palestras from './pages/Palestras/Palestras';
import Midia from './pages/Midia/Midia';
import Editais from './pages/Editais/Editais';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import history from './services/history'

export default function Routes(){

    return (
        <Router history={history}>
          <div className="App wrapper">
            <div className="content">
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/admin" exact component={AdminLogin}/>
              <Route exact path="/admin/adminPanel/:page?" exact component={AdminPanel} isPrivate/>
              <Route path="/about" component={About}/>
              <Route path="/editais" component={Editais}/>
              <Route path="/midia" component={Midia}/>
              <Route path="/palestras" component={Palestras}/>
              <Route path="/parceiros" component={Parceiros}/>
              <Route path="/videoaulas/:page?" component={Videoaulas}/>
              <Route path="/imprensa" component={Imprensa}/>
            </Switch>
            </div>
            <Footer/>
          </div>
        </Router>
    )
}