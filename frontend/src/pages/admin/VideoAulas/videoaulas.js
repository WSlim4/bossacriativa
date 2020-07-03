import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import { MdDelete } from 'react-icons/md'
import { IconContext } from "react-icons";
import Modal from '../../../components/userModal/userModal'
import range from '../../../helpers/range'

export default function VideoAulas(props){
    const [lessons, setLessons] = useState([])
    const [pages, setPages] = useState()
    const [page, setPage] = useState(props.page)
    const pgNumb = range(1, pages+1)

    useEffect(()=>{
        async function fetchData(){
            const response = await api.get(`/lessons?page=${page}`)
            setLessons(response.data.data)
            setPages(Math.ceil(response.data.total / response.data.perPage))
        }
        fetchData()
    }, [page])

    function onClick(val){
        setPage(val)
    }
    async function handleDelete(id){
        try{
            await api.delete(`/lesson/${id}`)

            return alert("Aula deletada")
        
        } catch(err){
            alert("Erro ao deletar aula")
        }
        setLessons(lessons.filter(lesson => lesson.id !== id))
    }

    return (
            <>
            <table id="users">
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>URL</th>
                    <th>Curso pertencente</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
                {lessons.map((lesson)=>
                <tr key={lesson.id}>
                    <td>{lesson.id}</td>
                    <td>{lesson.title}</td>
                    <td>{lesson.url}</td>
                    <td>{lesson.course_name}</td>
                    <td>{lesson.description}</td>
                    <td>
                        <Modal
                        action="editar"
                        id={lesson.id}
                        />
                        <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <MdDelete onClick={()=>handleDelete(lesson.id)}/>
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
