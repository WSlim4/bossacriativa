import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import Modal from '../../../components/lessonModal/modal'
import CourseModal from '../../../components/workshopModal/workshopModal'
import './Oficinas.css'
import { MdDelete } from 'react-icons/md'
import { IconContext } from "react-icons";
import range from '../../../helpers/range'

function Workshops(props){
    const [workshops, setWorkshops] = useState([])
    const [pages, setPages] = useState()
    const [page, setPage] = useState(props.page)
    const pgNumb = range(1, pages+1)


    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/workshops?page=${page}`)
            setWorkshops(response.data.data)
            setPages(Math.ceil( response.data.total / response.data.perPage ))
        }
        fetchData()
    }, [page])
    
    function onClick(val){
        setPage(val)
    }

    async function handleDelete(id){
        try{
            await api.delete(`/workshop/${id}`)

            return alert("Curso deletado")
        }catch(err){
            alert("Não foi possível deletar o curso, verifique se ele existe")
        }
        setWorkshops(workshops.filter(workshop => workshop.id !== id))
    }

    return(
        <>
            <table id="users">
                <tr>
                    <th>ID</th>
                    <th>Categoria</th>
                    <th>Nome</th>
                    <th>Nome do artista</th>
                    <th>Cor do tema</th>
                    <th>Ações</th>
                </tr>
                {workshops.map((workshop)=>
                <tr key={workshop.id}>
                    <td>{workshop.id}</td>
                    <td>{workshop.category}</td>
                    <td>{workshop.name}</td>
                    <td>{workshop.artist_name}</td>
                    <td>{workshop.theme_color}</td>
                    <td>
                        <Modal
                        to="oficina"
                        id={workshop.id}
                        rota='workshopLessons'
                        />
                        <CourseModal
                        action="editar"
                        id={workshop.id}
                        />
                        <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <MdDelete onClick={()=>handleDelete(workshop.id)}/>
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