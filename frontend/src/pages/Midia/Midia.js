import * as React from 'react';
import Masonry from 'react-masonry-css'
import './Midia.css'

import nad_1 from '../../assets/galeria/nad_1.jpg'
import nad_2 from '../../assets/galeria/nad_2.jpg'
import nad_3 from '../../assets/galeria/nad_3.jpg'
import nad_4 from '../../assets/galeria/nad_4.jpg'
import nad_5 from '../../assets/galeria/nad_5.jpg'
import nad_6 from '../../assets/galeria/nad_6.jpg'
import nad_7 from '../../assets/galeria/nad_7.jpg'
import nad_8 from '../../assets/galeria/nad_8.jpg'
import nad_9 from '../../assets/galeria/nad_9.jpg'
import nad_10 from '../../assets/galeria/nad_10.jpg'

import raffa_1 from '../../assets/galeria/raffa_1.jpg'
import raffa_2 from '../../assets/galeria/raffa_2.jpg'
import raffa_3 from '../../assets/galeria/raffa_3.jpg'
import raffa_4 from '../../assets/galeria/raffa_4.jpg'
import raffa_5 from '../../assets/galeria/raffa_5.jpg'
import raffa_6 from '../../assets/galeria/raffa_6.jpg'
import raffa_7 from '../../assets/galeria/raffa_7.jpg'
import raffa_8 from '../../assets/galeria/raffa_8.jpg'
import raffa_9 from '../../assets/galeria/raffa_9.jpg'
import raffa_10 from '../../assets/galeria/raffa_10.jpg'
import raffa_11 from '../../assets/galeria/raffa_11.jpg'
import raffa_12 from '../../assets/galeria/raffa_12.jpg'
import raffa_13 from '../../assets/galeria/raffa_13.jpg'
import raffa_14 from '../../assets/galeria/raffa_14.jpg'
import raffa_15 from '../../assets/galeria/raffa_15.jpg'
import raffa_16 from '../../assets/galeria/raffa_16.jpg'
import raffa_17 from '../../assets/galeria/raffa_17.jpg'

import walda_1 from '../../assets/galeria/walda_1.jpg'
import walda_2 from '../../assets/galeria/walda_2.jpg'
import walda_3 from '../../assets/galeria/walda_3.jpg'
import walda_4 from '../../assets/galeria/walda_4.jpg'
import walda_5 from '../../assets/galeria/walda_5.jpg'
import walda_6 from '../../assets/galeria/walda_6.jpg'
import walda_7 from '../../assets/galeria/walda_7.jpg'
import walda_8 from '../../assets/galeria/walda_8.jpg'
import walda_9 from '../../assets/galeria/walda_9.jpg'
import walda_10 from '../../assets/galeria/walda_10.jpg'
import walda_11 from '../../assets/galeria/walda_11.jpg'
import walda_12 from '../../assets/galeria/walda_12.jpg'

import tim from '../../assets/galeria/tim_rescala_depoimento.jpg'
import catia from '../../assets/galeria/catia_de_franca_depoimento.jpg'
import maria from '../../assets/galeria/maria_eugenia_tita_depoimento.jpg'
 
var items = [
    {id: 1, src: nad_1 },
    {id: 2, src: nad_2 },
    {id: 3, src: nad_3 },
    {id: 4, src: nad_4 },
    {id: 5, src: nad_5 },
    {id: 6, src: nad_6 },
    {id: 7, src: nad_7 },
    {id: 8, src: nad_8 },
    {id: 9, src: nad_9 },
    {id: 10, src: nad_10 },
    {id: 11, src: raffa_1 },
    {id: 12, src: raffa_2 },
    {id: 13, src: raffa_3 },
    {id: 14, src: raffa_4 },
    {id: 15, src: raffa_5 },
    {id: 16, src: raffa_6 },
    {id: 17, src: raffa_7 },
    {id: 18, src: raffa_8 },
    {id: 19, src: raffa_9 },
    {id: 20, src: raffa_10 },
    {id: 21, src: raffa_11 },
    {id: 22, src: raffa_12 },
    {id: 23, src: raffa_13 },
    {id: 24, src: raffa_14 },
    {id: 25, src: raffa_15 },
    {id: 26, src: raffa_16 },
    {id: 27, src: raffa_17 },
    {id: 28, src: walda_1 },
    {id: 29, src: walda_2 },
    {id: 30, src: walda_3 },
    {id: 31, src: raffa_17 },
    {id: 32, src: walda_1 },
    {id: 33, src: walda_2 },
    {id: 34, src: walda_3 },
    {id: 35, src: walda_4 },
    {id: 36, src: walda_5 },
    {id: 37, src: walda_6 },
    {id: 38, src: walda_7 },
    {id: 39, src: walda_8 },
    {id: 40, src: walda_9 },
    {id: 41, src: walda_10 },
    {id: 42, src: walda_11 },
    {id: 43, src: walda_12 },
    {id: 44, src: tim },
    {id: 45, src: catia },
    {id: 46, src: maria },
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