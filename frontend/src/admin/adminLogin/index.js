import React, { useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import api from '../../services/api'
import './style.css'
import '../../global.css';
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordLine } from 'react-icons/ri'
import { IconContext } from 'react-icons'

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
            history.push('/admin/adminPanel')
        }catch(err){
            alert("Você não tem permissão")
        }
    }
    return(
        <div className="admin-login">
            <div className="login-content">
                <h1 className ="title-login">Login</h1>
                <form onSubmit={handleLogin}>
                    <IconContext.Provider value={{size:"1.5em", className:"login-icons"}}>
                        <FaUserAlt/>
                    </IconContext.Provider>
                    <input type="text"
                    placeholder="E-mail"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <br/>
                    <IconContext.Provider value={{size:"1.5em", className:"login-icons"}}>
                        <RiLockPasswordLine/>
                    </IconContext.Provider>
                    <input type="text"
                    placeholder="Senha"
                    name="password"
                    value={password}
                    onChange={e => setPass(e.target.value)}
                    />
                    <br/>
                    <button type="submit" id="login-button">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    )
}