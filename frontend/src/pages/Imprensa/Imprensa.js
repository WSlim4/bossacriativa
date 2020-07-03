import React from 'react';
import './Imprensa.css';
import { Container } from 'react-grid-system';
import { Document, Page, pdfjs } from "react-pdf";
import api from "../../services/api";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Imprensa() {
    async function downloadImage(id) {
        const response = await api.get("/file/" + id,
         { headers: {"Content-Disposition": "attachment"}});
        return response;
    }
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
        <div className="imprensa-container">
            <Container>
                <h1 className="imprensa-title">RELEASES</h1>
                <div className="imprensa-div">
                <h3>Release Funarte de Toda Gente</h3>
                <p><a target="blank" href="https://drive.google.com/file/d/1gnE2o9q6GNy2sxXSal-iWmOeQeO2DJSX/view?usp=sharing">Clique aqui para ver o arquivo</a></p>
                <h3>Release Bossa Criativa - Arte de Toda Gente</h3>
                <p><a target="blank" href="https://drive.google.com/file/d/1SWSF01QKvrNO80mD3qM5_Ly36VDe98Tj/view?usp=sharing">Clique aqui para ver o arquivo</a></p>
                {/* <h3>RELEASE 2</h3>
                <p> Temporário</p> */}
                </div>
                <h2 className="imprensa-title">IMAGENS PARA DOWNLOAD</h2>
                <div className="imprensa-div">
                    <div className="imprensa-downloads-div">
                        {/* Isso pode mudar pra um map facinho*/}
                        {imprensa_photos.map((image)=>{
                            return (
                                <div className="imprensa-download-div">
                                    <img className="imprensa-download-img" src={require(`../../assets/galeria/${image}.jpg`)}></img>
                            <p style={{width: "15vw", wordWrap : "break-word"}} className="imprensa-img-creditos"><strong>Créditos: </strong> {image.search("raffa") >= 0 ? "Raffaella Bompiani d'Ancora" : "Walda Marques"}</p>
                                </div>
                            );
                        })}
                       
                        {/* <div className="imprensa-download-div">
                            <img className="imprensa-download-img" src={require("../../assets/logotipo.png")}></img>
                            <p className="imprensa-img-title"><strong>Título: </strong></p>
                            <p className="imprensa-img-creditos"><strong>Créditos: </strong></p>
                        </div>
                        <div className="imprensa-download-div">
                            <img className="imprensa-download-img" src={require("../../assets/banner-1.jpg")}></img>
                            <p className="imprensa-img-title"><strong>Título: </strong></p>
                            <p className="imprensa-img-creditos"><strong>Créditos: </strong></p>
                        </div> */}
                    </div>
                </div>
                <h2 className="imprensa-title">ARQUIVOS PARA DOWNLOAD</h2>
                <div className="imprensa-div">
                    <p> <strong> <a href="https://drive.google.com/file/d/1BkVk4Arwc-pbSEJZfIdWAh4L6gcWCN69/view?usp=sharing"> Logotipo PNG</a></strong> </p>
                    <p> <strong> <a href="https://drive.google.com/file/d/1lKk-Xoym6e8ZV5U9ivCzDzNb_jyRPBz3/view?usp=sharing">Logotipo Vertical</a> </strong> </p>
                    <p> <strong> <a href="https://drive.google.com/file/d/1h3mTiBrDmei5D0dDCXpB6_oSXrvTah5g/view?usp=sharing">Grafismo</a> </strong> </p>
                </div>
                <h2 className="imprensa-title">CONTATOS</h2>
                <div className="imprensa-div">
                <div className="imprensa-contato"> 
                        <p> <strong>Funarte - Assessoria de Comunicação:</strong></p>
                        <p>ascomfunarte@funarte.gov.br</p>
                    </div>
                    <div className="imprensa-contato"> 
                        <p> <strong>Contato da Assessoria de Imprensa:</strong></p>
                        <p>imprensa@musica.ufrj.br</p>
                    </div>
                </div>
                <h2 className="imprensa-title">MATÉRIAS VEICULADAS</h2>
                <div className="imprensa-div">
                    <div className="imprensa-materias-div">
                        
                        {dumb.map((link, index)=>{
                            if (index < 6) {
                                return(
                                    <a target="blank" href={link}> <img style={{width: "10vw"}} src={require(`../../assets/materias_publicadas/${index + 1}.jpeg`)}></img></a>
                                )
                            } else {
                                return <a target="blank" href={link}>{link}</a>
                            }
                            
                        })}
                        <div className="imprensa-links">
                            <h3>Veja aqui algumas matérias já publicadas que mencionam o Bossa Criativa na imprensa</h3>
                                <p><a target="blank" href="https://www.annaramalho.com.br/incentivo-para-as-artes/">https://www.annaramalho.com.br/incentivo-para-as-artes/</a></p>
                                <p><a target="blank" href="https://oglobo.globo.com/cultura/funarte-anuncia-20-milhoes-para-edital-emergencial-lives-com-curadoria-da-escola-de-musica-da-ufrj-24476189 ">https://oglobo.globo.com/cultura/funarte-anuncia-20-milhoes-para-edital-emergencial-lives-com-curadoria-da-escola-de-musica-da-ufrj-24476189 </a></p>
                                <p><a target="blank" href="https://www1.folha.uol.com.br/ilustrada/2020/06/funarte-vai-investir-cerca-de-r-20-mi-em-atividades-culturais.shtml ">https://www1.folha.uol.com.br/ilustrada/2020/06/funarte-vai-investir-cerca-de-r-20-mi-em-atividades-culturais.shtml </a></p>
                                <p><a target="blank" href="https://plantaodoslagos.com.br/categoria/entretenimento/funarte-anuncia-investimentos-e-uma-serie-de-acoes-para-todo-o-brasil-r-20-milhoes/">https://plantaodoslagos.com.br/categoria/entretenimento/funarte-anuncia-investimentos-e-uma-serie-de-acoes-para-todo-o-brasil-r-20-milhoes/</a></p>
                                <p><a target="blank" href="https://movimento.com/funarte-de-toda-gente/">https://movimento.com/funarte-de-toda-gente/</a></p>
                                <p><a target="blank" href="https://www.jcnet.com.br/noticias/cultura/2020/06/726733-funarte-promete-investir-cerca-de-r--20-milhoes-em-atividades-culturais.html">https://www.jcnet.com.br/noticias/cultura/2020/06/726733-funarte-promete-investir-cerca-de-r--20-milhoes-em-atividades-culturais.html</a></p>
                                <p><a target="blank" href="https://dicasdacapital.com.br/lancamento-do-premio-funarte-respirarte-acontece-na-proxima-terca-feira/">https://dicasdacapital.com.br/lancamento-do-premio-funarte-respirarte-acontece-na-proxima-terca-feira/</a></p>
                                <p><a target="blank" href="https://www.tribunadabahiavirtual.com.br/materia/I26831/funarte-anuncia-investimentos-e-uma-serie-de-acoes-para-todo-o-brasil">https://www.tribunadabahiavirtual.com.br/materia/I26831/funarte-anuncia-investimentos-e-uma-serie-de-acoes-para-todo-o-brasil</a></p>
                                <p><a target="blank" href="https://www.trbn.com.br/materia/I26831/funarte-anuncia-investimentos-e-uma-serie-de-acoes-para-todo-o-brasil">https://www.trbn.com.br/materia/I26831/funarte-anuncia-investimentos-e-uma-serie-de-acoes-para-todo-o-brasil</a></p>
                                <p><a target="blank" href="https://www.trbn.com.br/materia/I26831/funarte-anuncia-investimentos-e-uma-serie-de-acoes-para-todo-o-brasil">https://www.trbn.com.br/materia/I26831/funarte-anuncia-investimentos-e-uma-serie-de-acoes-para-todo-o-brasil</a></p>
                                <p><a target="blank" href="https://icarabe.org/node/3840">https://icarabe.org/node/3840</a></p>
                                <p><a target="blank" href="https://www.sopacultural.com/noticias/funarte-anuncia-investimentos-e-uma-serie-de-acoes-para-todo-o-brasil/">https://www.sopacultural.com/noticias/funarte-anuncia-investimentos-e-uma-serie-de-acoes-para-todo-o-brasil/</a></p>
                                <p><a target="blank" href="https://br.noticias.yahoo.com/funarte-anuncia-r-20-milhões-160508834.html">https://br.noticias.yahoo.com/funarte-anuncia-r-20-milhões-160508834.html</a></p>
                                <p><a target="blank" href="https://www.acidadeon.com/NOT,0,0,1524180,Funarte+promete+investir+cerca+de+R+20+milhoes+em+atividades+culturais.aspx">https://www.acidadeon.com/NOT,0,0,1524180,Funarte+promete+investir+cerca+de+R+20+milhoes+em+atividades+culturais.aspx</a></p>
                                <p><a target="blank" href="https://www.folhadelondrina.com.br/folha-2/funarte-promete-investir-cerca-de-r-20-milhoes-em-atividades-culturais-2995449e.html">https://www.folhadelondrina.com.br/folha-2/funarte-promete-investir-cerca-de-r-20-milhoes-em-atividades-culturais-2995449e.html</a></p>
                                <p><a target="blank" href="https://dlnews.com.br/noticias?id=32790%2Ffunarte-promete-investir-cerca-de-r%24-20-milhoes-em-atividades-culturais#.XueWQlGNWvs">https://dlnews.com.br/noticias?id=32790%2Ffunarte-promete-investir-cerca-de-r%24-20-milhoes-em-atividades-culturais#.XueWQlGNWvs</a></p>
                                <p><a target="blank" href="https://www.selecoes.com.br/plantao/funarte-promete-investir-cerca-de-r-20-milhoes-em-atividades-culturais/">https://www.selecoes.com.br/plantao/funarte-promete-investir-cerca-de-r-20-milhoes-em-atividades-culturais/</a></p>
                                <p><a target="blank" href="https://revistapaulista.com.br/2020/06/12/funarte-anuncia-investimentos-e-uma-serie-de-acoes-para-todo-o-brasil/">https://revistapaulista.com.br/2020/06/12/funarte-anuncia-investimentos-e-uma-serie-de-acoes-para-todo-o-brasil/</a></p>
                                <p><a target="blank" href="https://www.meionorte.com/blogs/culturaeturismo/funarte-anuncia-investimentos-de-r-20-milhoes-e-acoes-para-o-brasil-343132">https://www.meionorte.com/blogs/culturaeturismo/funarte-anuncia-investimentos-de-r-20-milhoes-e-acoes-para-o-brasil-343132</a></p>
                                <p><a target="blank" href="https://www.mixvale.com.br/2020/06/12/funarte-promete-investir-cerca-de-r-20-milhoes-em-atividades-culturais/">https://www.mixvale.com.br/2020/06/12/funarte-promete-investir-cerca-de-r-20-milhoes-em-atividades-culturais/</a></p>
                                <p><a target="blank" href="https://riopreto.dlnews.com.br/noticias?id=32790%2Ffunarte-promete-investir-cerca-de-r%24-20-milhoes-em-atividades-culturais#.XueXI8gInKM">https://riopreto.dlnews.com.br/noticias?id=32790%2Ffunarte-promete-investir-cerca-de-r%24-20-milhoes-em-atividades-culturais#.XueXI8gInKM</a></p>
                                <p><a target="blank" href="https://br.financas.yahoo.com/noticias/funarte-promete-investir-cerca-r-234700406.html">https://br.financas.yahoo.com/noticias/funarte-promete-investir-cerca-r-234700406.html</a></p>
                                <p><a target="blank" href="http://www.forumpermanente.org/event_pres/jornadas/jornada-da-quarentena/noticias-jornada-da-quarentena-1/funarte-anuncia-r-20-milhoes-para-edital-emergencial-e-lives-com-curadoria-da-escola-de-musica-da-ufrj">http://www.forumpermanente.org/event_pres/jornadas/jornada-da-quarentena/noticias-jornada-da-quarentena-1/funarte-anuncia-r-20-milhoes-para-edital-emergencial-e-lives-com-curadoria-da-escola-de-musica-da-ufrj</a></p>
                                <p><a target="blank" href="http://www.portaldoholanda.com.br/arte-e-cultura/funarte-promete-investir-cerca-de-r-20-milhoes-em-atividades?amp=1">http://www.portaldoholanda.com.br/arte-e-cultura/funarte-promete-investir-cerca-de-r-20-milhoes-em-atividades?amp=1</a></p>
                                <p><a target="blank" href="https://www.pirajuiradioclube.com.br/noticia/funarte-promete-investir-cerca-de-r-20-milhoes-em-atividades-culturais">https://www.pirajuiradioclube.com.br/noticia/funarte-promete-investir-cerca-de-r-20-milhoes-em-atividades-culturais</a></p>
                                <p><a target="blank" href="https://www.jornalfloripa.com.br/geral/funarte-promete-investir-cerca-de-r-20-milhoes-em-atividades-culturais/">https://www.jornalfloripa.com.br/geral/funarte-promete-investir-cerca-de-r-20-milhoes-em-atividades-culturais/</a></p>
                                <p>Márcia Peltier <a target="blank" href="www.marciapeltier.com.br">www.marciapeltier.com.br</a>  “... o programa Funarte de Toda Gente, que engloba ações de capacitação e inclusão para a economia criativa - algumas delas em parceria com a UFRJ.”</p>
                                <p><a target="blank" href="https://cultura.am.gov.br/portal/confira-editais-mostras-e-festivais-com-inscricoes-abertas-para-diversas-linguagens-artisticas/">https://cultura.am.gov.br/portal/confira-editais-mostras-e-festivais-com-inscricoes-abertas-para-diversas-linguagens-artisticas/</a></p>
                                <p><a target="blank" href="http://www.fundacaocultural.ba.gov.br/2020/06/14307/Funarte-anuncia-edital-para-Circo-Artes-Visuais-Musica-Danca-Teatro-e-Artes-Integradas.html">http://www.fundacaocultural.ba.gov.br/2020/06/14307/Funarte-anuncia-edital-para-Circo-Artes-Visuais-Musica-Danca-Teatro-e-Artes-Integradas.html</a></p>
                        </div>
                    </div>
            </div>
            </Container>
        </div>
    
    )
  }
  
  export default Imprensa;
  