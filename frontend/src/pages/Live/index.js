import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import api from '../../services/api'
import './Live.css'

export default function Live(props){
    const [show, setShow] = useState([])

    useEffect(()=>{
        async function loadData(){
          const baseURL = 'http://localhost:1338/';
            const response = await api.get(`/lives/${props.match.params.id}`, { baseURL })
            setShow(response.data)
        }
        loadData()
    }, [])

    return(
        <>
            <div className="show-content" width="100%">
            <h4 className="title max-home">LIVE DE {show.artist}</h4>
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