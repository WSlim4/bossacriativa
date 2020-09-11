import React from 'react';
import './Parceiros.css';
import { Container, Row, Col } from 'react-grid-system';
import Funarte from '../../assets/funarte.svg';
import UFRJ from '../../assets/ufrj.png';
import EscMus from '../../assets/escmus.png';
import Bonif from '../../assets/bonif.png';
import ufrj from '../../assets/realizacao/ufrj.png'
import patria from '../../assets/realizacao/patria.jpg'
import minas from '../../assets/apoio/minas.png'
import brasilia from '../../assets/apoio/brasilia.png'
import bh from '../../assets/apoio/bh.png'
import ouropreto from '../../assets/apoio/ouropreto.jpg'
import olinda from '../../assets/apoio/olinda.png'
import paraty from '../../assets/apoio/paraty.jpg'
import saoluis from '../../assets/apoio/saoluis.jpg'
import brasao from '../../assets/apoio/brasao.png'
import ppg from '../../assets/apoio/ppg.jpeg'

function Parceiros() {
    return (
        <div className="parceiros-container">
        <Container>
            {/*<h1 className="main-title">PATROCINADORES</h1>
            <div className="text-about-div">
                <Row>
                    <Col sm={12}>     
                        <div className="logo-row-top"> 
                            <a className="funarte" href="https://www.funarte.gov.br/" target="_blank">
                                <img src={Funarte} alt="Logo Funarte" className="logoss"/>
                            </a>
                            <a className="ufrj" href="https://ufrj.br/" target="_blank">
                                <img src={UFRJ} alt="Logo UFRJ" className="logoss"/>
                            </a>
                            <a href="http://www.musica.ufrj.br/">
                                <img src={EscMus} alt="Logo Escola de Música" className='brand-logo logoss'></img>
                            </a>
                            <a href="http://www.fujb.ufrj.br/">
                                <img src={Bonif} alt="Logo Fundação José Bonifácio" className="logoss"></img>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>*/}
        {/*<h1 className="main-title">APOIO</h1>
            <div className="text-about-div">
                <Row>
                    <Col sm={12}>     
                        <div className="logo-row-top"> 
                            <a className="funarte" href="https://www.funarte.gov.br/" target="_blank">
                                <img src={Funarte} alt="Logo Funarte" className="logoss"/>
                            </a>
                            <a className="ufrj" href="https://ufrj.br/" target="_blank">
                                <img src={UFRJ} alt="Logo UFRJ" className="logoss"/>
                            </a>
                            <a href="http://www.musica.ufrj.br/">
                                <img src={EscMus} alt="Logo Escola de Música" className='brand-logo logoss'></img>
                            </a>
                            <a href="http://www.fujb.ufrj.br/">
                                <img src={Bonif} alt="Logo Fundação José Bonifácio" className="logoss"></img>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>*/}
            <h1 className="main-title">APOIO INSTITUCIONAL</h1>
            <div className="text-about-div">    
                <div className="logo-row-top"> 
                    <div className="first-column">
                        <div className="minas">
                            <a href="http://www.cultura.mg.gov.br/" target="_blank">
                                <img src={minas} alt="Logo minas" className="logoss"/> 
                            </a>
                        </div>
                        <div className="brasilia">
                            <a href="http://www.turismo.df.gov.br/" target="_blank">
                                <img src={brasilia} alt="Logo brasília" className="logoss"/> 
                            </a>
                        </div>
                        <div className="bh">
                            <a href="https://prefeitura.pbh.gov.br//" target="_blank">
                                <img src={bh} alt="Logo bh" className="logoss"/> 
                            </a>
                        </div>
                    </div>
                    <div className="second-column">
                        <div className="ouro-preto">
                            <a href="https://www.ouropreto.mg.gov.br/" target="_blank">
                                <img src={ouropreto} alt="Logo ouropreto" className="logoss"/> 
                            </a>
                        </div>
                        <div className="olinda">
                            <a href="https://www.olinda.pe.gov.br/" target="_blank">
                                <img src={olinda} alt="Logo olinda" className="logoss"/> 
                            </a>
                        </div>
                        <div className="paraty">
                            <a href="http://paraty.rj.gov.br/" target="_blank">
                                <img src={paraty} alt="Logo paraty" className="logoss"/> 
                            </a>
                        </div>
                        <div className="saoluis">
                            <a href="https://www.saoluis.ma.gov.br/" target="_blank">
                                <img src={saoluis} alt="Logo saoluis" className="logoss"/> 
                            </a>
                        </div>
                        <div className="brasao">
                            <a href="https://www.saomiguel-rs.com.br/site" target="_blank">
                                <img src={brasao} alt="brasão" className="logoss"/> 
                            </a>
                        </div>
                    </div>
                </div>    
            </div>
            <h1 className="main-title">REALIZAÇÃO</h1>
            <div className="text-about-div">
                <div className="logo-row">
                    <div className="ufrj"> 
                        <a href="https://ufrj.br/" target="_blank">
                            <img src={ufrj} alt="Logo ufrj" className="logoss"/> 
                        </a>
                    </div>
                        <a href="http://www.musica.ufrj.br/">
                            <img src={EscMus} alt="Logo Escola de Música" className='brand-logo logoss'></img>
                        </a>
                        <a href="http://www.fujb.ufrj.br/">
                            <img src={Bonif} alt="Logo Fundação José Bonifácio" className="logoss"></img>
                        </a>
                        <div className="funarte">
                            <a href="https://www.funarte.gov.br/" target="_blank">
                                <img src={Funarte} alt="Logo Funarte" className="logoss"/>
                            </a>
                        </div>
                        <div className="patria">
                            <a href="http://www.turismo.gov.br/" target="_blank">
                                <img src={patria} alt="Logo UFRJ" className="logoss" width="1000px"/>
                            </a>
                        </div>
                </div>
            </div>
            <h1 className="main-title">QUER SER NOSSO PARCEIRO?</h1>
            <div className="text-about-div">
                <div className="text-div">
                    <p>
                        Que tal ter sua marca fazendo parte do Bossa Criativa - Arte de Toda Gente?
                    </p>
                    <p>Entre em contato pelo <strong>email: marketing@musica.ufrj.br</strong> e saiba como.
                    </p>
                </div>
            </div>
            
        </Container>
    </div>
    )
  }
  
  export default Parceiros;
  