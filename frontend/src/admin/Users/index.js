import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import UserModal from '../../components/userModal/userModal'
import './style.css'
import { MdDelete } from 'react-icons/md'
import { IconContext } from "react-icons";
import Modal from '../../components/userModal/userModal'

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
            <table id="users">
                <tr>
                    <th>ID</th>
                    <th>E-mail</th>
                    <th>Nome</th>
                    <th>Artista</th>
                    <th>Ações</th>
                </tr>
                {users.map((user)=>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.is_artist.toString()}</td>
                    <td>
                        <Modal
                        action="editar"
                        id={user.id}
                        />
                        <IconContext.Provider value={{ size:"2em", className: "del" }}>
                            <MdDelete onClick={()=>handleDelete(user.id)}/>
                        </IconContext.Provider>
                    </td>
                </tr>
                )}
            </table>
        )
    }
