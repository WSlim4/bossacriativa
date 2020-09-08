import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import strapi from '../../services/strapi'
import './Live.css'

export default function Live({ match }){
    const [live, setLive] = useState([])

    useEffect(()=>{
        async function loadData(){
            const response = await strapi.get(`/lives/${match.params.id}`)
            setLive(response.data)
        }
        loadData()
    }, [])

    return(
        <>
            <div className="show-content" width="100%">
            <h4 className="title max-home">{live.title}</h4>
                <div className="video-div" width="100%">
                    <ReactPlayer
                        url={live.video_url}
                        width="100%"
                        height="80vh"
                        controls
                    />
                </div>
            </div>
        </>
    )
}