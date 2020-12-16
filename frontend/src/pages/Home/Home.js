/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import '../../global.css';
import './Home.css';
import strapi from '../../services/strapi'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import history from '../../services/history'

export default function Home() {
  const [workshops, setWorkshop] = useState([])
  const [shows, setShows] = useState([])
  const [newses, setNews] = useState([])
  const [publications, setPublications] = useState([])
  const [lives, setLives] = useState([])
  const [baseUrl, ] = useState('https://admin.bossacriativa.art.br');

  useEffect(()=>{
    strapi.get(`/oficinas?_limit=8&_sort=date:desc`).then(({ data }) => setWorkshop(data));
    strapi.get(`/apresentacoes?_limit=8&_sort=date:desc`).then(({ data }) => setShows(data));
    strapi.get(`/noticias?_sort=date:desc&date_lte=${Date.now()}&_limit=4`).then(({ data }) => setNews(data));
    strapi.get('/lives?_limit=8&_sort=date:DESC').then(({data}) => setLives(data));
  }, [])

  useEffect(() => {
    setPublications([
      { ...shows[0], link: `/apresentacao/`, type: 'Apresentação' },
      { ...lives[0], link: `/live/`, type: 'Live' },
      { ...newses[0], link: `/noticia/`, type: 'Notícia' },
      { ...workshops[0], link: `/oficina/`, type: 'Oficina' },
    ]);
  }, [shows, lives, workshops, newses]);

  return (
    <div className="home-container">
      <div className="banner">
        <div>
          <div className="releases">
            <Carousel>
              {
                publications.map(publication => (
                  <Carousel.Item>
                    <div className="publication-div">
                      <section className="section-img" style= {{ background:`${publication.banner ? `url(https://admin.bossacriativa.art.br${publication.banner.url}) center / cover no-repeat` : '#222'}`}}></section>
                      <div className="buttons banner-buttons">
                          <button>
                            <a target='__blank' href={`${publication.link}${publication.id}`} style={{color: 'white'}}>
                              {`${publication.type} | ${publication.title}`}
                            </a>
                          </button>
                      </div>
                    </div>
                  </Carousel.Item> 
                ))
              }
            </Carousel>
          </div>
        </div>
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
    </div>
  );
}
