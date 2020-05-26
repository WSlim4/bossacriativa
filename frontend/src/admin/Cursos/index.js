import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import './style.css'

function Cursos(){
    const [cursos, setCursos] = useState([])

    useEffect(() => {
        api.get('/courses').then(res=>setCursos(res.data))
    }, [cursos])
    
    return(
        <div className="cursos">
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
                            <button>Adicionar aula</button>
                            <button>Deletar</button>
                            <button>Editar</button>
                        </div>
                    </li>
                    
                    )}
            </ul>

        </div>
    )
}

export default Cursos