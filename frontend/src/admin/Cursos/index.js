import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import Modal from '../../components/lessonModal/modal'
import CourseModal from '../../components/courseModal/courseModal'
import './style.css'

function Cursos(){
    const [cursos, setCursos] = useState([])

    useEffect(() => {
        api.get('/courses').then(res=>setCursos(res.data))
    }, [cursos])
    
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
        <div className="cursos">
            <CourseModal 
            addCourse 
            action="adicionar"
            />
            <h3>Cursos</h3>
            <ul className="course-info">
                {cursos.map(curso=>
                    <li key={curso.id} className="course">
                        <p>     
                            <h4>Id</h4>
                            {curso.id}
                            </p>
                        <p>
                            <h4>Nome</h4>
                            {curso.name}
                            </p>
                        <p>
                            <h4>Categoria</h4>
                            {curso.type}
                            </p>
                        <p>
                            <h4>Duração</h4>
                            {curso.duration}
                            </p>

                        <div className="course-buttons">
                            <h4>Ações</h4>
                            <Modal
                                id={curso.id}
                                name={curso.name}
                            />
                            <button className="course-btn" onClick={() => handleDelete(curso.id)}>Deletar</button>
                            <CourseModal 
                            id={curso.id}
                            action="editar"
                            />
                        </div>
                    </li>
                    
                    )}
            </ul>

        </div>
    )
}

export default Cursos