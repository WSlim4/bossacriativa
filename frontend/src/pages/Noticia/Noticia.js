import React from 'react';
import './Noticia.css';
import { Link } from 'react-router-dom';
import api from '../../services/api'

class Noticia extends React.Component{
    constructor(props){
        super(props)
        this.state={
            news: []
        }
    }

    async componentDidMount(){
        const response = await api.get(`/news/${this.props.match.params.id}`)
        this.setState({ news: response.data})
    }

    render(){
      return (
        <div className="container">
            <h6 className="breadcrumb"><span className="colorspan"><Link className="link" to="/noticias">NOTÍCIAS</Link><span className="fontspan"> - {this.state.news.title}</span></span></h6>
            <img className="img-not" src={this.state.news.img_url}/>
            <div className="text-about-div">
                <h1 className="title-about">
                    {this.state.news.title}
                </h1>
                <p className="text-about">
                    {this.state.news.introduction}
                </p>
                <p className="text-about">
                    {this.state.news.description}
                </p>
            </div>
            <Link className="link" to="/noticias"><a className="volte btn">Voltar para Notícias</a></Link>
        </div>
        )
    }
}
export default Noticia;
  