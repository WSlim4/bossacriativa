import React, { Component } from 'react';
import '../../global.css';
import './Footer.css';
import Funarte from '../../assets/funarte.svg';
import UFRJ from '../../assets/ufrj.png';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer container">
                <div className="grey">
                    <div className="inst">
                        <p className="footer-title">INSTITUCIONAL</p>
                        <Link className="link" to="/about">Sobre o projeto</Link><br />
                        <Link className="link" to="/">Realizadores e parceiros</Link><br />
                        <Link className="link" to="/imprensa">Assessoria de imprensa</Link>
                    </div>
                    <div className="contato">
                        <p className="footer-title">CONTATOS</p>
                        <p className="footer-text">email@bossacriativa.com.br</p>
                    </div>
                </div>
                <div className="bloco yellow">
                    <h6 className="copyright left">© 2020 Copyright Bossa Criativa: Arte de toda gente - todos os direitos reservados</h6>
                    <div className="apoio">
                        <a className="funarte" href="https://www.funarte.gov.br/" target="_blank">
                            <img src={Funarte} alt="Logo" className="brand-logo funarte-logo"/>
                        </a>
                        <a className="ufrj" href="https://ufrj.br/" target="_blank">
                            <img src={UFRJ} alt="Logo" className="brand-logo ufrj-logo"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Footer; 