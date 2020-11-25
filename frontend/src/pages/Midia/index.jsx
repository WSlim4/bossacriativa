import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import CardVideo from '~/components/CardVideo/index';
import Box from '../../components/Box';
import CardPhoto from '../../components/CardPhoto';
import CardTestimony from '../../components/CardTestimony';
import Page from '../../components/Page';
import strapi from '../../services/strapi';
import './Midia.css';

export default function Midia() {
  const [midias, setMidias] = useState([]);
  const [viewed, setViewed] = useState(0);

  useEffect(() => {
    strapi.get(`/galerias?_start=${viewed}&_sort=created_at:desc`)
      .then(({data}) => setMidias([...midias, ...data]));
  }, [viewed]);

  return(
    <Page>
      <Box title="Galeria" p={15}>
        <Masonry
          breakpointCols={{ default: 3, 700: 2, 500: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {
            midias.map((item) => (
              !!item.video_url 
                ? <CardVideo data={item} />
                : item.depoimento
                  ? <CardTestimony data={item} />
                  : <CardPhoto data={item} />
            ))
          }
        </Masonry>
        {/* <Container fluid>
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
        </Container> */}
      </Box>
    </Page>
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