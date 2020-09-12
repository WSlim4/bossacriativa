import React from 'react';
import './Noticia.css';
import { Link } from 'react-router-dom';
import strapi from '../../services/strapi';

class Noticia extends React.Component{
    constructor(props){
        super(props)
        this.state={
            news: {},
            baseUrl: 'https://admin.bossacriativa.art.br'
        }
    }

    async componentDidMount(){
      strapi.get(`/noticias/${this.props.match.params.id}`)
        .then(({ data }) => this.setState({ news: data }));
      console.log(this.props.match.params.id);
    }

    render(){
      return (
        <div className="container">
            <h6 className="breadcrumb"><span className="colorspan"><Link className="link" to="/noticias">NOTÍCIAS</Link><span className="fontspan"> - {this.state.news.title}</span></span></h6>
            <img 
              className="img-not" 
              src={
                this.state.news.Cover 
                  ? `${this.state.baseUrl}${this.state.news.Cover.formats.large.url}`
                  : ''
              }
            />
            <div className="text-about-div">
                <h1 className="title-about">
                    {this.state.news.title}
                </h1>
                <p className="text-about">
                    <td dangerouslySetInnerHTML={{__html: this.state.news.text}} />
                </p>
            </div>
            <Link className="link" to="/noticias"><a className="volte btn">Voltar para Notícias</a></Link>
        </div>
        )
    }
}
export default Noticia;
  