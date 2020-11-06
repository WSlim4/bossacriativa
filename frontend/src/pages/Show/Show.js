import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import strapi from '../../services/strapi'
import './Show.css'

export default function Show(props){
    const [show, setShow] = useState({ name: '', video_url: '' })

    useEffect(()=> {
      strapi.get(`/apresentacoes/${props.match.params.id}`).then(({ data }) => setShow(data));
    }, [props.match.params.id])

    return(
        <>
            <div className="show-content" width="100%">
            <h4 className="title max-home">APRESENTAÇÃO DE {show.artista ?  show.artista.name : ''}</h4>
                <div className="video-div" width="100%">
                    <ReactPlayer
                        url={show.video_url}
                        width="100%"
                        height="80vh"
                        controls
                    />
                </div>
            </div>
        </>
    )
}