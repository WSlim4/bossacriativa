import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player';
import api from '../../services/api'
import history from '../../services/history'

class Palestra extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: [],
            first: [],
            infos: [],
            lectures: []
        }
        this.changeArray = this.changeArray.bind(this)
        this.reloadPage = this.reloadPage.bind(this)
    }
    componentDidMount(){
        const response = api.get(`/lectureLessons/${this.props.match.params.id}`)
            .then(response=>this.setState({ data: response.data, first: response.data[0] }))
        
        const infos = api.get(`/lecture/${this.props.match.params.id}`)
            .then(response=>this.setState({ infos: response.data }))
        
        const lectures = api.get(`/showSpeakerLectures`, 
        {
            params: {
                speaker: this.props.match.params.speaker
            }
        }).then(response=>this.setState({ lectures : response.data }))
    }
    reloadPage(lecture_id, speaker){
        history.push(`/lecture/${lecture_id}/${speaker}`)
        window.document.location.reload()
    }

    changeArray(array){
        this.setState({ first: array })
        document.querySelector('div.video-container').scrollIntoView()
    }

    render(){
        const first_video = this.state.first
        const videos = this.state.data
        const lectures = this.state.lectures
        const infos = [this.state.infos]
      return (
        <div className="container">
            <h6 className="breadcrumb"><span className="colorspan"><Link className="link" to="/palestras">PALESTRAS</Link><span className="fontspan"> - Palestra de {infos[0].speaker}</span></span></h6>
            <h1 className="main-title">PALESTRA SOBRE {infos[0].name}, DE {infos[0].speaker}</h1>
            <div className="top-container">
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className="top-div">
                            <div>
                                <img className="div-img" src={infos[0].img_url}/>
                            </div>
                            <h6 className="oficina-name" style={{backgroundColor: `${infos[0].theme_color}`}}>{infos[0].speaker}</h6>
                            <p className="desc">{infos[0].about_speaker}</p>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="top-div">
                            <h2 className="oficina-title">Sobre esta palestra</h2>
                            <p className="desc">{infos[0].name}
                            <br/>
                            <br/>
                            {infos[0].description}
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
                        />
                        <h6 className="oficina-name" style={{backgroundColor: `${infos[0].theme_color}`}}>{video.title}</h6>
                        <p className="quero" onClick={()=>this.changeArray(video)}>Quero assistir!</p>
                    </div>
                )}
            </div>
            <h1 className="main-title">OUTRAS PALESTRAS DESTE PALESTRANTE</h1>
            <div className="oficinas-content"> 
                {lectures.map(lecture=>
                <div onClick={()=>
                    this.reloadPage(lecture.id, lecture.speaker)
                }>
                    <img className="div-img" src={lecture.img_url}/>
                    <h6 className="oficina-name" style={{backgroundColor: `${lecture.theme_color}`}}>{lecture.name}</h6>
                </div>
                )}
            </div>
        </div>
        )
    }
}
export default Palestra;
  