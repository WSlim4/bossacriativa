import React from 'react';
import PropTypes from 'prop-types';
import { Card, Link, Figure, Content, Title } from './styles';

export default function CardClip({ clip }) {
  const title = `${clip.title} | ${clip.date.split('-').reverse().join('.').substring(0, 5)}`;
  const image = `https://admin.bossacriativa.art.br${clip.cover ? clip.cover.url : '' }`;

  return (
    <Card>
      <Link href={clip.link}>
        <Figure>
          <img 
            src={clip.cover ? image : require('~/assets/Ico-clipping.jpg')} 
            alt={clip.title} 
          />
        </Figure>
        <Content>
          <Title>{title}</Title>
          <p>{clip.intro}</p>
        </Content>
      </Link>
    </Card>
  )
}

CardClip.propTypes = {
  clip: PropTypes.shape({
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.number,
    intro: PropTypes.string,
    link: PropTypes.string.isRequired,
  }).isRequired
}