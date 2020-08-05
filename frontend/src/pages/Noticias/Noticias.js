import React, { useState, useEffect } from 'react';
import './Noticias.css';
import api from '../../services/api'
import history from '../../services/history'

function Noticias() {
    const [newses, setNews] = useState([])
    const [filteredNews, setFiltered] = useState([])
    const [filter, setFilter] = useState([])
    
    useEffect(()=>{
        async function loadData(){
            const response = await api.get('/news')
            setNews(response.data.data)
        }
        loadData()
    }, [])

    async function search(e){
        e.preventDefault()

        const news = await api.get('/searchNews',{
            params:{
                value: filter
            }
        })
        setFiltered(news.data)
    }

    return (
        <div className="home-content cont">
                <div className="head title">
                    <h2>NOTÍCIAS</h2>
                    <div className="filters">
                        <form onSubmit={()=>search()}>
                            <div id="buscar">
                                <label htmlFor="buscar">BUSCAR:</label>
                                <input type="text" name="buscar" placeholder="Digite aqui para buscar" onChange={(e)=>setFilter(e.target.value)}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="not-content"> 
                {newses.map(news=>
                    <div style={{ backgroundColor: "#E7C032"}}>
                        <div className="div-img news-img" style={{backgroundImage: `url(${news.img_url})`}}/>
                        <div>
                          <h6 className="not-title" style={{backgroundColor: 'white'}}>{news.title}</h6>
                          <p style={{fontSize: ' 1.2em'}}>{news.introduction}</p>
                          <a className="leia btn nws-btn" onClick={()=> { history.push(`/noticia/${news.id}`)}}>Leia mais</a>
                        </div>
                    </div>
                    )}
                </div>
            </div>
    )
  }
  
  export default Noticias;
  