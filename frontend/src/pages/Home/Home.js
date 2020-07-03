import React, { useState, useEffect } from 'react';
import '../../global.css';
import './Home.css';
import api from '../../services/api'
import banner from '../../assets/banner-2.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import history from '../../services/history'

function Home() {
  const [workshops, setWorkshop] = useState([])
  const [lectures, setLectures] = useState([])
  const [shows, setShows] = useState([])
  const [newses, setNews] = useState([])

  useEffect(()=>{
    async function getData(){
      const lastworkshops = await api.get(`/lastWorkshops`)
      const lastlectures = await api.get('/lectures')
      const lastShows = await api.get('/lastShows')
      const lastNews = await api.get('/news')

      let w = new Array()
      let temp = new Array()
      for (let i = 0; i <= lastworkshops.data.data.length; i++) {
        if (((i % 4) == 0) && i != 0) {
          w.push(temp)
          temp = []
        }
        temp.push(lastworkshops.data.data[i])
      }
      let l = new Array()
      temp = []
      console.log(lastlectures.data.data.length)
      for (let i = 0; i <= lastlectures.data.data.length; i++) {
        if (((i % 4) == 0) && i != 0) {
          l.push(temp)
          temp = []
        }
        temp.push(lastlectures.data.data[i])
      }

      let s = new Array()
      temp = []
      for (let i = 0; i <= lastShows.data.data.length; i++) {
        if ((i % 8) == 0 && i != 0) {
          s.push(temp)
          temp = []
        }
        temp.push(lastShows.data.data[i])
      }

      setWorkshop(lastworkshops.data.data)
      setLectures(l)
      setShows(lastShows.data.data)
      setNews(lastNews.data.data)
      
      return
    }
    getData()
  }, [])

  return (
    <div className="home-container">
      {console.log(workshops)}
      <div className="banner-div">
        <section className="section-1">
          <p style={{fontSize:'2.4em', fontFamily:'Amatic SC' }}>BOSSACRIATIVA</p>
            <p className="min-home">No Bossa Criativa – Arte de Toda Gente, a Fundação Nacional de Artes – Funarte e a Universidade Federal do Rio de Janeiro (UFRJ) reúnem apresentações e capacitação em diversas formas artísticas e de economia criativa.</p>

            <p className="min-home">Com curadoria da Escola de Música da UFRJ, o Bossa Criativa tem com foco na diversidade, na democratização da cultura no Brasil e na difusão das nossas artes em todas as suas formas e origens, de maneira inclusiva.</p>

            <p className="min-home">Aqui você vai assistir gratuitamente a pocket shows, apresentações de projetos e videoaulas com a participação de artistas e especialistas de todo o país. Em 2021, o projeto vai promover eventos presenciais em nove pontos do patrimônio mundial no Brasil.</p>
          <br/>
          {/* <div className="banner-dots" style={{backgroundColor: 'transparent'}}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div> */}
        </section>
        <section className="section-2" style={{backgroundImage:`url(${banner})`}}> 
        </section>
      </div>
      <div className="home-content">
        <h4 className="title max-home">APRESENTAÇÕES</h4>
        <div className="artistas">
          <div className="mySlides">
            {shows.map(show=>
                    <div className="home-carousel-item" style={{ backgroundColor: "#E7C032"}} onClick={()=>history.push(`/apresentacao/${show.id}`)}>
                        <img className="div-img" src={show.img_url}/>
                        <h6 style={{backgroundColor:`${show.theme_color}`}}>{show.artist}</h6>
                          <p>{show.introduction}</p>
                    </div>
                        )}
          </div>         
        <div className="buttons">
          <Link to="/apresentacoes"><button>Veja mais</button></Link>
        </div>
        </div>
      </div>
      <div className="home-content">
        <h4 className="title max-home">ÚLTIMAS NOTÍCIAS</h4>
        <div className="noticias">
        {newses.map(news=>
                    <div style={{ backgroundColor: "#E7C032"}}>
                        <div className="div-img news-img" style={{backgroundImage: `url(${news.img_url})`}}/>
                        <div className="news-text">
                          <h6 className="not-title" style={{backgroundColor: 'white'}}>{news.title}</h6>
                          <p className="desc">{news.introduction}</p>
                          <a className="leia btn" onClick={()=> { history.push(`/noticia/${news.id}`)}}>Leia mais</a>
                        </div>
                    </div>
                    )}
        </div>
        <div className="buttons">
           <Link to="/noticias"><button>Veja mais</button></Link>
        </div>
      </div>
      <div className="home-content">
      <h4 className="title max-home">OFICINAS</h4>
      <div className="artistas">
          <div className="mySlides">
            {workshops.map(workshop =>
              <div style={{ backgroundColor: "#E7C032"}} onClick={()=>{ history.push(`/oficina/${workshop.id}`)}}>
                <div className="div-img" style={{backgroundImage: `url(${workshop.img_url})`}}/>
                <h6>{workshop.artist_name}</h6>
                <p>{workshop.description}</p>
              </div>
            )}
          </div>
        <div className="buttons">
          {/*<div className="dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            </div>*/}
          <Link to="/oficinas"><button>Veja mais</button></Link>
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