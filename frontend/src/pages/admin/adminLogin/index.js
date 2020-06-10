import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import './style.css'
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordLine } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { signInRequest } from '../../../store/modules/auth/actions'
import { store } from '../../../store/index'
import { Redirect } from 'react-router-dom'

function Admin(){
    const [email, setEmail] = useState()
    const [password, setPass] = useState()  
    const dispatch = useDispatch()
    const loading = useSelector(state => state.auth.loading)

    const role = store.getState().auth.role

    function handleLogin(e){
        e.preventDefault()
        dispatch(signInRequest(email,password))
    }
    function checkRole(){
        if(role === 'admin'){
            return <Redirect to="/login/adminPanel"/>
        } else if(role==='artista'){
            return <Redirect to="/login/artistPanel"/>
        }
    }
    return(
        <>
        { checkRole() } 
        <div className="admin-login">
            <div className="login-content">
                <h1 className ="title-login">Faça login</h1>
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
                    <input type="password"
                    placeholder="Senha"
                    name="password"
                    value={password}
                    onChange={e => setPass(e.target.value)}
                    />
                    <br/>
                    <button type="submit" id="login-button">
                        {loading ? 'Carregando...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
        
    </>
    )
}
export default connect()(Admin)