import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../../global.css';
import './Navbar.css';
import logonav from '../../assets/logotipo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    render() {
        return (
            <>
            <Navbar>
                <Link to="/" className="logo">
                    <img src={logonav} alt="Logo" className="brand-logo"/>
                </Link>
                <Nav className='menuItem' id="largeMenuItem">
                <ul id="nav-mobile" className="d-none d-lg-block">
                    {/* <li><NavLink className="link" to="/login">LOGIN</NavLink></li> */}
                    <li><NavLink className="link" to="/about">O PROJETO</NavLink></li>
                    <li><NavLink className="link" to="/palestras">PALESTRAS</NavLink></li>
                    <li><NavLink className="link" to="/shows">SHOWS</NavLink></li>
                    <li><NavLink className="link" to="/videoaulas">VIDEOAULAS</NavLink></li>
                    <li><NavLink className="link" to="/midia">MIDIA</NavLink></li>
                    <li><NavLink className="link" to="/imprensa">IMPRENSA</NavLink></li> 
                    <li><NavLink className="link" to="/editais">EDITAIS</NavLink></li>
                </ul>
                {/* <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div> */}
                </Nav>
                <Nav className='d-lg-none menuItem'>
                    <NavDropdown title="Menu">
                        {/* <NavDropdown.Item><NavLink className="link" to="/login">LOGIN</NavLink></NavDropdown.Item> */}
                        <NavDropdown.Item><NavLink className="link" to="/about">O PROJETO</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink className="link" to="/palestras">PALESTRAS</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink className="link" to="/shows">SHOWS</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink className="link" to="/videoaulas">VIDEOAULAS</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink className="link" to="/midia">MIDIA</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink className="link" to="/imprensa">IMPRENSA</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink className="link" to="/editais">EDITAIS</NavLink></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
            
                    
            </>

            
        );
    }
  }
  
  export default NavBar; 
