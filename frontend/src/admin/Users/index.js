import React, { useState, useEffect } from 'react'
import api from '../../services/api'
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
                <ul className="user-information">
                    {users.map(user => 
                        <li key={user.id} className="user">
                            <p>
                                <h4>ID</h4>
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
                            <span className="button-group">
                                <button className="admin-buttons" type="button">Editar</button>
                                <button className="admin-buttons" type="button" onClick={() => handleDelete(user.id)}>Deletar</button>
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
