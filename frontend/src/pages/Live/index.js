import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import strapi from '../../services/strapi'
import './Live.css'

export default function Live(props){
    const [show, setShow] = useState([])

    useEffect(()=>{
        async function loadData(){
            const response = await strapi.get(`/lives/${props.match.params.id}`)
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