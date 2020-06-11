import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import { MdDelete } from 'react-icons/md'
import { IconContext } from "react-icons";
import Modal from '../../../components/showsModal/Modal'
import range from '../../../helpers/range'

export default function Shows(props){
    const [shows, setShows] = useState([])
    const [pages, setPages] = useState()
    const [page, setPage] = useState(props.page)
    const pgNumb = range(1, pages+1)

    useEffect(()=>{
        async function fetchData(){
            const response = await api.get(`/shows?page=${page}`)
            setShows(response.data.data)
            setPages(Math.ceil(response.data.total / response.data.perPage))
        }
        fetchData()
    }, [page])

    function onClick(val){
        setPage(val)
    }
    async function handleDelete(id){
        try{
            await api.delete(`/show/${id}`)

            alert("Show deletado")
        
        } catch(err){
            alert("Erro ao deletar show")
        }
        setShows(shows.filter(show => show.id !== id))
    }

    return (
            <>
            <table id="users">
                <tr>
                    <th>Título</th>
                    <th>Url</th>
                    <th>Artista</th>
                    <th>Ações</th>
                </tr>
                {shows.map((show)=>
                <tr key={show.id}>
                    <td>{show.title}</td>
                    <td>{show.url}</td>
                    <td>{show.artist}</td>
                    <td>
                        <Modal
                        action="editar"
                        id={show.id}
                        />
                        <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <MdDelete onClick={()=>handleDelete(show.id)}/>
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
