import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import Modal from '../../../components/lessonModal/modal'
import CourseModal from '../../../components/courseModal/courseModal'
import './style.css'
import { MdDelete } from 'react-icons/md'
import { IconContext } from "react-icons";
import range from '../../../helpers/range'

function Cursos(props){
    const [cursos, setCursos] = useState([])
    const [pages, setPages] = useState()
    const [page, setPage] = useState(props.page)
    const pgNumb = range(1, pages+1)


    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/courses?page=${page}`)
            setCursos(response.data.data)
            setPages(Math.ceil( response.data.total / response.data.perPage ))
        }
        fetchData()
    }, [page])
    
    function onClick(val){
        setPage(val)
    }

    async function handleDelete(id){
        try{
            await api.delete(`/course/${id}`)

            return alert("Curso deletado")
        }catch(err){
            alert("Não foi possível deletar o curso, verifique se ele existe")
        }
        setCursos(cursos.filter(curso => curso.id !== id))
    }

    return(
        <>
            <table id="users">
                <tr>
                    <th>ID</th>
                    <th>Categoria</th>
                    <th>Nome</th>
                    <th>Duração</th>
                    <th>Ações</th>
                </tr>
                {cursos.map((curso)=>
                <tr key={curso.id}>
                    <td>{curso.id}</td>
                    <td>{curso.type}</td>
                    <td>{curso.name}</td>
                    <td>{curso.duration}</td>
                    <td>
                        <Modal
                        id={curso.id}
                        />
                        <CourseModal
                        action="editar"
                        id={curso.id}
                        />
                        <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <MdDelete onClick={()=>handleDelete(curso.id)}/>
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

export default Cursos