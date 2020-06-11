import React, { useState, useEffect } from 'react';
import '../../global.css';
import './Home.css';
import Banner from '../../assets/banner-1.jpg';
import api from '../../services/api'
import ReactPlayer from 'react-player'
import maine from '../../assets/themaine.jpg'

function Home() {
  const [lessons, setLesson] = useState([])
  const [shows, setShows] = useState([])
  const [events, setEvents] = useState([])

  useEffect(()=>{
    api.get('/lastLessons').then(res=>setLesson(res.data))
    api.get('/lastShows').then(res=>setShows(res.data))
    api.get('/lastEvents').then(res=>setEvents(res.data))
  }, [])

  return (
    <div className="home-container">
      <div className="banner-div">
        <img src={Banner} alt="Logo" className="banner"/>
      </div>
      <div className="event-list-div">
        <div className="title-div">
          <h2 className="title-home">EVENTOS</h2>
        </div>
        <div className="event-list">
                {events.map((evento)=>
                 <div className="event" style={{backgroundImage: `url(${evento.img})`}}>
                  <h4 className="artist">{evento.artist}</h4>
                  <div className="infos">
                    <h5 className="data">{evento.data}</h5>
                    <h5 className="local">{evento.address}</h5>
                  </div>
                </div>
                )}
          </div>
        </div> 
      <div className="event-list-div">
        <div className="title-div">
          <h2 className="title-home">SHOWS</h2>
        </div>
        <div className="video-list">
            {shows.map((show)=>
                  <ReactPlayer 
                      url={show.url}
                      controls
                      width='100%'
                      height='100%'
                    />
                )}
            </div>
      </div>
      <div className="video-list-div">
        <div className="title-div">
          <h2 className="title-home">ÚLTIMAS AULAS</h2>
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
