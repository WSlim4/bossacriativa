import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Admin(){
    return(
        <div className="container">
            <div className="content">
                <h1>Área restrita para administradores</h1>
                <form action="">
                    <input type="text"
                    placeholder="E-mail"
                    name="email"
                    />
                    <br/>
                    <input type="text"
                    placeholder="Senha"
                    name="senha"
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