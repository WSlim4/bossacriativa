import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Link, Figure, Content, Title } from './styles';

import './styles.css'

export default function CardClip({ clip }) {

  const data = clip.date

  return (
    <article className="clip-content">
      <div className="image-box">
        <a href={`${clip.link}`} target="_blank"><img className="clip-image" src={`https://admin.bossacriativa.art.br${clip.cover.url}`}></img></a>
      </div>
      <div style={{marginLeft: '1em'}}>
      <a href={`${clip.link}`} target="_blank" id="clip-link">
        <h5>{clip.title} | {data.split('-').reverse().join('.')}</h5>
        </a>
        <p style={{fontSize: '0.7em'}}>
          {clip.intro}
        </p>
      </div>
    </article>
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