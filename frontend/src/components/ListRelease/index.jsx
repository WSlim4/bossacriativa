import React, { useState, useEffect } from 'react';
import CardRelease from '../CardRelease';
import BarPagination from '../BarPagination';
import styles from './styles';
import strapi from '../../services/strapi';

export default function ListRelease() {
  const [releases, setReleases] = useState([]);
  const [start, setStart] = useState(0);

  function goPage(value) {
    if ((start+value) < 0 || releases.length < 6) return;
    setStart(start + value);
  }

  useEffect(() => { 
    strapi.get(`/releases?_start=${start}&_limit=6&_sort=date:DESC`)
      .then(({data}) => setReleases(data));
  }, [start]);

  return (
    <div style={styles.container}>
      <ul style={styles.list}>
        {
          releases.map(item => (
            <li key={item.id} style={styles.item}>
              <CardRelease release={item} />
            </li>
          ))
        }
      </ul>
      <BarPagination 
        onBack={() => goPage(-6)} 
        onNext={() => goPage(6)} 
      />
    </div>
  )
}
