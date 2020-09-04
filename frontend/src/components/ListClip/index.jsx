import React, { useState, useEffect } from 'react';
import CardClip from '../CardClip';
import BarPagination from '../BarPagination';
import { Container, List, ListItem } from './styles';
import strapi from '../../services/strapi.js';

export default function ListClip() {
  const [clips, setClips] = useState([]);
  const [start, setStart] = useState(0);

  function goPage(value) {
    if ((start+value) < 0 || clips.length < 6) return;
    setStart(start + value);
  }
  
  useEffect(() => { 
    strapi.get(`/clippings?_start=${start}&_limit=6&_sort=date:DESC`)
      .then(({data}) => setClips(data));
  }, [start]);

  return (
    <Container>
      <List>
        {
          clips.map(item => (
            <ListItem key={item.id}>
              <CardClip clip={item} />
            </ListItem>
          ))
        }
      </List>
      <BarPagination 
        onBack={() => goPage(-6)} 
        onNext={() => goPage(6)} 
      />
    </Container>
  )
}
