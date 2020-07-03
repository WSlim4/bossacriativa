import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import LectureModal from '../../../components/lectureModal/Modal'
import Modal from '../../../components/lessonModal/modal'
import { MdDelete } from 'react-icons/md'
import { IconContext } from "react-icons";
import range from '../../../helpers/range'

function Events(props){
    const [lectures, setLectures] = useState([])
    const [pages, setPages] = useState()
    const [page, setPage] = useState(props.page)
    const pgNumb = range(1, pages+1)


    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/lectures?page=${page}`)
            setLectures(response.data.data)
            setPages(Math.ceil( response.data.total / response.data.perPage ))
        }
        fetchData()
    }, [page])
    
    function onClick(val){
        setPage(val)
    }

    async function handleDelete(id){
        try{
            await api.delete(`/lecture/${id}`)

            return alert("Palestra deletada")
        }catch(err){
            alert("Não foi possível deletar a palestra, verifique se ele existe")
        }
        setLectures(lectures.filter(lecture => lecture.id !== id))
    }

    return(
        <>
            <table id="users">
                <tr>
                    <th>Nome</th>
                    <th>Palestrante</th>
                    <th>Cor do tema</th>
                    <th>Sobre o palestrante</th>
                    <th>Ações</th>
                </tr>
                {lectures.map((lecture)=>
                <tr key={lecture.id}>
                    <td>{lecture.name}</td>
                    <td>{lecture.speaker}</td>
                    <td>{lecture.theme_color}</td>
                    <td>{lecture.about_speaker}</td>
                    <td>


                        <Modal
                        to="palestra"
                        id={lecture.id}
                        rota='lectureLessons'
                        />
                        <LectureModal
                        action="editar"
                        id={lecture.id}
                        />
                        <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <MdDelete onClick={()=>handleDelete(lecture.id)}/>
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