import React from 'react';
import './Oficina.css';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player';
import strapi from '../../services/strapi'
import history from '../../services/history'
import ReactMarkdown from 'react-markdown'

class Oficina extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: [],
            first: [],
            infos: [],
            workshops: [],
            workshopsArtist: []
        }
        this.changeArray = this.changeArray.bind(this)
        this.reloadPage = this.reloadPage.bind(this)
    }
    componentDidMount(){
        // const response = strapi.get(`/aulas/${this.props.match.params.id}`)
        //     .then(response=>this.setState({ data: response.data, first: response.data[0] }))
        
        // const infos = strapi.get(`/showInfos/${this.props.match.params.id}`)
        //     .then(response=>this.setState({ infos: response.data }))
        
        strapi.get(`/oficinas/${this.props.match.params.id}`).then(response=>this.setState({ workshops: response.data }))
        strapi.get(`/oficinas?artista.name=${this.props.match.params.artist}`).then(response=>this.setState({ workshopsArtist: response.data }))
    }
    reloadPage(workshop_id, artist_name){
        history.push(`/oficina/${workshop_id}/${artist_name}`)
        window.document.location.reload()
    }

    changeArray(array){
        this.setState({ first: array })
        document.querySelector('div.video-container').scrollIntoView()
    }

    render(){
        const first_video = this.state.first
        const videos = this.state.data
        const workshops = this.state.workshops
        const infos = [this.state.infos]
      return (
        <div className="container">
            <h6 className="breadcrumb"><span className="colorspan"><Link className="link" to="/oficinas">OFICINAS -</Link><span className="fontspan"> Oficina de {workshops.title}</span></span></h6>
            <h1 className="main-title">{workshops.title}</h1>
            <div className="top-container">
            <Container>
                <Row>
                    <Col sm={4}>
                    {/**/}
                        <div className="top-div">
                            <div className="top-img" style={{backgroundImage: `url(${workshops.artista ? workshops.artista.image.name : ''})`}}></div>
                            <h6 className="oficina-name" style={{backgroundColor: `${infos[0].theme_color}`}}>{workshops.artista && workshops.artista.name}</h6>
                            <p className="desc" style={{padding: '29px'}}>{workshops.artista && workshops.artista.bio}</p>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="top-div">
                            <h2 className="oficina-title">Sobre esta oficina</h2>
                            <p className="desc"> 
                              <ReactMarkdown source={workshops.text} />     
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
                <div className="video-container">
                    <ReactPlayer
                        url={workshops.aulas ? workshops.aulas[0].url : ''}
                        width="100%"
                        height="80vh"
                    />
                </div>
            </div>
            <div className="oficinas-content"> 
                {workshops.aulas && workshops.aulas.slice(1, workshops.aulas.lenght).map(video=>
                    <div>
                        <ReactPlayer
                            url={video.url}
                            width="100%"
                            height="250px"
                        />
                        <h6 className="oficina-name" style={{backgroundColor: `${infos[0].theme_color}`}}>{video.title}</h6>
                        <p className="quero" onClick={()=>this.changeArray(video)}>Quero assistir!</p>
                    </div>
                )}
            </div>
            <h1 className="main-title">OUTRAS OFICINAS DESTE OFICINEIRO</h1>
            <div className="oficinas-content"> 
                {this.state.workshopsArtist.map(workshop=>
                <div style={{ backgroundColor: "#E7C032"}} onClick={()=>
                    this.reloadPage(workshop.id, workshop.artista.name)
                }>
                    <div className="div-img" style={{backgroundImage: `url(${workshop.img_url})`}}/>
                    <h6 style={{backgroundColor: `${workshop.theme_color}`}}>{workshop.artista.name}</h6>
                    <p>{workshop.artista.bio}</p>
                    <p>{workshop.intro}</p>
                </div>
                )}
            </div>
        </div>
        )
    }
}
export default Oficina;
  