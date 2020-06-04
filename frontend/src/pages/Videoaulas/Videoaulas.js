import React, { useState, useEffect } from 'react';
import '../../global.css';
import './Videoaulas.css';
import { Row, Col } from 'react-grid-system';
import api from '../../services/api'
import ReactPlayer from 'react-player'

function VideoAulas(){
      const [lessons, setLessons] = useState([])

      useEffect(()=>{
        api.get('/lessons').then(res=>setLessons(res.data.data))
    }, [])

      return (
        <div className="videoaulas-container">
            <div className="video-contents">
                <header className="title-home">VIDEO AULAS EM DESTAQUE</header>
                    <ul>
                         {lessons.map(video=>
                            <li key={video.id}>
                            <p><strong>Título:</strong>{video.title}</p>
                            <ReactPlayer
                             url={video.url} 
                             width='100%' 
                             height='100%'
                             controls
                            />
                            <strong>Descrição:</strong>
                            <p>{video.description}</p>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
    
    )
}
  export default VideoAulas;
  