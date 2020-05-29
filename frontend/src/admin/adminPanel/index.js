import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Users from '../Users/index'
import './style.css'
import Cursos from '../Cursos/index'

function AdminPanel(){
   const [users, setUser] = useState(false)
   const [courses, setCourse] = useState(false)

   const history = useHistory()

    function onUserClick(){
        setUser(true)
        setCourse(false)
    }
    function onCourseClick(){
        setCourse(true)
        setUser(false)
    }
    function logout (){
        sessionStorage.clear()
        alert('Você foi deslogado')
        history.push('/restrito/admin')
    }
    return(
        <div className="admin-container">
            <section className="admin-section1">
                <h2>Admin</h2>
                <ul className="options">
                    <li onClick={onUserClick}>Usuários</li>
                    <li onClick={onCourseClick}>Cursos</li>
                    <li>Vídeo aulas</li>
                    <li onClick={logout}>Sair</li>
                </ul>
            </section>
            <section className="admin-section2">
                <header className="panel">
                    <h1>Bem-vindo</h1>
                        <p>Seja bem vindo ao sistema de administração do BossaCriativa,
                        não compartilhe suas credenciais com terceiros.<br/>
                        Por segurança, as senhas dos usuários estão criptografadas.
                        </p>
                        <p>
                        Selecione as opções ao lado
                        </p>
                </header>
                    <div className="infos">
                        {users ? <Users /> : null }
                        {courses ? <Cursos /> : null}
                    </div>
            </section>
        </div>
    )
}
export default AdminPanel