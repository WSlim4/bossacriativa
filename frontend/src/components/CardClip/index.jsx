import React from 'react';
import PropTypes from 'prop-types';
import { Card, Link, Figure, Content, Title } from './styles';

export default function CardClip({ clip }) {
  return (
    <Card>
      <Link href={clip.link}>
        <Figure>
          <img src={clip.cover} alt={clip.title} />
        </Figure>
        <Content>
          <Title>{`${clip.title} | ${clip.date}`}</Title>
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