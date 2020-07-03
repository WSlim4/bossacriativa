import React from 'react';
import '../../global.css';
import './Patrimonio.css';
import { Container } from 'react-grid-system';

import IMGBrasilia from "../../assets/publicacao/brasilia.jpg";
import IMGOuroPreto from "../../assets/publicacao/ouropreto.jpg";
import IMGBH from "../../assets/publicacao/bh.jpg";
import IMGRJ from "../../assets/publicacao/rj.jpg";
import IMGSaoCristovao from "../../assets/publicacao/saocristovao.jpg";
import IMGParaty from "../../assets/publicacao/paraty.jpg";
import IMGSLMaranhao from "../../assets/publicacao/slmaranhao.jpg";
import IMGOlinda from "../../assets/publicacao/olinda.jpg";
import IMGSMDM from "../../assets/publicacao/smdasmissoes.jpg";
// import IMGResOP from "../../assets/publicacao/resouropreto.jpg";

class Patrimonio extends React.Component {
    render() {
    return (
        <div className="patrimonio-container">
            <Container className="patrimonio-container-styling">
                <h2 className="patrimonio-main-title"> PATRIMÔNIO</h2>
                    <div className="patrimonio-navigator">
                        <h1 className="title-patrimonio">NAVEGUE POR AQUI</h1>
                        <ul className="text-patrimonio">
                            <li className="patrimonio-link"><a href="#part-1">O patrimônio como palco</a></li>
                            <li className="patrimonio-link"><a href="#part-2">O que significa ser patrimônio?</a></li>
                            <li className="patrimonio-link"><a href="#part-3">Quem é responsável pela lista?</a></li>
                            <li className="patrimonio-link"><a href="#part-4">Patrimôio Cultural Imaterial da Humanidade</a></li>
                        </ul>
                    </div>
                
                <div className="patrimonio-div">
                    {/* <h1 className="title-patrimonio">PATRIMÔNIO</h1> */}
        <h1 className="title-patrimonio">
            O Projeto Bossa Criativa e os Patrimônios Mundiais do Brasil
        </h1>
            <p className="text-patrimonio">
                Um dos principais objetivos do projeto Bossa Criativa - Arte de Toda Gente é aproximar as pessoas de patrimônios culturais da humanidade reconhecidos pela Unesco no Brasil, estimulando o público a conhecê-los por meio de atividades e eventos, com a promoção da acessibilidade e da inclusão. Inicialmente, online e, em uma segunda fase, em nove desses locais. Clique aqui e saiba mais sobre cada um deles. 
            </p>
            
                <h2 className="subtitle-patrimonio" id="part-1">
                    O patrimônio como palco
                </h2>
            <p className="text-patrimonio">
                Conheça aqui os locais com patrimônios brasileiros que receberão atividades presenciais do Bossa Criativa – Arte de Toda Gente em 2021:
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h3 className="subtitle-patrimonio">
                    Ouro Preto:
                </h3>
            <div className="fixIMG"><img src={IMGOuroPreto}></img></div>
            <p className="text-patrimonio">
                A Cidade de Ouro Preto, originalmente chamada de Vila Rica, comemora em 2020 quatro décadas como Patrimônio Mundial da Unesco, tendo sido o primeiro lugar brasileiro incluído na lista oficial. Ela será uma das homenageadas do projeto, recebendo diversas ações ligadas à arte, cultura e turismo.
            </p>
            <p className="text-patrimonio">
                Saiba mais sobre Ouro Preto:
            </p>
            <p className="text-patrimonio">
                <a href="https://ouropreto.org.br/turismo/Apresentacao/viajar">
                    <u>
                        https://ouropreto.org.br/turismo/Apresentacao/viajar#
                    </u>
                </a>
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h3 className="subtitle-patrimonio">
                    Belo Horizonte - Complexo da Pampulha
                </h3>
            <div className="fixIMG"><img src={IMGBH}></img></div>
            <p className="text-patrimonio">
                O conjunto arquitetônico da Pampulha fica em Belo Horizonte, capital de Minas Gerais e entrou para a lista dos patrimônios mundiais da UNESCO em 2016. A igreja projetada por Oscar Niemeyer é uma das quatro primeiras obras do arquiteto. As demais edificações também fazem parte do complexo e foram construídas entre 1942 e 1943, são elas o Cassino, a Casa do Baile e o Iate Clube.
            </p>
            <p className="text-patrimonio">
                Saiba mais sobre Belo Horizonte e a Pampulha:
            </p>
            <p className="text-patrimonio">
                <a href="https://www.youtube.com/watch?v=YMQsWU9HRlo">
                    https://www.youtube.com/watch?v=YMQsWU9HRlo
                </a>
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h3 className="subtitle-patrimonio">
                    Brasília
                </h3>
            <div className="fixIMG"><img src={IMGBrasilia}></img></div>
            <p className="text-patrimonio">
                Brasília, a cidade planejada e Capital do Brasil é Patrimônio Mundial desde 1987. O conjunto urbanístico e arquitetônico foi construído a partir do Plano Piloto de Lucio Costa e faz parte do projeto nacional de modernização do país, lançado pelo então presidente Juscelino Kubitschek na década de 1950. Os projetos de Oscar Niemeyer – como a Praça dos Três Poderes com os palácios do Planalto, Supremo Tribunal Federal e Congresso Nacional – se destacam como belas obras da arquitetura. O lugar também ostenta o título de Cidade Criativa da Unesco (Design).
            </p>
            <p className="text-patrimonio">
                <a href="https://www.youtube.com/watch?v=j0D6FLWGs-o">
                    Sailba mais sobre Brasília:
                </a>
                <a href="https://www.youtube.com/watch?v=j0D6FLWGs-o">
                    https://www.youtube.com/watch?v=j0D6FLWGs-o
                </a>
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h3 className="subtitle-patrimonio">
                    Rio de Janeiro
                </h3>
            <div className="fixIMG"><img src={IMGRJ}></img></div>
            <p className="text-patrimonio">
                O Rio de Janeiro, conhecido como Cidade Maravilhosa, recebeu o título de Patrimônio Cultural da Humanidade em 2012. A cidade foi capital do Brasil entre os anos 1763 e 1961. Entre os monumentos, em meio a belas paisagens naturais, destacam-se entre outros o Corcovado, o Pão de Açucar, a Praia de Copacabana, o Jardim Botânico.
            </p>
            <p className="text-patrimonio">
                Saiba mais sobre o Rio de Janeiro:
            </p>
            <p className="text-patrimonio">
                <a href="https://www.youtube.com/watch?v=oRDE1efjFtQ">
                    https://www.youtube.com/watch?v=oRDE1efjFtQ
                </a>
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h3 className="subtitle-patrimonio">
                    São Cristóvão (SE)
                </h3>
            <div className="fixIMG"><img src={IMGSaoCristovao}></img></div>
            <p className="text-patrimonio">
                São Cristóvão foi a primeira capital de Sergipe. Fundada em 1590. Assim como Ouro Preto, se caracteriza pelo calçamento de pedras, arquitetura colonial, igrejas e museus. A cidade é considerada um registro único e autêntico de um fenômeno urbano singular no Brasil: como foi construída no período durante o qual Portugal e Espanha estiveram unidos sob uma única coroa, sua praça principal segue os padrões de ocupação de Portugal e as normas de urbanização da Espanha. A Praça de São Francisco, reconhecida como Patrimônio Mundial, é um espaço aberto quadrilateral cercado por prédios importantes como a Igreja e o Convento de São Francisco, a Igreja e Santa Casa da Misericórdia, o Palácio Provincial e as casas associadas de diferentes períodos históricos em torno do Quadrado.
            </p>
            <p className="text-patrimonio">
                Saiba mais sobre São Cristóvão:
            </p>
            <p className="text-patrimonio">
                <a href="https://www.youtube.com/watch?v=oOkSTPSTXsU">
                    https://www.youtube.com/watch?v=oOkSTPSTXsU
                </a>
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h3 className="subtitle-patrimonio">
                    Paraty (RJ)
                </h3>
            <div className="fixIMG"><img src={IMGParaty}></img></div>
            <p className="text-patrimonio">
                Com suas famosas ruas calçadas com pedras e casarões coloniais, Paraty (, juntamente com a Ilha grande, no município de Angra dos Reis) foi reconhecida como Patrimônio Cultural e Natural, em 2019, sendo assim o primeiro Patrimônio da Humanidade Misto do Brasil. O Centro Histórico reúne registros arqueológicos de diferentes épocas, enquanto as áreas do Parque Nacional da Serra da Bocaina, do Parque Estadual da Ilha Grande, da Reserva Biológica Estadual da Praia do Sul e da Área de Preservação Ambiental de Cairuçu formam um imenso cinturão de mata nativa.
            </p>
            <p className="text-patrimonio">
                Saiiba mais sobre Paraty:
            </p>
            <p className="text-patrimonio">
                <a href="https://www.youtube.com/watch?v=ulmMVJo6vgo">
                    https://www.youtube.com/watch?v=ulmMVJo6vgo
                </a>
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h3 className="subtitle-patrimonio">
                    São Luís do Maranhão
                </h3>
            <div className="fixIMG"><img src={IMGSLMaranhao}></img></div>
            <p className="text-patrimonio">
                São Luís (MA) teve seu centro histórico declarado como Patrimônio Cultural da Humanidade em 1997. Lá está preservada a arquitetura do projeto de urbanização colonial portuguesa, com destaque para fachadas de casarões com azulejos portugueses e construções marcantes, como o Palácio dos Leões, a Catedral, o Convento das Mercês, a Casa das Minas, o Teatro Artur Azevedo.
            </p>
            <p className="text-patrimonio">
                Saiba mais sobre São Luis:
            </p>
            <p className="text-patrimonio">
                <a href="https://www.youtube.com/watch?v=bX7VoEG-BGc">
                    https://www.youtube.com/watch?v=bX7VoEG-BGc
                </a>
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h3 className="subtitle-patrimonio">
                    Olinda (PE)
                </h3>
            <div className="fixIMG"><img src={IMGOlinda}></img></div>
            <p className="text-patrimonio">
                Olinda (PE), famosa pelo Frevo – eleito Patrimônio Cultural Imaterial da Humanidade – e pelas ladeiras históricas, remete ao início da colonização portuguesa no Brasil. Seu conjunto arquitetônico, urbanístico e paisagístico tombado e seu Centro Histórico reconhecido como Patrimônio Cultural Mundial em 1982. A cidade conta com exemplos de diferentes estilos arquitetônicos desde o século XVIII e é palco de um dos mais concorridos carnavais do Brasil.
            </p>
            <p className="text-patrimonio">
                Saiba mais sobre Olinda:
            </p>
            <p className="text-patrimonio">
                <a href="https://www.youtube.com/watch?v=sQxi9sq3SXE">
                    https://www.youtube.com/watch?v=sQxi9sq3SXE
                </a>
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h3 className="subtitle-patrimonio">
                    São Miguel das Missões (RS)
                </h3>
            <div className="fixIMG"><img src={IMGSMDM}></img></div>
            <p className="text-patrimonio">
                São Miguel das Missões (RS), originária das Missões Jesuítas Guaranis, abriga monumentos da antiga missão indígena de são Miguel Arcanjo. Suas ruínas foram reconhecidas como Patrimônio da Humanidade pela Unesco em 1983, juntamente com as missões jesuítas dos Guaranis. O sítio é transnacional, ou seja, envolve itens em diferentes países: as ruínas de São Miguel Arcanjo, no Brasil, e as de San Ignacio Miní, Santa Ana, Nuestra Señora de Loreto e Santa María la Mayor, na Argentina. Ambas são registros dos assentamentos da Missão Jesuíta estabelecidos nos séculos XVII e XVIII em terras originalmente ocupadas pelas comunidades indígenas Guarani.
            </p>
            <p className="text-patrimonio">
                Saiba mais sobre São Miguel das Missões:
            </p>
            <p className="text-patrimonio">
                <a href="https://www.youtube.com/watch?v=nnblxvcRxJc">
                    https://www.youtube.com/watch?v=nnblxvcRxJc
                </a>
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h2 className="subtitle-patrimonio">
                    Patrimônios Mundiais: bens de todos e para todos
                </h2>
            <p className="text-patrimonio">
                A Cidade de Ouro Preto, o Taj Mahal, o Grand Canyon, o Complexo da Pampulha, as pirâmides de Memphis e Necropolis, a Catedral de Notre Dame e o Parque Nacional do Iguaçu. Além de sua beleza única, o que esses lugares têm em comum?
            </p>
            <p className="text-patrimonio">
                Todos são reconhecidos como Patrimônios Mundiais ou Patrimônios da Humanidade e quem atribui esse título é a <strong>UNESCO (Organização das Nações Unidas para a Educação, a Ciência e a Cultura).</strong>
                O reconhecimento indica a importância única desses patrimônios para o mundo e para a humanidade, ressaltando a necessidade de estabelecimento de medidas para garantir sua preservação para as gerações futuras. Mas, para entrar nessa lista especial, é preciso que o país em que esse bem está localizado apresente uma indicação.<a href="#part-3"> Veja aqui como esse processo acontece. </a>
            </p>
            <p className="text-patrimonio">
                Esta pequena chamada pode entrar como um “olho”:
            </p>
                <h2 className="subtitle-patrimonio">
                    Você sabe por que determinados locais são escolhidos como patrimônios da humanidade e como isso acontece? <a href="#part-2"> Confira aqui </a>
                </h2>
                <h2 className="subtitle-patrimonio" id="part-2">
                    O que esse título significa? Quem o concede?
                </h2>
            <p className="text-patrimonio">
                Como mencionamos, o título de Patrimônio da Humanidade é atribuído pela <strong>UNESCO (Organização das Nações Unidas para a Educação, a Ciência e a Cultura)</strong>
                . Uma convenção de 1972, criada para a proteção do patrimônio mundial e natural, estabeleceu que certos lugares da terra têm "excepcional valor universal". Alguns deles foram, então, reconhecidos e a lista passou a receber acréscimos a cada ano, mediante uma série de critérios. Desde 2003 – como veremos mais adiante –, também criações culturais imateriais podem entrar nessa categoria.
            </p>
            <p className="text-patrimonio">
                Os países que assinaram essa convenção – entre eles o Brasil – podem indicar novos bens com as características necessárias a serem considerados Patrimônios da Humanidade, formando uma lista que servirá para o planejamento e preparação de candidaturas. Os indicados deverão refletir diversidade e riqueza natural e/ou cultural.
            </p>
            <p className="text-patrimonio">
                Caso seja aprovado em todas as etapas, o país proponente poderá contar com recursos provenientes do Fundo do Patrimônio Mundial e administrados pela Unesco para conservação do local..
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h2 className="subtitle-patrimonio">
                    O que é preciso para ser eleito?
                </h2>
            <p className="text-patrimonio">
                
            </p>
            <p className="text-patrimonio">
                Para serem incluídos na Lista do Patrimônio Mundial, os locais devem ter um valor universal excepcional e atender a pelo menos um dos dez critérios de seleção abaixo:
            </p>
            <p className="text-patrimonio">
                1 - Representar uma obra-prima do gênio criativo humano;
            </p>
            <p className="text-patrimonio">
                2 - exibir um importante intercâmbio de valores humanos, ao longo de um período de tempo ou dentro de uma área cultural do mundo, sobre desenvolvimentos em arquitetura ou tecnologia, artes monumentais, urbanismo ou paisagismo;
            </p>
            <p className="text-patrimonio">
                3 - prestar um testemunho único, ou pelo menos excepcional, a uma tradição cultural ou a uma civilização que esteja viva ou que tenha desaparecido;
            </p>
            <p className="text-patrimonio">
                4 ser um excelente exemplo de um tipo de edifício, conjunto arquitetônico ou tecnológico ou paisagem que ilustra diferentes períodos históricos da humanidade;
            </p>
            <p className="text-patrimonio">
                5 - ser um excelente exemplo de assentamento humano tradicional, uso da terra ou uso do mar, representativo de uma cultura (ou culturas) ou interação humana com o meio ambiente, especialmente quando ele se tornou vulnerável sob o impacto de mudanças irreversíveis;
            </p>
            <p className="text-patrimonio">
                6 - estar direta ou tangivelmente associado a eventos ou tradições vivas, a idéias ou crenças, a obras artísticas e literárias de notável significado universal. (O Comitê considera que esse critério deve ser utilizado preferencialmente em conjunto com outros critérios);
            </p>
            <p className="text-patrimonio">
                7 - conter fenômenos naturais superlativos ou áreas de excepcional beleza natural e importância estética;
            </p>
            <p className="text-patrimonio">
                8 - ser exemplos notáveis que representam os principais estágios da história da Terra, incluindo o registro da vida, processos geológicos significativos em andamento no desenvolvimento de formas de relevo ou características geomórficas ou fisiográficas significativas;
            </p>
            <p className="text-patrimonio">
                9 - ser exemplo notável que representa significativos processos ecológicos e biológicos em andamento na evolução e desenvolvimento de ecossistemas terrestres, de água doce, costeiros e marinhos e comunidades de plantas e animais;
            </p>
            <p className="text-patrimonio">
                10 - conter os habitats naturais mais importantes e significativos para a conservação
                <p>
                    in situ
                </p>
                (no local) da diversidade biológica, incluindo aqueles que contêm espécies ameaçadas de notável valor universal do ponto de vista da ciência ou da conservação.
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h2 className="subtitle-patrimonio">
                    Patrimônio Cultural x Patrimônio Natural
                </h2>
            <p className="text-patrimonio">
                Quando pensamos em patrimônio natural, costumamos ter em mente parques, lagos e outros. Mas é preciso muito mais para que algo seja considerado um patrimônio pela Unesco ‒ como por exemplo ter fenômenos naturais excepcionais ou áreas de beleza natural inigualável, como as ilhas atlânticas de Fernando de Noronha (PE) e o Grand Canion National Park (EUA), por exemplo.
            </p>
            <p className="text-patrimonio">
                Já os patrimônios culturais foram criados pelos homens e podem representar uma obra-prima, construções de gênios da humanidade, conjunto arquitetônico ou tecnológico, entre outros, como a Acrópoles na cidade de Atenas na Grécia e Brasília, a cidade planejada.
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h2 className="subtitle-patrimonio">
                    Lista completa dos Patrimônios da Humanidade
                </h2>
            <p className="text-patrimonio">
                A Lista completa mundial dos Patrimônios Naturais, Culturais e Mistos pode ser acessada no site da UNESCO. Neste ainda é possível identificar quais deles estão em perigo.
            </p>
            <p className="text-patrimonio">
                <a href="https://whc.unesco.org/en/list/">
                    <u>
                        https://whc.unesco.org/en/list/
                    </u>
                </a>
            </p>
            <p className="text-patrimonio">
                As guerras, a poluição, o turismo descontrolado, deterioração grave dos materiais ou da estrutura, além de problemas naturais tais como terremotos, furacões, são alguns dos problemas que podem comprometer a integridade dos Patrimônios.
            </p>
            <p className="text-patrimonio">
                Em geral, cabe aos estados participantes da Convenção informar ao Comitê uma eventual ameaça, mas qualquer organização, empresa, grupo ou indivíduo também pode alertar diretamente, se perceber algum perigo iminente.
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h2 className="subtitle-patrimonio" id="part-3">
                    Quem é o responsável por essa lista indicativa inicial no Brasil?
                </h2>
            <p className="text-patrimonio">
                Cada país tem o seu órgão encarregado para fazer as indicações. No caso do Brasil, essa tarefa cabe ao IPHAN - Instituto do Patrimônio Histórico e Artístico Nacional e ao ICMBio - Instituto Chico Mendes de Conservação da Biodiversidade, que seleciona os sítios naturais. No site do Instituto é possível ter acesso á lista indicativa atual, que inclui bens tombados como Patrimônio Cultural Brasileiro:
                <u>
                    <a href="http://portal.iphan.gov.br/pagina/detalhes/813">
                        http://portal.iphan.gov.br/pagina/detalhes/813
                    </a>
                </u>
                <u>
                    .
                </u>
            </p>
            <p className="text-patrimonio">
                Um exemplo conhecido de grande parte dos Brasileiros e que teve aprovação recente é a charmosa Paraty. Desde 2009, o Brasil havia apresentado a cidade como candidata, porém, naquele ano, ela acabou rejeitada durante a última etapa de avaliação. Anos mais tarde, foi realizada nova tentativa, desta vez englobando parte do território de Angra dos Reis e Ubatuba. Em julho de 2019, enfim, o sítio “Paraty e Ilha Grande: cultura e biodiversidade” foi incluído na lista de Patrimônio Mundial da Humanidade e classificado como misto, patrimônio Cultural e Natural. Paraty também faz parte da Rede de Cidades Criativas da UNESCO* desde 2017, como cidade da gastronomia.
            </p>
            <p className="text-patrimonio">
                <p>
                    * a Rede de Cidades Criativas da UNESCO (UNESCO Creative Cities Network - UCCN) foi criada em 2014 e tem como objetivo fortalecer a cooperação entre as cidades que reconheceram a criatividade como um fator estratégico para o desenvolvimento sustentável em relação aos aspectos econômicos, sociais, culturais e ambientais. A Rede hoje abrange 180 cidades em 72 países, em sete áreas criativas. Atualmente, oito cidades brasileiras fazem parte: Salvador ( música); Curitiba e Brasília (design); Santos (cinema); João Pessoa (artesanato) e Florianópolis, Belém e Paraty (gastronomia).
                </p>
            </p>
                <h2 className="subtitle-patrimonio">
                    Lista atual dos Patrimônios da Humanidade no Brasil:
                </h2>
                <h3 className="subtitle-patrimonio">
                    Patrimônios Culturais:
                </h3>
                <ul>
                <li className="text-patrimonio">
                    Cidade Histórica de Ouro Preto
                </li>
                <li className="text-patrimonio">
                    Centro Histórico da Cidade de Olinda
                </li>
                <li className="text-patrimonio">
                    Missões jesuítas dos guaranis: San Ignacio Mini, Santa Ana, Nossa Senhora do Loreto e Prefeito de Santa Maria (Argentina), Ruínas de São Miguel das Missões (Brasil)
                </li>
                <li className="text-patrimonio">
                    Centro Histórico de Salvador da Bahia
                </li>
                <li className="text-patrimonio">
                    Santuário do Bom Jesus do Congonhas
                </li>
                <li className="text-patrimonio">
                    Brasília
                </li>
                <li className="text-patrimonio">
                    Parque Nacional Serra da Capivara
                </li>
                <li className="text-patrimonio">
                    Centro Histórico de São Luís
                </li>
                <li className="text-patrimonio">
                    Centro Histórico da Cidade de Diamantina
                </li>
                <li className="text-patrimonio">
                    Centro Histórico da Cidade de Goiás
                </li>
                <li className="text-patrimonio">
                    Praça de São Francisco, na cidade de São Cristóvão
                </li>
                <li className="text-patrimonio">
                    Rio de Janeiro: paisagens cariocas entre a montanha e o mar
                </li>
                <li className="text-patrimonio">
                    Conjunto Moderno da Pampulha
                </li>
                <li className="text-patrimonio">
                    Sítio Arqueológico do Cais do Valongo
                </li>
                </ul>
            

                <h2 className="subtitle-patrimonio">
                    Patrimônios Naturais:
                </h2>
            <p className="text-patrimonio">
                Parque Nacional do Iguaçu
            </p>
            <p className="text-patrimonio">
                Reservas do Sudeste da Mata Atlântica
            </p>
            <p className="text-patrimonio">
                Reservas da Costa Atlântica da Costa do Descobrimento
            </p>
            <p className="text-patrimonio">
                Complexo de Conservação da Amazônia Central
            </p>
            <p className="text-patrimonio">
                Área de Conservação do Pantanal
            </p>
            <p className="text-patrimonio">
                Ilhas Atlânticas Brasileiras: Reservas de Fernando de Noronha e Atol das Rocas
            </p>
            <p className="text-patrimonio">
                Áreas Protegidas do Cerrado: Parques Nacionais da Chapada dos Veadeiros e das Emas
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h2 className="subtitle-patrimonio">
                    Patrimônios Mistos:
                </h2>
            <p className="text-patrimonio">
                Paraty e Ilha Grande - Cultura e Biodiversidade
            </p>
            <p className="text-patrimonio">
                Outro sítio brasileiro que recebeu o título de Patrimônio Mundial recentemente, em 2018, foi o Cais do Valongo, porta de entrada dos escravos nas Américas e que havia sido descoberto em 2011, durante as obras da Zona Portuária do Rio de Janeiro.
            </p>
            <p className="text-patrimonio">
                Ficou curioso sobre o processo? O manual de Preparação de Candidaturas para o Patrimônio Mundial está disponível online:
            </p>
            <p className="text-patrimonio">
                <a href="http://portal.iphan.gov.br/uploads/ckfinder/arquivos/Prepara%C3%A7%C3%A3o%20de%20candidaturas%20para%20o%20Patrim%C3%B4nio%20Mundial.pdf">
                    <u>
                        http://portal.iphan.gov.br/uploads/ckfinder/arquivos/Prepara%C3%A7%C3%A3o%20de%20candidaturas%20para%20o%20Patrim%C3%B4nio%20Mundial.pdf
                    </u>
                </a>
            </p>
            <p className="text-patrimonio">
                O Iphan também responde pela conservação, salvaguarda e monitoramento dos bens culturais nacionais que constam na Lista de Patrimônio Mundial da UNESCO, além dos demais que fazem parte do Patrimônio Cultural Brasileiro.
            </p>
            <p className="text-patrimonio">
                
            </p>
            <p className="text-patrimonio">
                Os patrimônios precisam ser preservados, mas isso não significa que tenham que estar isolados, segregados da população, antes o contrário. Mantendo-se sua integridade e autenticidade histórica, eles precisam ser conhecidos e devem fazer parte da vida das pessoas. O turismo para esses locais é incentivado, assim como atividades culturais que reforcem suas características, divulguem e perpetuem tradições, costumes e aspectos únicos das regiões e tradições a que esses patrimônios estão ligados.
            </p>
            <p className="text-patrimonio">
                Hoje, não apenas lugares especiais podem ser distinguidos como patrimônios. O Frevo dominante em Olinda e Recife, o Bumba Meu Boi do Maranhão, as rodas de Capoeira espalhadas pelo Brasil e outros são também reconhecidos pela Unesco como
                <a href="#part-4">
                    Patrimônios Imateriais da Humanidade
                </a>
                e são apenas alguns exemplos da nossa cultura popular. Na prática, essa riqueza é muito mais ampla, e pode ser percebida em diferentes cantos do país – desde a menor e mais simples comunidade à mais moderna metrópole. Uma c ultura que vem sendo construída e transformada ao longo de nossa história como nação, traçando os contornos do que chamamos de alma brasileira.
            </p>
            <p className="text-patrimonio">
                Se cultura é fundamental na construção da identidade de um povo, poderíamos dizer que esses patrimônios contêm parte do nosso DNA. Aproximarmo-nos deles é, de certa forma, entrar em contado com uma parte importante de nós mesmos.
            </p>
                <h2 className="subtitle-patrimonio" id="part-4">
                    Patrimônio Cultural Imaterial da Humanidade
                </h2>
            <p className="text-patrimonio">
                Além dos bens físicos – como cidades ou conjuntos arquitetônicos – desde 2003 outros tipos de criações passaram a ser distinguidas como Patrimônios Culturais Imateriais da Humanidade. Essa classificação tem como base a Convenção para a Salvaguarda do Patrimônio Cultural Imaterial, adotada pela UNESCO - Organização das Nações Unidas para a Educação, a Ciência e a Cultura em 2003 e ratificada pelo Brasil em 2006. A lista desses patrimônios é composta de práticas, representações, expressões, conhecimentos e técnicas que comunidades, grupos e indivíduos reconhecem como parte integrante de seu Patrimônio Cultural, incluindo os respectivos instrumentos, objetos, artefatos e lugares culturais.
            </p>
            <p className="text-patrimonio">
                O Patrimônio Cultural Imaterial é transmitido de geração a geração, sendo constantemente recriado pelas comunidades e grupos em função de seu ambiente, de sua interação com a natureza e de sua história, gerando um sentimento de identidade e continuidade, valorizando assim a diversidade cultural e a criatividade humana. Atualmente o Brasil tem sete manifestações\ práticas constantes da lista:
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h2 className="subtitle-patrimonio">
                    Patrimônio Cultural Imaterial da Humanidade no Brasil
                </h2>
            <p className="text-patrimonio">
                Samba de Roda no Recôncavo Baiano
            </p>
            <p className="text-patrimonio">
                Arte Kusiwa – Pintura Corporal e Arte Gráfica Wajãpi
            </p>
            <p className="text-patrimonio">
                Frevo: Expressão Artística do Carnaval de Recife
            </p>
            <p className="text-patrimonio">
                Círio de Nossa Senhora de Nazaré
            </p>
            <p className="text-patrimonio">
                Roda de Capoeira
            </p>
            <p className="text-patrimonio">
                Complexo Cultural do Bumba meu boi do Maranhão
            </p>
            <p className="text-patrimonio">
                veja aqui alguns exemplos de nosso Patrimônio Imaterial:
            </p>
                <h2 className="subtitle-patrimonio">
                    Samba de roda, patrimônio da humanidade - redes culturais
                </h2>
            <p className="text-patrimonio">
                <a href="https://www.youtube.com/watch?v=g94WjK9WOew">
                    <u>
                        https://www.youtube.com/watch?v=g94WjK9WOew
                    </u>
                </a>
            </p>
                <h2 className="subtitle-patrimonio">
                    Frevo do Recife é Patrimônio Cultural Imaterial - TeleSur pt
                </h2>
            <p className="text-patrimonio">
                <a href="https://www.youtube.com/watch?v=ubH6zEGZ4dY">
                    <u>
                        https://www.youtube.com/watch?v=ubH6zEGZ4dY
                    </u>
                </a>
            </p>
                <h2 className="subtitle-patrimonio">
                    Círio de Nazaré:
                </h2>
            <p className="text-patrimonio">
                <a href="https://ciriodenazare.com.br/site/">
                    <u>
                        https://ciriodenazare.com.br/site/
                    </u>
                </a>
            </p>
            <p className="text-patrimonio">
                
            </p>
            <p className="text-patrimonio">
                
            </p>
                <h2 className="subtitle-patrimonio">
                    Referências:
                </h2>
            <p className="text-patrimonio">
                World Heritage List (Lista de Patrimônios Mundiais)
            </p>
            <p className="text-patrimonio">
                <a href="https://whc.unesco.org/en/list/">
                    <u>
                        https://whc.unesco.org/en/list/
                    </u>
                </a>
            </p>
            <p className="text-patrimonio">
                Lista indicativa brasileira para futuros Patrimônios da Humanidade
            </p>
            <p className="text-patrimonio">
                <a href="http://portal.iphan.gov.br/pagina/detalhes/813">
                    <u>
                        http://portal.iphan.gov.br/pagina/detalhes/813
                    </u>
                </a>
            </p>
            <p className="text-patrimonio">
                Ministério do Turismo
            </p>
            <p className="text-patrimonio">
                <a href="http://www.turismo.gov.br/">
                    <u>
                        http://www.turismo.gov.br/
                    </u>
                </a>
            </p>
            <p className="text-patrimonio">
                Instituto do Patrimônio Histórico e Artístico Nacional
            </p>
            <p className="text-patrimonio">
                <a href="http://portal.iphan.gov.br/">
                    <u>
                        http://portal.iphan.gov.br
                    </u>
                </a>
            </p>
            <p className="text-patrimonio">
                Retratos - Cidades brasileiras e Patrimônios da Humanidades
            </p>
            <p className="text-patrimonio">
                <a href="https://www.ipea.gov.br/desafios/index.php?option=com_content&amp;view=article&amp;id=2320:catid=28&amp;Itemid=23">
                    <u>
                        https://www.ipea.gov.br/desafios/index.php?option=com_content&amp;view=article&amp;id=2320:catid=28&amp;Itemid=23
                    </u>
                </a>
            </p>
            <p className="text-patrimonio">
                Estado de Minas - Brasil tenta, pela segunda vez, transformar Paraty em Patrimônio da Humanidade
            </p>
            <p className="text-patrimonio">
                <a href="https://www.em.com.br/app/noticia/nacional/2019/07/01/interna_nacional,1066081/brasil-tenta-pela-segunda-vez-transformar-paraty-em-patrimonio-da-hu.shtml">
                    <u>
                        https://www.em.com.br/app/noticia/nacional/2019/07/01/interna_nacional,1066081/brasil-tenta-pela-segunda-vez-transformar-paraty-em-patrimonio-da-hu.shtml
                    </u>
                </a>
            </p>
            <p className="text-patrimonio">
                Ministério das Relações Exteriores - Inscrição de Paraty na lista do Patrimônio Mundial da UNESCO
            </p>
            <p className="text-patrimonio">
                <a href="http://www.itamaraty.gov.br/pt-BR/notas-a-imprensa/20587-inscricao-de-paraty-na-lista-do-patrimonio-mundial-da-unesco">
                    <u>
                        http://www.itamaraty.gov.br/pt-BR/notas-a-imprensa/20587-inscricao-de-paraty-na-lista-do-patrimonio-mundial-da-unesco
                    </u>
                </a>
            </p>
            <p className="text-patrimonio">
                Patrimônio Mundial no Brasil e o Desenvolvimento Sustentável (UNESCO Portuguese)
            </p>
            <p className="text-patrimonio">
                <a href="https://www.youtube.com/watch?v=EG1fE82vKQg">
                    <u>
                        https://www.youtube.com/watch?v=EG1fE82vKQg
                    </u>
                </a>
            </p>
            <p className="text-patrimonio">
                Pesquisa e organização: Creuza Gravina
            </p>
                </div>
            </Container>
        </div>
    
    )
    }
}
export default Patrimonio