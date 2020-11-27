import React, { useState, useEffect } from 'react';
import '../../global.css';
import './Home.css';
import strapi from '../../services/strapi'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import history from '../../services/history'

function Home() {
  const [workshops, setWorkshop] = useState([])
  // const [lectures, setLectures] = useState([])
  const [shows, setShows] = useState([])
  const [newses, setNews] = useState([])
  const [events, setEvents] = useState([])
  const [publications, setPublications] = useState([])
  const [lives, setLives] = useState([])
  const [baseUrl, ] = useState('https://admin.bossacriativa.art.br');

  useEffect(()=>{
    strapi.get(`/oficinas?_limit=8&_sort=date:desc`).then(({ data }) => setWorkshop(data));
    strapi.get(`/apresentacoes?_limit=8&_sort=date:desc`).then(({ data }) => setShows(data));
    strapi.get(`/noticias?_sort=date:desc&date_lte=${Date.now()}&_limit=4`).then(({ data }) => setNews(data));
    strapi.get(`/events?_limit=4&date_gte=${Date.now()}`).then(({ data }) => setEvents(data));
    strapi.get('/lives?_limit=8&_sort=date:DESC').then(({data}) => setLives(data));
    
    // strapi.get(`/publicacoes?_sort=id:DESC`).then(({ data }) => setPublications(data));
    // api.get(`/lectures`).then(({ data }) => setBanners(data));
    // api.get(`/schedule`, { baseURL: '' }).then(({ data }) => setEvents(data));
  }, [])

  useEffect(() => {
    if (!workshops.length || !lives.length || !shows.length) return;
    setPublications([
      { image_url: `https://admin.bossacriativa.art.br${shows[0].image.url}`, link: `/apresentacao/${shows[0].id}`, title: shows[0].title, type: 'Apresentação' },
      { image_url: `https://admin.bossacriativa.art.br${lives[0].image.url}`, link: `/live/${lives[0].id}`, title: lives[0].title, type: 'Live' },
      { image_url: workshops[0].image ? `https://admin.bossacriativa.art.br${workshops[0].image.url}` : '', link: `/oficina/${workshops[0].id}`, title: workshops[0].title, type: 'Oficina' },
    ]);
  }, [shows, lives, workshops]);

  return (
    <div className="home-container">
      <div className="home-content banner">
        <div className="schedule" style={{backgroundColor: 'white'}}>
          <h4 className="title max-home">AGENDA</h4>
          {
            events.map(event => (
              <div className="events" key={event.id} >
                <div>
                  <p className="event-day">
                    {`0${new Date(event.date).getDate()}`.slice(-2)}
                    <span>{event.month.name}</span>
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
                      <section className="section-img" style= {{ background:`url(${publication.image_url}) center top / cover no-repeat`}}></section>
                      <div className="buttons">
                          <button><a target='__blank' href={publication.link} style={{color: 'black'}}>{`${publication.type} | ${publication.title}`}</a></button>
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
            newses.map(banner => (
              <Carousel.Item>
                <div className="banner-div">
                  <section className="section-1">
                    <p style={{fontSize:'3.0em', fontFamily:'Amatic SC' }}>{banner.title}</p>
                    <td style={{fontSize: '1.5em'}} dangerouslySetInnerHTML={{__html: banner.intro}} />
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      { 
                        banner.id 
                          ? (
                            <a className="news-btn" onClick={()=> { history.push(`/noticia/${banner.id}`)}}>
                              Leia mais
                            </a>
                          ) : null
                      }
                    </div>
                    <br/>
                  </section>
                  <section className="section-2" style={{backgroundImage:`url(${baseUrl}${banner.Cover.url})`}}></section>
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
                  <img
                    alt=""
                    className="div-img" 
                    src={
                      show.image ? 
                        `https://admin.bossacriativa.art.br${show.image.url}` 
                        : ''
                    }
                  />
                  <h6 style={{backgroundColor:`${show.theme_color}`}}>{show.title}</h6>
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
      <figure className="home-content">
        <a href="http://www.ifcplp.org">
          <img src={require('~/assets/banner-home.jpg')} alt="" width="100%" />
        </a>
      </figure>
      <div className="home-content">
        <h4 className="title max-home">ÚLTIMAS NOTÍCIAS</h4>
        <div className="noticias">
        {
          newses.slice(0, 3).map(news => (
            <div style={{ backgroundColor: "#E7C032"}}>
              <div 
                className="div-img news-img" 
                style={{backgroundImage: `url(${
                  news.Cover 
                    ? `${baseUrl}${news.Cover.url}`
                    : ''
                  })`}}/>
              <div className="news-text">
                <h6 className="not-title">{news.title}</h6>
                <p className="desc">{news.intro}</p>
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
                  <div className="div-img" style={{backgroundImage: `url(${workshop.image ? `https://admin.bossacriativa.art.br${workshop.image.url}` : ''})`}}/>
                  <h6 style={{backgroundColor: `${workshop.categoria.color}`}}>{workshop.title}</h6>
                  <p>{workshop.intro}</p>
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
              lives.map(live => (
                <div style={{ backgroundColor: "#E7C032"}} onClick={()=>{ history.push(`/live/${live.id}`)}}>
                  <div className="div-img" style={{backgroundImage: `url(https://admin.bossacriativa.art.br${live.image.url})`}}/>
                  <h6 style={{backgroundColor: `${live.theme_color}`}}>{live.title}</h6>
                  <p>{live.introduction}</p>
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