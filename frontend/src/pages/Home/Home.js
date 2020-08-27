import React, { useState, useEffect } from 'react';
import '../../global.css';
import './Home.css';
import api from '../../services/api'
import strapi from '../../services/strapi'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import history from '../../services/history'

import strapi from '../../services/strapi'

function Home() {
  const [workshops, setWorkshop] = useState([])
  // const [lectures, setLectures] = useState([])
  const [shows, setShows] = useState([])
  const [newses, setNews] = useState([])
  const [banners, setBanners] = useState([])
  const [events, setEvents] = useState([])
  const [publications, setPublications] = useState([])

  useEffect(()=>{
    api.get(`/lastWorkshops`).then(({ data: { data } }) => setWorkshop(data));
    // api.get(`/lectures`).then(({ data }) => setBanners(data));
    // api.get(`/schedule`, { baseURL: '' }).then(({ data }) => setEvents(data));
    api.get(`/lastShows`).then(({ data: { data } }) => setShows(data));
    api.get(`/lastNews`).then(({ data }) => setNews(data));
    api.get(`/banners`).then(({ data }) => setBanners(data));
    strapi.get(`/events?_limit=5`,{ baseURL }).then(({ data }) => setEvents(data));
    strapi.get(`/publicacoes`,  { baseURL }).then(({ data }) => setPublications(data));
  }, []);

  //console.log(publications);
  return (
    <div className="home-container">
      <div className="home-content banner">
        <div className="schedule">
          <h4 className="title max-home">AGENDA</h4>
          {
            events.map(event => (
              <div className="events" key={event.id}>
                <div>
                  <p className="event-day">{new Date(event.date).getDate()}
                  </p>
                </div>
                <div>
                 <h5 className="event-title">{event.time} | {event.title}</h5>
                  <p className="event-intro">{event.description}</p>
                </div>
              </div>
            ))
          }
          <div className="buttons">
            <Link to="/agenda">
              <button>Veja a programação completa</button>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="title max-home">ÚLTIMOS LANÇAMENTOS</h4>
          <div className="releases">
            <Carousel>
              {
                publications.map(publication => (                
                  <Carousel.Item>
                    <div className="publication-div">
                      <section className="section-img" style= {{ background:`url(https://admin.bossacriativa.art.br${publication.image.url}) center top / cover no-repeat`} }></section>
                      <div className="buttons">
                          <button><a target='__blank' href={publication.link} style={{color: 'black'}}>{`Pocket Show | ${publication.artist}`}</a></button>
                      </div>
                    </div>
                  </Carousel.Item> 
                ))
              }
            </Carousel>
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel>
          {
            banners.map(banner => (
              <Carousel.Item>
                <div className="banner-div">
                  <section className="section-1">
                    <p style={{fontSize:'3.0em', fontFamily:'Amatic SC' }}>{banner.title}</p>
                    <td style={{fontSize: '1.5em'}} dangerouslySetInnerHTML={{__html: banner.introduction}} />
                    { 
                      banner.news_id 
                        ? (
                          <a className="news-btn" onClick={()=> { history.push(`/noticia/${banner.news_id}`)}}>
                            Leia mais
                          </a>
                        ) : null
                    }
                    <br/>
                  </section>
                  <section className="section-2" style={{backgroundImage:`url(${banner.img_url})`}}></section>
                </div>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>
      <div className="home-content">
        <h4 className="title max-home">APRESENTAÇÕES</h4>
        <div className="artistas">
          <div className="mySlides">
            {
              shows.map(show => (
                <div 
                  className="home-carousel-item" 
                  style={{ backgroundColor: "#E7C032"}} 
                  onClick={()=>history.push(`/apresentacao/${show.id}`)}
                >
                  <img className="div-img" src={show.img_url}/>
                  <h6 style={{backgroundColor:`${show.theme_color}`}}>{show.artist}</h6>
                  <p>{show.introduction}</p>
                </div> 
              ))
            }
          </div>         
          <div className="buttons">
            <div className="dots">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <Link to="/apresentacoes"><button>Veja mais</button></Link>
          </div>
        </div>
      </div>
      <div className="home-content">
        <h4 className="title max-home">ÚLTIMAS NOTÍCIAS</h4>
        <div className="noticias">
        {
          newses.map(news => (
            <div style={{ backgroundColor: "#E7C032"}}>
              <div className="div-img news-img" style={{backgroundImage: `url(${news.img_url})`}}/>
              <div className="news-text">
                <h6 className="not-title">{news.title}</h6>
                <p className="desc">{news.introduction}</p>
                <div className="bar-btnleia">
                  <a className="leia btn nws-btn" onClick={()=> { history.push(`/noticia/${news.id}`)}}>Leia mais</a>
                </div>
              </div>
            </div>
          ))
        }
        </div>
        <div className="buttons">
          <div className="dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
           <Link to="/noticias">
             <button>Veja mais</button>
          </Link>
        </div>
      </div>
      <div className="home-content">
        <h4 className="title max-home">OFICINAS</h4>
        <div className="artistas">
          <div className="mySlides">
            {
              workshops.map(workshop => (
                <div style={{ backgroundColor: "#E7C032"}} onClick={()=>{ history.push(`/oficina/${workshop.id}`)}}>
                  <div className="div-img" style={{backgroundImage: `url(${workshop.img_url})`}}/>
                  <h6 style={{backgroundColor: `${workshop.theme_color}`}}>{workshop.artist_name}</h6>
                  <p>{workshop.introduction}</p>
                </div>
              ))
            }
          </div>
          <div className="buttons">
            <div className="dots">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <Link to="/oficinas"><button>Veja mais</button></Link>
          </div>
        </div>
      </div>
      <div className="home-content">
        <h4 className="title max-home">LIVES</h4>
        <div className="artistas">
          <div className="mySlides">
            {
              workshops.map(workshop => (
                <div style={{ backgroundColor: "#E7C032"}} onClick={()=>{ history.push(`/live/${workshop.id}`)}}>
                  <div className="div-img" style={{backgroundImage: `url(${workshop.img_url})`}}/>
                  <h6 style={{backgroundColor: `${workshop.theme_color}`}}>{workshop.artist_name}</h6>
                  <p>{workshop.introduction}</p>
                </div>
              ))
            }
          </div>
          <div className="buttons">
            <div className="dots">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <Link to="/lives"><button>Veja mais</button></Link>
          </div>
        </div>
      </div>
      {/*<div className="home-content">

      <h4 className="title max-home">PALESTRAS</h4>
          <Carousel>
            
          {lectures.map((item)=>{
            return (
              <Carousel.Item>
        
        <div className="oficinas-palestras">
                {item.map((lecture) => {
                  return (
                    <div className="home-carousel-item" style={{ backgroundColor: "#E7C032"}}>
                      <img className="div-img" src={lecture.img_url}/>
                      <h6 style={{backgroundColor:`${lecture.theme_color}`}}>{lecture.speaker}</h6>
                      <p>{lecture.speaker}</p>
                    </div>
                  )
                })}
        </div>
              </Carousel.Item>
            )
            
          })}
          </Carousel>
        <div className="buttons">   
        <Link to="/palestras"><button>Veja mais</button></Link>
        </div>
        </div>*/}
    </div>
  );
}
export default Home