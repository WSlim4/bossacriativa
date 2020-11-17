import React from 'react';
import '../../global.css';
import './About.css';
import logoesp from '../../assets/Selo-Funarte-H500.png'
import { Container, Row, Col } from 'react-grid-system';

function About() {
    return (
        <div className="about-container">
            <Container>
            <h1 className="main-title">O PROJETO</h1>
                <div className="text-about-div">
                    <h1 className="title-about">
                        BOSSA CRIATIVA – ARTE DE TODA GENTE
                    </h1>
                    <h3 className="subtitle-about">
                        Arte, cultura, inclusão têm como palco internet e patrimônios da humanidade
                    </h3>
                    <p className="text-about">
                        No <span className="bold">Bossa Criativa – Arte de Toda Gente</span>, a Fundação Nacional de Artes – Funarte e a Universidade Federal do Rio de Janeiro (UFRJ) reúnem apresentações e capacitação, em diversas formas artísticas e de economia criativa. O projeto integra as iniciativas do <span className="bold">Funarte de Toda Gente</span> e seu foco é democratização da cultura, diversidade, e difusão de todas as artes, de modo inclusivo. As atividades se iniciam no dia 30 de junho, com pocket shows, performances e videoaulas, exibidos neste site e nas mídias sociais. Eles contam com a participação de artistas de todo o Brasil Na mesma data, será lançado um edital para novas propostas artísticas e culturais, e também uma chamada pública para apresentação de projetos artísticos de mestrandos.
                    </p>
                    <p className="text-about">
                        O <span className="bold">Bossa Criativa</span> se estenderá ao longo de 2021, com festivais presenciais em nove pontos do patrimônio mundial, histórico, cultural e natural, envolvendo espetáculos e oficinas de música, circo, artes visuais, literatura, dança e teatro, além de exposições, feiras de arte popular, gastronomia e artesanato, numa grande mostra de cultura, criatividade e empreendedorismo. Todas as atividades são gratuitas. Além de promover os pontos do patrimônio e fortalecer a noção de pertencimento do público em relação a esses lugares históricos, a programação tem o objetivo de envolver prestadores de serviço e toda a área criativa cultural de cada um desses locais, valorizando também as pessoas, sua arte e seus produtos.
                    </p>
                    <p className="text-about">
                        Parceria estratégica
                    </p>
                    <p className="text-about">
                        Entre as instituições federais, a Funarte é a principal promotora, incentivadora e propagadora de atividades artísticas no país, e sempre buscou parcerias que pudessem edificar e ampliar os resultados de seus programas. A parceria com a Universidade Federal do Rio de Janeiro, com gerenciamento administrativo da Fundação José Bonifácio (FUJB), agrega e incrementa conhecimento e capacidade de execução, técnica e artística, para o Projeto Bossa Criativa – Arte de Toda Gente. 
                    </p>
                    <p className="text-about">
                        A UFRJ é uma das principais e mais respeitadas universidades do país e tem em seu quadro profissionais especializados nas ações de ensino, pesquisa e projetos de extensão, com metodologias e didáticas específicas para lidar com alunos de todas as faixas etárias e níveis de instrução. E conta também com a pedagogia necessária para capacitar professores de artes, regentes de bandas e orquestras e gestores culturais, com o objetivo de promover o contato entre as pessoas e o compartilhamento de informações. Para reforçar a equipe que atuará no Bossa Criativa, somam-se profissionais dos diversos segmentos envolvidos, formando times multidisciplinares aos quais se juntarão especialistas, que atuarão em cada uma das cidades. Os eventos contarão com o apoio e participação de instituições e secretarias de cultura dos estados e municípios.
                    </p>
                    <h3 className="text-about">Conheça também:</h3>
                    <h1 className="title-about">
                      SINOS - SISTEMA NACIONAL DE ORQUESTRAS SOCIAIS
                    </h1> 
                    <p className="text-about">
                      O Sistema Nacional de Orquestras Sociais, Sinos é formado por uma rede de dezenas de professores de música que, por meio de cursos, oficinas, concertos e festivais, atua na capacitação de regentes, instrumentistas, compositores e educadores musicais, apoiando projetos sociais de música.
                    </p>
                    <p className="text-about"><a href="http://www.sinos.art.br/" target="__blank" >Clique aqui</a>  e saiba mais sobre o projeto SINOS</p>
                    <h1 className="title-about">
                      UM NOVO OLHAR
                    </h1> 
                    <p className="text-about">
                      O Um Novo Olhar reúne capacitações em arte-educação e em regência coral, para promover a arte como forma de inclusão e acesso de crianças, jovens e adultos com deficiência. Ao longo de 2020, mais de 70 artistas e educadores se dividem entre cerca de 200 horas de performances, apresentações e capacitações, além de publicações, palestras e eventos com especialistas de diversos países.
                    </p>
                    <p className="text-about"><a href="http://umnovoolhar.art.br/" target="__blank" >Clique aqui</a>  e saiba mais sobre o projeto Um Novo Olhar</p>
                    <p className="text-about">
                      Assim como Bossa Criativa, o SINOS e o UNO são uma parceria de Funarte e UFRJ, e fazem parte do Programa Funarte de Toda Gente.
                    </p>
                    <Row>
                        <Col lg={8}>

                        </Col>
                        <Col sm={12} lg={4}>
                            <div className="img-div">
                                <img src={logoesp} alt="Logo" className="logoesp"/>
                            </div>
                        </Col>
                    </Row>             
                </div>
            </Container>
        </div>
    
    )
  }
  
  export default About;
  