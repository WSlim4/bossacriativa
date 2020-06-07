import React, { useState, useEffect } from 'react'
import api from '../../../services/api'
import './style.css'
import { MdDelete } from 'react-icons/md'
import { IconContext } from "react-icons";
import Modal from '../../../components/userModal/userModal'
import range from '../../../helpers/range'

export default function Users(props){
    const [users, setUsers] = useState([])
    const [pages, setPages] = useState()
    const [page, setPage] = useState(props.page)
    const pgNumb = range(1, pages+1)

    useEffect(()=>{
        async function fetchData(){
            const response = await api.get(`/users?page=${page}`)
            setUsers(response.data.data)
            setPages(Math.ceil(response.data.total / response.data.perPage))
        }
        fetchData()
    }, [page])

    function onClick(val){
        setPage(val)
    }
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
            <>
            <table id="users">
                <tr>
                    <th>ID</th>
                    <th>E-mail</th>
                    <th>Nome</th>
                    <th>Permissão</th>
                    <th>Ações</th>
                </tr>
                {users.map((user)=>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.role}</td>
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
            {pgNumb.map(val=>
                        <button value={val} className="btns" onClick={() => onClick(val)} >{val}</button>
                    )}
        </>
        )
    }
