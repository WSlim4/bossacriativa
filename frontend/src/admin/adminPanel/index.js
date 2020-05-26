import React from 'react'
import Users from '../Users/index'
import './style.css'

export default function adminPanel(){
    return(
        <div className="admin-container">
            <section className="admin-section1">
                <h2>Admin</h2>
                <ul className="options">
                    <li>Usuários</li>
                    <li>Vídeo aulas</li>
                    <li>Sair</li>
                </ul>
            </section>
            <section className="admin-section2">
                <div className="panel">
                    <h1>Bem-vindo</h1>
                        <p>Seja bem vindo ao sistema de administração do BossaCriativa,
                        não compartilhe suas credenciais com terceiros.<br/>
                        Por segurança, as senhas dos usuários estão criptografadas.
                        </p>
                        <p>
                        Selecione as opções ao lado
                        </p>
                        <div className="infos">
                            <Users />
                        </div>
                </div>
            </section>
        </div>
    )
}