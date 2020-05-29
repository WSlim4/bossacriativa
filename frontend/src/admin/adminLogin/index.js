import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import './style.css'

export default function Admin(){
    const [email, setEmail] = useState()
    const [password, setPass] = useState()

    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()

        const data = {
            email,
            password
        }
        try{
            const response = await api.post('/adminSessions', data)
            sessionStorage.setItem('token', response.data.token)
            history.push('/restrito/admin/adminPanel')
        }catch(err){
            alert("Você não tem permissão")
        }
    }
    return(
        <div className="container">
            <div className="content">
                <h1>Área restrita para administradores</h1>
                <form onSubmit={handleLogin}>
                    <input type="text"
                    placeholder="E-mail"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <br/>
                    <input type="text"
                    placeholder="Senha"
                    name="password"
                    value={password}
                    onChange={e => setPass(e.target.value)}
                    />
                    <br/>
                    <button type="submit" id="login-button">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}