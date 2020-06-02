import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import '../../global.css';
import './Navbar.css';
import logonav from '../../assets/logotipo.png';

class NavBar extends Component {
    render() {
        return (
            <>
            <Navbar>
                <Link to="/" className="logo">
                    <img src={logonav} alt="Logo" className="brand-logo"/>
                </Link>
                <Nav className="mr-auto">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink className="link" to="/about">O PROJETO</NavLink></li>
                    <li><NavLink className="link" to="/">PALESTRAS</NavLink></li>
                    <li><NavLink className="link" to="/">VIDEOAULAS</NavLink></li>
                    <li><NavLink className="link" to="/">MIDIA</NavLink></li>
                    <li><NavLink className="link" to="/">IMPRENSA</NavLink></li> 
                    <li><NavLink className="link" to="/">EDITAIS</NavLink></li>    
                </ul>
                </Nav>
            </Navbar>
            </>

            
        );
    }
  }
  
  export default NavBar; 