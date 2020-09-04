import React from 'react';
import './Imprensa.css';
import { Container, Row, Col } from 'react-bootstrap';
import { pdfjs } from "react-pdf";
import { Link } from 'react-router-dom';
import Box from '../../components/Box';
import ListRelease from '../../components/ListRelease';
import ListClip from '../../components/ListClip';
import styles from './styles';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Imprensa() {
  /*async function downloadImage(id) {
      const response = await api.get("/file/" + id,
        { headers: {"Content-Disposition": "attachment"}});
      return response;
  }*/

  const imprensa_photos = ["raffa_3","raffa_12","walda_9","walda_12"]
  const dumb = [
      "https://plantaodoslagos.com.br/categoria/cidades/bossa-criativa-reune-oficinas-de-arte-gratis-pela-internet/",
      "https://veja.abril.com.br/blog/radar/bossa-criativa-reune-oficinais-de-arte-gratis-pela-internet/",
      "https://brazil.shafaqna.com/PT/AL/6791912",
      "https://movimento.com/funarte-bossa-criativa-arte-de-toda-gente/",
      "https://www.orzil.org/noticias/em-live-funarte-e-ufrj-lancam-projeto-bossa-criativa/",
      "https://www.revistaprosaversoearte.com/em-live-funarte-e-ufrj-lancam-projeto-bossa-criativa-arte-de-toda-gente/",
      "https://www.blognovidadesonline.com.br/2020/06/funarte-e-ufrj-lancam-projeto-bossa.html",
      "https://dicadeteatro.com.br/funarte-e-ufrj-lancam-o-projeto-bossa-criativa/",
      "https://agreganews.com.br/funarte-e-ufrj-lancam-projeto-bossa-criativa-em-live/"
  ]
  
  return (
    <Container className="imprensa-container">
      <Row style={styles.row}>
        <Col className="col-12 col-md-6">
          <Box title="Releases">
            <ListRelease />
          </Box>
        </Col>
        <Col className="col-12 col-md-6">
          <Box title="Contato">
            <div style={styles.contact}>
              <p style={styles.textContact}>
                <strong>Funarte - Assessoria de Comunicação:</strong>
              </p>
              <p style={styles.textContact}>ascomfunarte@funarte.gov.br</p>
              <p style={styles.textContact}>
                <strong>Contato da Assessoria de Imprensa:</strong>
              </p>
              <p style={styles.textContact}>imprensa@musica.ufrj.br</p>
            </div>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col>
          <Box title="Clipping">
            <ListClip />
          </Box>
        </Col>
      </Row>      
    </Container>
        // <div className="imprensa-container">
        //     <Container>
        //         <h1 className="imprensa-title">RELEASES</h1>
        //         <div className="imprensa-div">
        //           <h3>Release Funarte de Toda Gente</h3>
        //           <p><a target="blank" href="https://drive.google.com/file/d/1gnE2o9q6GNy2sxXSal-iWmOeQeO2DJSX/view?usp=sharing">Clique aqui para ver o arquivo</a></p>
        //           <h3>Release Bossa Criativa - Arte de Toda Gente</h3>
        //           <p><a target="blank" href="https://drive.google.com/file/d/1SWSF01QKvrNO80mD3qM5_Ly36VDe98Tj/view?usp=sharing">Clique aqui para ver o arquivo</a></p>
        //           {/* <h3>RELEASE 2</h3>
        //           <p> Temporário</p> */}
        //         </div>
        //         <h2 className="imprensa-title">IMAGENS PARA DOWNLOAD</h2>
        //         <div className="imprensa-div">
        //             <div className="imprensa-downloads-div">
        //                 {/* Isso pode mudar pra um map facinho*/}
        //                 {imprensa_photos.map((image)=>{
        //                     return (
        //                         <div className="imprensa-download-div">
        //                             <img className="imprensa-download-img" src={require(`../../assets/galeria/${image}.jpg`)}></img>
        //                     <p style={{width: "15vw", wordWrap : "break-word"}} className="imprensa-img-creditos"><strong>Créditos: </strong> {image.search("raffa") >= 0 ? "Raffaella Bompiani d'Ancora" : "Walda Marques"}</p>
        //                         </div>
        //                     );
        //                 })}
                       
        //                 {/* <div className="imprensa-download-div">
        //                     <img className="imprensa-download-img" src={require("../../assets/logotipo.png")}></img>
        //                     <p className="imprensa-img-title"><strong>Título: </strong></p>
        //                     <p className="imprensa-img-creditos"><strong>Créditos: </strong></p>
        //                 </div>
        //                 <div className="imprensa-download-div">
        //                     <img className="imprensa-download-img" src={require("../../assets/banner-1.jpg")}></img>
        //                     <p className="imprensa-img-title"><strong>Título: </strong></p>
        //                     <p className="imprensa-img-creditos"><strong>Créditos: </strong></p>
        //                 </div> */}
        //             </div>
        //         </div>
        //         <h2 className="imprensa-title">ARQUIVOS PARA DOWNLOAD</h2>
        //         <div className="imprensa-div">
        //             <p> <strong> <a href="https://drive.google.com/file/d/1BkVk4Arwc-pbSEJZfIdWAh4L6gcWCN69/view?usp=sharing"> Logotipo PNG</a></strong> </p>
        //             <p> <strong> <a href="https://drive.google.com/file/d/1lKk-Xoym6e8ZV5U9ivCzDzNb_jyRPBz3/view?usp=sharing">Logotipo Vertical</a> </strong> </p>
        //             <p> <strong> <a href="https://drive.google.com/file/d/1h3mTiBrDmei5D0dDCXpB6_oSXrvTah5g/view?usp=sharing">Grafismo</a> </strong> </p>
        //         </div>
        //         <h2 className="imprensa-title">CONTATOS</h2>
        //         <div className="imprensa-div">
        //         <div className="imprensa-contato"> 
        //                 <p> <strong>Funarte - Assessoria de Comunicação:</strong></p>
        //                 <p>ascomfunarte@funarte.gov.br</p>
        //             </div>
        //             <div className="imprensa-contato"> 
        //                 <p> <strong>Contato da Assessoria de Imprensa:</strong></p>
        //                 <p>imprensa@musica.ufrj.br</p>
        //             </div>
        //         </div>
        //         <h2 className="imprensa-title">MATÉRIAS VEICULADAS</h2>
        //         <div className="imprensa-div">
        //             <div className="imprensa-materias-div">
                        
        //                 {dumb.map((link, index)=>{
        //                     if (index < 6) {
        //                         return(
        //                             <a target="blank" href={link}> <img style={{width: "10vw"}} src={require(`../../assets/materias_publicadas/${index + 1}.jpeg`)}></img></a>
        //                         )
        //                     } else {
        //                         return <a target="blank" href={link}>{link}</a>
        //                     }
                            
        //                 })}
                        
        //             </div>
        //         </div>
        //         <Link to="/links"><button className="links-btn">Saiba mais</button></Link>
        //     </Container>
        // </div>
    
  );
};
  