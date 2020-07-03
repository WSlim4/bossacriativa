import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import NewsModal from '../../../components/newsModal/Modal'
import { MdDelete } from 'react-icons/md'
import { IconContext } from 'react-icons';
import range from '../../../helpers/range'

function Workshops(props){
    const [newses, setNews] = useState([])
    const [pages, setPages] = useState()
    const [page, setPage] = useState(props.page)
    const pgNumb = range(1, pages+1)


    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/news?page=${page}`)
            setNews(response.data.data)
            setPages(Math.ceil( response.data.total / response.data.perPage ))
        }
        fetchData()
    }, [page])
    
    function onClick(val){
        setPage(val)
    }

    async function handleDelete(id){
        try{
            await api.delete(`/news/${id}`)

            return alert("Notícia deletada")
        }catch(err){
            alert("Não foi possível deletar a notícia, verifique se ele existe")
        }
        setNews(newses.filter(news => news.id !== id))
    }

    return(
        <>
            <table id="users">
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Introdução</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
                {newses.map((news)=>
                <tr key={news.id}>
                    <td>{news.id}</td>
                    <td>{news.title}</td>
                    <td>{news.introduction}</td>
                    <td>{news.description}</td>
                    <td>

                        <NewsModal
                        action="editar"
                        id={news.id}
                        />
                        <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <MdDelete onClick={()=>handleDelete(news.id)}/>
                        </IconContext.Provider>
                    </td>
                </tr>
                )}
            </table>
            {pgNumb.map(val=>
                        <button value={val} className="btns" onClick={() => onClick(val)} >{val}</button>
            )}
        </>
    )
}

export default Workshops