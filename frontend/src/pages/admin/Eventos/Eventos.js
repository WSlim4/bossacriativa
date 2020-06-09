import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import { MdDelete } from 'react-icons/md'
import { IconContext } from "react-icons";
import Modal from '../../../components/eventModal/Modal'
import range from '../../../helpers/range'

export default function Events(props){
    const [events, setEvents] = useState([])
    const [pages, setPages] = useState()
    const [page, setPage] = useState(props.page)
    const pgNumb = range(1, pages+1)

    useEffect(()=>{
        async function fetchData(){
            const response = await api.get(`/events?page=${page}`)
            setEvents(response.data.data)
            setPages(Math.ceil(response.data.total / response.data.perPage))
        }
        fetchData()
    }, [page])

    function onClick(val){
        setPage(val)
    }
    async function handleDelete(id){
        try{
            await api.delete(`/event/${id}`)

            alert("Evento deletado")
        
        } catch(err){
            alert("Erro ao deletar evento")
        }
        setEvents(events.filter(event => event.id !== id))
    }

    return (
            <>
            {console.log(events)}
            <table id="users">
                <tr>
                    <th>Título</th>
                    <th>Artista</th>
                    <th>Local</th>
                    <th>Url</th>
                    <th>Ações</th>
                </tr>
                {events.map((event)=>
                <tr key={event.id}>
                    <td>{event.title}</td>
                    <td>{event.url}</td>
                    <td>{event.artist}</td>
                    <td>{event.address}</td>
                    <td>
                        <Modal
                        action="editar"
                        id={event.id}
                        />
                        <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <MdDelete onClick={()=>handleDelete(event.id)}/>
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
