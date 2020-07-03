import React from 'react';
import '../../global.css';
import './Midia.css';
import { Container } from 'react-grid-system';
import Masonry from 'react-masonry-component';

/*
{
    file_name: Nome do arquivo
    visible: Booleano que seta visibilidade 
    toggled: Imagem ativada
    index: Número pra poder ser acessável na array
}
*/
class Midia extends React.Component {
    constructor(props) {
        super(props);

        const names = ["raffa", "nad", "walda"];
        const range = [17, 10, 11];
        let file_names = [{ file_name: "ufrj", visible: true, index: 0 }]

        let j = 0;
        let index_counter = 0;
        for (let name of names) {
            for (let i = 1; i <= range[j]; i++) {
                index_counter++;
                file_names.push({
                    file_name: name + "_" + i, 
                    visible: true,
                    toggled: false, 
                    index: index_counter
                });
            } j++;
        }
        this.state = { images: file_names}
    }

    handleImageChanges(index) {
        console.log(index, this.state.images)
        let new_state = this.state.images;
        const changeType = this.state.images[index].toggled;
        for (let photo of new_state){
            if (!changeType){
                photo.index == index ? photo.visible = true : photo.visible = false;
            } else {
                photo.visible = true;
            }
        }
        new_state[index].toggled = !new_state[index].toggled;
        this.setState({images: new_state})
    }

    render() {
        const masonryOptions = {
            fitWidth: true,
            columnWidth: 3
        }
        return (
            <div className="midia-container">
                <Container>
                    <div className="midia-div">
                        <h1 className="title-midia">GALERIA DE MÍDIA</h1>
                        <Masonry
                            className={'gallery-list'}
                            options={masonryOptions}
                        >
                            {this.state.images.map((filename) => {
                                if (filename.visible) {
                                    return (<img className={this.state.images[filename.index].toggled? "gallery_full_scale_photo" : "gallery-photo"}
                                        key={filename.file_name}
                                        onClick={()=>{this.handleImageChanges(filename.index)}}
                                        src={require(`./../../assets/galeria/${filename.file_name}.jpg`)}></img>)
                                } else return null;
                            })}
                        </Masonry>
                    </div>

                </Container>
            </div>
        )
    }
}

export default Midia;
