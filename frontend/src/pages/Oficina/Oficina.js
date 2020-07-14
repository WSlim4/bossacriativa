import React from 'react';
import './Oficina.css';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player';
import api from '../../services/api'
import history from '../../services/history'

class Oficina extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: [],
            first: [],
            infos: [],
            workshops: []
        }
        this.changeArray = this.changeArray.bind(this)
        this.reloadPage = this.reloadPage.bind(this)
    }
    componentDidMount(){
        const response = api.get(`/workshopLessons/${this.props.match.params.id}`)
            .then(response=>this.setState({ data: response.data, first: response.data[0] }))
        
        const infos = api.get(`/showInfos/${this.props.match.params.id}`)
            .then(response=>this.setState({ infos: response.data }))
        
        const workshops = api.get(`/showArtistWorkshops`, {
            params: {
                artist_name: this.props.match.params.artist
            }
        }).then(response=>this.setState({ workshops: response.data }))
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
            <h6 className="breadcrumb"><span className="colorspan"><Link className="link" to="/oficinas">OFICINAS -</Link><span className="fontspan"> Oficina de {infos[0].artist_name}</span></span></h6>
            <h1 className="main-title">Oficina de {infos[0].artist_name}</h1>
            <div className="top-container">
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className="top-div">
                            <div className="top-img" style={{backgroundImage: `url(${infos[0].img_url})`}}></div>
                            <h6 className="oficina-name" style={{backgroundColor: `${infos[0].theme_color}`}}>{infos[0].artist_name}</h6>
                            <p className="desc" style={{padding: '29px'}}>{infos[0].about_artist}</p>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="top-div">
                            <h2 className="oficina-title">Sobre esta oficina</h2>
                            <p className="desc">
                            <br/>
                            <br/>
                            <td style={{padding: '16px'}}dangerouslySetInnerHTML={{__html: infos[0].description}} />
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
                <div className="video-container">
                    <ReactPlayer
                        url={first_video.url}
                        width="100%"
                        height="80vh"
                    />
                </div>
            </div>
            <div className="oficinas-content"> 
                {videos.map(video=>
                    <div>
                        <ReactPlayer
                            url={video.url}
                            width="100%"
                            height="250px"
                        />
                        <h6 className="oficina-name" style={{backgroundColor: `${infos[0].theme_color}`}}>{video.title}</h6>
                        <p style={{backgroundColor: 'white'}}>{video.description}</p>
                        <p className="quero" onClick={()=>this.changeArray(video)}>Quero assistir!</p>
                    </div>
                )}
            </div>
            <h1 className="main-title">OUTRAS OFICINAS DESTE OFICINEIRO</h1>
            <div className="oficinas-content"> 
                {workshops.map(workshop=>
                <div style={{ backgroundColor: "#E7C032"}} onClick={()=>
                    this.reloadPage(workshop.id, workshop.artist_name)
                }>
                    <div className="div-img" style={{backgroundImage: `url(${workshop.img_url})`}}/>
                    <h6 style={{backgroundColor: `${workshop.theme_color}`}}>{workshop.artist_name}</h6>
                    <p>{workshop.about_artist}</p>
                    <p>{workshop.description}</p>
                </div>
                )}
            </div>
        </div>
        )
    }
}
export default Oficina;
  