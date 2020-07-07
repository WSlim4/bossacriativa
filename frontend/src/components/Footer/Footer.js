import React, { Component } from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import facebook from '../../assets/redesAssets/facebook.svg'
import instagram from '../../assets/redesAssets/instagram.svg'
import youtube from '../../assets/redesAssets/youtube.svg'
import chancelaria from '../../assets/chancelaria.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="grey">
                    <div className="footer-content">
                    <div className="redes">
                        <p className="footer-title">SOCIAL</p>
                        <a href="https://www.instagram.com/bossacriativa.art/" target="__blank"><img src={instagram} className="redes-icons"/></a>
                        <a href="https://www.youtube.com/channel/UC5RwQ_KlODEtsnK4mRufQNg/featured?disable_polymer=1" target="__blank"><img src={youtube} className="redes-icons"/></a>
                        <a href="https://www.facebook.com/Bossa-Criativa-102167128189161/" target="__blank"><img src={facebook} className="redes-icons"/></a>
                    </div>
                    <div className="contents">
                        <div className="institucional">
                            <p className="footer-title"> INSTITUCIONAL</p>
                            <Link className="link" to="/about">Sobre o projeto</Link><br />
                            <Link className="link" to="/parceiros">Realizadores e parceiros</Link><br />
                            <Link className="link" to="/imprensa">Assessoria de imprensa</Link>
                        </div>
                        <div className="contato">
                            <p className="footer-title">CONTATOS</p>
                            <p className="footer-text">email@bossacriativa.com.br</p>
                        </div>
                        <div className="acesso">
                            <p className="footer-title">ACESSO</p>
                            <Link className="link" to="/login">Faça Login</Link><br/>
                            {/*<Link className="link" to="/cadastro">Ainda não tenho cadastro</Link><br/>*/}
                        </div>
                    </div>
                </div>
                </div>
                <div className="bloco yellow">
                    <h6 className="copyright left" style={{backgroundColor: 'transparent'}}>
                        © 2020 Copyright Bossa Criativa: Arte de toda gente - todos os direitos reservados</h6>
                    <div className="footer-img apoio">
                        <img src={chancelaria} alt="Logo UFRJ"/>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Footer; 