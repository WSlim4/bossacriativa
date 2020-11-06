import React from 'react';
import './Noticia.css';
import { Link } from 'react-router-dom';
import strapi from '../../services/strapi';
import ReactMarkdown from 'react-markdown'

class Noticia extends React.Component{
    constructor(props){
        super(props)
        this.state={
            news: { title: '', text: '', Cover: null },
            baseUrl: 'https://admin.bossacriativa.art.br'
        }
    }

    async componentDidMount(){
      strapi.get(`/noticias/${this.props.match.params.id}`)
        .then(({ data }) => this.setState({ news: data }));
    }

    render(){
      return (
        <div className="container">
            <h6 className="breadcrumb"><span className="colorspan"><Link className="link" to="/noticias">NOTÍCIAS</Link><span className="fontspan"> - {this.state.news.title}</span></span></h6>
            <img 
              className="img-not"
              alt="" 
              src={
                this.state.news.Cover 
                  ? `${this.state.baseUrl}${this.state.news.Cover.url}`
                  : ''
              }
            />
            <div className="text-about-div">
                <h1 className="title-about">
                    {this.state.news.title}
                </h1>
                <p className="text-about">
                    <ReactMarkdown source={this.state.news.text}/>
                </p>
            </div>
            <Link className="link" to="/noticias"><a className="volte btn">Voltar para Notícias</a></Link>
        </div>
        )
    }
}
export default Noticia;
  