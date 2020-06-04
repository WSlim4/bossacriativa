import React, { useState, useEffect } from 'react';
import '../../global.css';
import './Videoaulas.css';
import { Row, Col } from 'react-grid-system';
import api from '../../services/api'

function VideoAulas(){
      const [lessons, setLessons] = useState([])

      useEffect(()=>{
        api.get('/lessons').then(res=>setLessons(res.data.data))
    }, [])

      return (
        <div className="videoaulas-container">
            <div className="video-list-div">
                <div className="title-div">
                <h2 className="title-home">VIDEOAULAS EM DESTAQUE</h2>
                </div>
                <div className="video-list">
                    <Row>
                        {lessons.map(video=>
                            <Col sm={3}>
                               <div className="video">
                                    <h4 className="videoaula">{video.course_name}</h4>
                                    <h5 className="instrumento">Violão</h5>
                                    <h6 className="aula">Composição</h6>
                               </div>
                           </Col>
                        )}
                    </Row>
                    
                </div>
            </div>
        </div>
    
    )
}
  export default VideoAulas;
  