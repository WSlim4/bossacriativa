import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import UserModal from '../../components/userModal/userModal'
import './style.css'


export default function Users(){
    const [users, setUsers] = useState([])

    useEffect(()=>{
        api.get('/users').then(res=>setUsers(res.data))
    }, [users])

    async function handleDelete(id){
        try{
            await api.delete(`user/${id}`)

            return alert("Usuário deletado")
        
        } catch(err){
            alert("Erro ao deletar usuário")
        }
        setUsers(users.filter(user => user.id !== id))
    }

    return (
            <div className="users">
                <UserModal
                addUser
                action="adicionar"
                className="true"
                />
                <h3>Usuários</h3>
                <ul className="course-info">
                    {users.map(user => 
                        <li key={user.id} className="course">
                            <p>
                                <h4>Id</h4>
                                {user.id}
                            </p>
                            <p>
                                <h4>Nome</h4>
                                {user.username}
                            </p>
                            <p>
                                <h4>E-mail</h4>
                                {user.email}
                            </p>                      
                            <div className="course-buttons">
                                <h4>Ações</h4>
                                <UserModal
                                action="editar"
                                id={user.id}

                                />
                                <button className="course-btn" type="button" onClick={() => handleDelete(user.id)}>Deletar</button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
