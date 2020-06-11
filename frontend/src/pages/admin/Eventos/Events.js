import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import EventModal from '../../../components/eventModal/Modal'
import { MdDelete } from 'react-icons/md'
import { IconContext } from "react-icons";
import range from '../../../helpers/range'

function Events(props){
    const [eventos, setEventos] = useState([])
    const [pages, setPages] = useState()
    const [page, setPage] = useState(props.page)
    const pgNumb = range(1, pages+1)


    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/events?page=${page}`)
            setEventos(response.data.data)
            setPages(Math.ceil( response.data.total / response.data.perPage ))
        }
        fetchData()
    }, [page])
    
    function onClick(val){
        setPage(val)
    }

    async function handleDelete(id){
        try{
            await api.delete(`/event/${id}`)

            return alert("Evento deletado")
        }catch(err){
            alert("Não foi possível deletar o evento, verifique se ele existe")
        }
        setEventos(eventos.filter(evento => evento.id !== id))
    }

    return(
        <>
            <table id="users">
                <tr>
                    <th>Data</th>
                    <th>Foto</th>
                    <th>Local</th>
                    <th>Ações</th>
                </tr>
                {eventos.map((evento)=>
                <tr key={evento.id}>
                    <td>{evento.data}</td>
                    <td>{evento.img}</td>
                    <td>{evento.address}</td>
                    <td>
                        <EventModal
                        action="editar"
                        id={evento.id}
                        />
                        <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <MdDelete onClick={()=>handleDelete(evento.id)}/>
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

export default Events