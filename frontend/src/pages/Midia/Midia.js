import React from 'react';
import './Midia.css';
import ReactPlayer from 'react-player'

import foto_1 from '../../assets/novaGaleria/catia_de_franca_depoimento.jpg'
import foto_2 from '../../assets/novaGaleria/tim_rescala_depoimento.jpg'
import foto_3 from '../../assets/novaGaleria/maria_eugenia_tita_depoimento.jpg'

class Midia extends React.Component {
    
    render() {
        return (
            <div className="midia-container">
                <h1 className="title-midia">GALERIA DE FOTOS E VÍDEOS</h1>
                <div className="midia-div">
                    <div className="gallery">
                        <div className="videos">  
                            
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=UgCqyBFd9cQ'
                            light={true}
                            />
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=zzvt85Cq7F0'
                            light={true}
                            />
                            <div className="gallery-photo" style={{backgroundImage: `url(${foto_1})`}}/>
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=FKvW0EsoEBI'
                            light={true}
                            />
                            
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=Llrxh8ro5tU'
                            light={true}
                            />
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=PlRpCFz0iEI'
                            light={true}
                            />

                            <div className="gallery-photo" style={{backgroundImage: `url(${foto_2})`}}/>
                            <div className="gallery-photo" style={{backgroundImage: `url(${foto_3})`}}/>
                        </div>
                        
                        {/*<div className="gallery-photo">
                            <img alt="catia_de_franca" src={foto_1}/>
                        </div>
                        <div className="gallery-photo">
                            <img alt="tim_rescala" src={foto_2}/>
                        </div>
                        <div className="gallery-photo">
                            <img alt="maria_eugenia_tita" src={foto_3}/>
        </div>*/}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Midia;
