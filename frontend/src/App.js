import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './global.css';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
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