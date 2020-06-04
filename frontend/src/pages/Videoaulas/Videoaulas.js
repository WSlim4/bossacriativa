import React from 'react';
import '../../global.css';
import './Videoaulas.css';
import { Container, Row, Col } from 'react-grid-system';

function Videoaulas() {
    return (
        <div className="videoaulas-container">
            <div className="video-list-div">
                <div className="title-div">
                <h2 className="title-home">VIDEOAULAS EM DESTAQUE</h2>
                </div>
                <div className="video-list">
                <Row>
                    <Col sm={3}>
                    <div className="video">
                        <h4 className="videoaula">VÍDEO AULA</h4>
                        <h5 className="instrumento">Violão</h5>
                        <h6 className="aula">Composição</h6>
                    </div>
                    </Col>
                    <Col sm={3}>
                    <div className="video">
                        <h4 className="videoaula">VÍDEO AULA</h4>
                        <h5 className="instrumento">Violão</h5>
                        <h6 className="aula">Composição</h6>
                    </div>
                    </Col>
                    <Col sm={3}>
                    <div className="video">
                        <h4 className="videoaula">VÍDEO AULA</h4>
                        <h5 className="instrumento">Violão</h5>
                        <h6 className="aula">Composição</h6>
                    </div>
                    </Col>
                    <Col sm={3}>
                    <div className="video">
                        <h4 className="videoaula">VÍDEO AULA</h4>
                        <h5 className="instrumento">Violão</h5>
                        <h6 className="aula">Composição</h6>
                    </div>
                    </Col>
                </Row>
                </div>
            </div>
        </div>
    
    )
  }
  
  export default Videoaulas;
  