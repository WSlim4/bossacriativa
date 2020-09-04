import React from 'react';
import PropTypes from 'prop-types';
import { Link } from './styles';

export default function CardRelease({ release }) {
  return (
    <Link href={release.file && `https://admin.bossacriativa.art.br${release.file.url}`} download>
      {release.title}
    </Link>
  )
}

CardRelease.propTypes = {
  release: PropTypes.shape({
    title: PropTypes.string,
    file: PropTypes.string
  }).isRequired
}