import React, { useState, useEffect } from 'react';
import './Noticias.css';
import { Link } from 'react-router-dom';
import strapi from '../../services/strapi';

export default function Noticias() {
  const [newses, setNews] = useState([])
  const [filter, setFilter] = useState([])
  const [baseUrl, ] = useState('https://admin.bossacriativa.art.br');
    
  useEffect(()=>{
    strapi.get(`/noticias?date_lte=${Date.now()}&_sort=date:DESC`).then(({ data }) => setNews(data));
  }, [])

  async function search(e){
    e.preventDefault();
    const query = `/noticias?title_contains=${filter}&date_lte=${Date.now()}`;
    const { data } = await strapi.get(query);
    setNews(data);
  }

  return (
    <div className="home-content cont">
      <div className="head title">
        <h2>NOTÍCIAS</h2>
        <div className="filters">
          <form onSubmit={()=>search()}>
            <div id="buscar">
              <label htmlFor="buscar">BUSCAR:</label>
              <input 
                type="text" 
                name="buscar" 
                placeholder="Digite aqui para buscar" 
                onChange={(e)=>setFilter(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="not-content"> 
        {
          newses.map(news => (
            <div style={{ backgroundColor: "#E7C032"}}>
              <div 
                className="div-img news-img" 
                style={{backgroundImage: `url(${news.Cover ? `${baseUrl}${news.Cover.formats.thumbnail.url}` : ''})`}}
              />
              <div>
                <h6 className="not-title" style={{backgroundColor: 'white'}}>
                  {news.title}
                </h6>
                <p style={{fontSize: '1.2em'}}>{news.intro}</p>
                <Link
                  to={`/noticia/${news.id}`}
                  className="leia btn nws-btn" 
                >
                  Leia mais
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};  