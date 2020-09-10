import React, { useState, useEffect } from 'react';
// import './Midia.css'
import { Container, Row, Col } from 'react-bootstrap';
import Box from '../../components/Box';
import CardPhoto from '../../components/CardPhoto';
import CardTestimony from '../../components/CardTestimony';
import strapi from '../../services/strapi';
import styles from './styles';

export default function Midia() {
  const [midias, setMidias] = useState([]);
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    strapi.get(`/galerias?_start=${viewed}&_limit=12&_sort=created_at:desc`)
      .then(({data}) => setMidias([...midias, ...data]));
  }, [viewed]);

  return(
    <Box title="Galeria" mt={50}>
      <Container fluid>
        <Row style={styles.row}>
          {
            midias.map((item) => (
              <Col className="col-12 col-md-6 col-xl-4">
                {
                  item.depoimento
                    ? <CardTestimony data={item} />
                    : <CardPhoto data={item} />
                }
              </Col>
            ))
          }
          <Col className="col-12">
            <button onClick={() => setViewed(viewed+12)}>Carregar mais</button>
          </Col>
        </Row>
      </Container>
    </Box>
    // <div className="gallery-container">
    //   <h3 className="gallery-title">Galeria</h3>
    //   <div className="gallery">
    //     <Masonry
    //         breakpointCols={3}
    //         className="my-masonry-grid"
    //         columnClassName="my-masonry-grid_column">
    //         {items}
    //     </Masonry>
    //   </div>
    // </div>
  )
};