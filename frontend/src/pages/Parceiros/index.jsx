import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Page from '~/components/Page';
import Box from '~/components/Box';
import CardPartner from '~/components/CardPartner';
import { Text } from './styles';

export default function Parceiros() {
  const partners = {
    support: [
      { name: 'Minas', logo: require('~/assets/apoio/minas.png'), link: 'http://www.cultura.mg.gov.br/' },
      { name: 'Brasília', logo: require('~/assets/apoio/brasilia.png'), link: 'http://www.turismo.df.gov.br/' },
      { name: 'BH', logo: require('~/assets/apoio/bh.png'), link: 'https://prefeitura.pbh.gov.br/' },
      { name: 'Ouro Preto', logo: require('~/assets/apoio/ouropreto.jpg'), link: 'https://www.ouropreto.mg.gov.br/', width: '130px' },
      { name: 'Olinda', logo: require('~/assets/apoio/olinda.png'), link: 'https://www.ouropreto.mg.gov.br/', width: '200px' },
      { name: 'Paraty', logo: require('~/assets/apoio/paraty.jpg'), link: 'http://paraty.rj.gov.br/', width: '150px' },
      { name: 'São Luis', logo: require('~/assets/apoio/saoluis.jpg'), link: 'https://www.saoluis.ma.gov.br/', width: '150px' },
      { name: 'Brasão', logo: require('~/assets/apoio/brasao.png'), link: 'https://www.saomiguel-rs.com.br/site', width: '90px' },
      { name: 'PPG', logo: require('~/assets/apoio/ppg.jpeg'), link: '#', width: '140px' },
    ],
    realization: [
      { name: 'UFRJ', logo: require('~/assets/realizacao/ufrj.png'), link: 'https://ufrj.br/', width: '150px' },
      { name: 'Escola de Música', logo: require('~/assets/escmus.png'), link: 'http://www.musica.ufrj.br/', width: '170px' },
      { name: 'Fundação José Bonifácio', logo: require('~/assets/bonif.png'), link: 'http://www.fujb.ufrj.br/', width: '170px' },
      { name: 'Funarte', logo: require('~/assets/funarte.svg'), link: 'https://www.funarte.gov.br/', width: '150px' },
      { name: 'Patria', logo: require('~/assets/realizacao/patria.jpg'), link: 'http://www.turismo.gov.br/', width: '220px' },
    ]
  };

  return (
    <Page>
      <Container>
        <Row>
          <Col className="col-12">
            <Box title="Apoio Institucional" p={15}>
              <Row>
                {
                  partners.support.map(item => (
                    <Col className="col-12 col-lg-3">
                      <CardPartner 
                        key={item.name} 
                        partner={item}
                        width={item.width}
                        height={item.height}
                      />
                    </Col>
                  ))
                }
              </Row>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
            <Box title="Realização" p={15}>
              <Row>
                {
                  partners.realization.map(item => (
                    <Col className="col-12 col-lg-3">
                      <CardPartner 
                        key={item.name} 
                        partner={item}
                        width={item.width}
                        height={item.height}
                      />
                    </Col>
                  ))
                }
              </Row>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
            <Box title="Quer Ser Nosso Parceiro?" p={15}>
              <Text>
                Que tal ter sua marca fazendo parte do Bossa Criativa - Arte de Toda Gente?
              </Text>
              <Text>
                Entre em contato pelo <b>email: marketing@musica.ufrj.br</b> e saiba como.
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </Page>
  )
}
  