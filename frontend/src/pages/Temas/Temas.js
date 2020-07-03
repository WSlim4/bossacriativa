import React from 'react';
import { Container } from 'react-grid-system';
import "./Temas.css"

class Temas extends React.Component {
    render() {
        return(
            <div className="temas-container">
            <Container>
                <div className="temas-div">
                <h1 className="title-temas">TEMAS</h1>
                <h3 className="subtitle-temas">Em breve</h3>
                </div>
            </Container>
        </div>
        );
    }
}

export default Temas;