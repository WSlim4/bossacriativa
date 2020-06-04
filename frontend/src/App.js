import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './global.css';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Imprensa from './pages/Imprensa/Imprensa';
import Videoaulas from './pages/Videoaulas/Videoaulas';
import Parceiros from './pages/Parceiros/Parceiros';
import Palestras from './pages/Palestras/Palestras';
import Midia from './pages/Midia/Midia';
import Editais from './pages/Editais/Editais';
import Player from './components/VideoPlayer/VideoPlayer';

  class App extends Component {
    render() {
        return (
          <BrowserRouter>
          <div className="App wrapper">
            <div className="content">
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/editais" component={Editais}/>
              <Route path="/midia" component={Midia}/>
              <Route path="/palestras" component={Palestras}/>
              <Route path="/parceiros" component={Parceiros}/>
              <Route path="/videoaulas" component={Videoaulas}/>
              <Route path="/imprensa" component={Imprensa}/>
              <Route path="/player" component={Player}/>
            </Switch>
            </div>
            <Footer/>
          </div>
          </BrowserRouter>
        );
      }
  }

  export default App;