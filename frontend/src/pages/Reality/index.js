import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import strapi from '../../services/strapi'
import './styles.css'

export default function Reality({ match }){
    const [reality, setReality] = useState([])

    useEffect(()=>{
        async function loadData(){
            const response = await strapi.get(`/mostras/${match.params.id}`)
            setReality(response.data)
        }
        loadData()
    }, [match.params.id])

    return(
        <>
            <div className="show-content" width="100%">
            <h4 className="title max-home">{reality.title}</h4>
                <div className="video-div" width="100%">
                    <ReactPlayer
                        url={reality.video_url}
                        width="100%"
                        height="80vh"
                        controls
                    />
                </div>
            </div>
        </>
    )
}