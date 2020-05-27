import React from 'react'
import './VideoPlayer.css';
import ReactPlayer from 'react-player'

class Player extends React.Component{
    render(){
    return(
        <div className="background">
            <div className="player">
                <ul>
                    <li>
                        <ReactPlayer url="https://www.youtube.com/watch?v=HFhQ_jjXncE" controls={true} width='400px' height='300px'/>
                    </li>
                    <li>
                        <ReactPlayer url="https://www.youtube.com/watch?v=HFhQ_jjXncE" controls={true} width='400px' height='300px'/>
                    </li>
                </ul>
            </div>
        </div>
        )
    };
}
export default Player