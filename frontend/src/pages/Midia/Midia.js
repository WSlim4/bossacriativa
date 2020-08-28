import * as React from 'react';
import Masonry from 'react-masonry-css'
import './Midia.css'

import foto_1 from '../../assets/nova-galeria/Foto-1.jpg'
import foto_2 from '../../assets/nova-galeria/Foto-2.jpg'
import foto_3 from '../../assets/nova-galeria/Foto-3.jpg'
import foto_4 from '../../assets/nova-galeria/Foto-4.jpg'
import foto_5 from '../../assets/nova-galeria/Foto-5.jpg'
import foto_6 from '../../assets/nova-galeria/Foto-6.jpg'
import foto_7 from '../../assets/nova-galeria/Foto-7.jpg'
import foto_8 from '../../assets/nova-galeria/Foto-8.jpg'
import foto_9 from '../../assets/nova-galeria/Foto-9.jpg'
import foto_10 from '../../assets/nova-galeria/Foto-10.jpg'
import foto_11 from '../../assets/nova-galeria/Foto-11.jpg'
 
var items = [
    {id: 1, src: foto_1 },
    {id: 2, src: foto_2 },
    {id: 3, src: foto_3 },
    {id: 4, src: foto_4 },
    {id: 5, src: foto_5 },
    {id: 6, src: foto_6 },
    {id: 7, src: foto_7 },
    {id: 8, src: foto_8 },
    {id: 9, src: foto_9 },
    {id: 10, src: foto_10 },
    {id: 11, src: foto_11 }
  ];

  items = items.map(function(item) {
    return <div key={item.id}><img src={item.src}/></div>
  });

function Gallery() {
    return(

        <div className="gallery-container">

            <h3 className="gallery-title">Galeria</h3>

            <div className="gallery">
                <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {items}
                </Masonry>
            </div>
        </div>
    )
}
 
export default Gallery;