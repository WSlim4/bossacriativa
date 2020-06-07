import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-grid-system';
import '../../global.css';
import './Home.css';
import Banner from '../../assets/banner-1.jpg';
import api from '../../services/api'
import ReactPlayer from 'react-player'

function Home() {
  const [lessons, setLesson] = useState([])
  
  useEffect(()=>{
    api.get('/lastLessons').then(res=>setLesson(res.data))
  }, [])

  return (
    <div className="home-container">
      <div className="banner-div">
        <img src={Banner} alt="Logo" className="banner"/>
      </div>
      <div className="event-list-div">
        <div className="title-div">
          <h2 className="title-home">PRÓXIMOS EVENTOS</h2>
        </div>
        <div className="event-list">
          <Row>
            <Col sm={3}>
              <div className="event">
                <h4 className="artist">The Maine</h4>
                <div className="infos">
                  <h5 className="data">07/07/2020</h5>
                  <h5 className="local">CIRCO VOADOR</h5>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="event">
                <h4 className="artist">The Maine</h4>
                <div className="infos">
                  <h5 className="data">07/07/2020</h5>
                  <h5 className="local">CIRCO VOADOR</h5>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="event">
                <h4 className="artist">The Maine</h4>
                <div className="infos">
                  <h5 className="data">07/07/2020</h5>
                  <h5 className="local">CIRCO VOADOR</h5>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="event">
                <h4 className="artist">The Maine</h4>
                <div className="infos">
                  <h5 className="data">07/07/2020</h5>
                  <h5 className="local">CIRCO VOADOR</h5>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="video-list-div">
        <div className="title-div">
          <h2 className="title-home">ÚLTIMAS ADICIONADAS</h2>
        </div>
        <div className="video-list">
            {lessons.map((lesson)=>
                  <ReactPlayer 
                  url={lesson.url}
                  controls
                  width='100%'
                  height='100%'
                  />
                )}
            </div>
        </div>
      </div>
  );
}

export default Home;
