import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './styles';

export default function CardPartner({ partner, width, height }) {
  return (
    <Card>
      <a href={partner.link} target="_blank">
        <img 
          src={partner.logo} 
          alt={partner.name} 
          height={height} 
          width={width} 
        />
      </a>
    </Card>
  )
}

CardPartner.propTypes = {
  partner: {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    logo: PropTypes.shape().isRequired
  },
  height: PropTypes.string,
  width: PropTypes.string
}

CardPartner.defaultProps = {
  height: '100%',
  width: '100%'
}