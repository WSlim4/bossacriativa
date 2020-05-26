import React from 'react'
import Users from '../Users/index'
import './style.css'
import Cursos from '../Cursos/index'

class adminPanel extends React.Component {
    constructor(){
        super()
        this.state={
            showUsers: false,
            showCursos : false
        }
        this._onUserClick = this._onUserClick.bind(this)
        this._onCourseClick = this._onCourseClick.bind(this)
    }
    _onUserClick(){
        this.setState({ showUsers: true })
        this.setState({ showCursos: false})
    }
    _onCourseClick(){
        this.setState({ showCursos: true})
        this.setState({ showUsers: false})
    }
    
    render(){
    return(
        <div className="admin-container">
            <section className="admin-section1">
                <h2>Admin</h2>
                <ul className="options">
                    <li onClick={this._onUserClick}>Usuários</li>
                    <li onClick={this._onCourseClick}>Cursos</li>
                    <li>Vídeo aulas</li>
                    <li>Sair</li>
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
                        {this.state.showUsers ? <Users /> : null }
                        {this.state.showCursos ? <Cursos /> : null}
                    </div>
            </section>
        </div>
    )
    }
}
export default adminPanel