import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

class NotFoundPage extends React.Component{
    render(){
        return <div className="not-found" style={{backgroundColor: 'white'}}>
            <p>Erro 404 - Conteúdo não encontrado </p>
            <p style={{textAlign:"center"}}>
              <Link to="/"><a> Voltar para a página principal </a></Link>
            </p>
          </div>
    }
}
export default NotFoundPage;