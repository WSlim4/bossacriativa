import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Dropdown} from 'react-bootstrap';
import './Navbar.css';
import logonav from '../../assets/logotipo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    render() {
        return (
            <>
            <Navbar className="flexAdjust">
                <Link to="/" className="logoNavbar">
                    <img src={logonav} alt="Logo" className="brand-logo"/>
                </Link>
                <Nav className='menuItem' id="largeMenuItem">
                <ul id="nav-mobile" className="d-none d-lg-block">
                    <li><NavLink className="link" to="/about">O PROJETO</NavLink></li>
                    <li><NavLink className="link" to="/apresentacoes">APRESENTAÇÕES</NavLink></li>
                    {/*<li><NavLink className="link" to="/palestras">PALESTRAS</NavLink></li>*/}
                    <li><NavLink className="link" to="/oficinas">OFICINAS</NavLink></li>
                    <li><NavLink className="link" to="/galeria">GALERIA</NavLink></li>
                    <li><NavLink className="link" to="/noticias">NOTÍCIAS</NavLink></li> 
                    <li><NavLink className="link" to="/parceiros">PARCEIROS</NavLink></li>
                    <li><NavLink className="link" to="/patrimonio">PATRIMÔNIO</NavLink></li>
                    <li><NavLink className="link" to="/imprensa">IMPRENSA</NavLink></li> 
                </ul>
                </Nav>
                <Nav className='d-lg-none menuItem'>
                    <NavDropdown title="MENU" id="correctFont">
                        <NavDropdown.Item><NavLink className="link" to="/about">O PROJETO</NavLink></NavDropdown.Item>
                        {/*<NavDropdown.Item><NavLink className="link" to="/palestras">PALESTRAS</NavLink></NavDropdown.Item>*/}
                        <NavDropdown.Item><NavLink className="link" to="/oficinas">OFICINAS</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink className="link" to="/galeria">GALERIA</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink className="link" to="/noticias">NOTÍCIAS</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink className="link" to="/parceiros">PARCEIROS</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink className="link" to="/patrimonio">PATRIMÔNIO</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink className="link" to="/imprensa">IMPRENSA</NavLink></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
            </>
        );
    }
  }

export default NavBar; 
