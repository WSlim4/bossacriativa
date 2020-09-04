import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

export default function BarPagination({ onBack, onNext }) {
  return (
    <div style={styles.bar}>
      <button style={styles.button} onClick={onBack}>
        <img src={require('../../assets/seta.svg')} alt="Anterior" style={styles.backArrow} />
      </button>
      <button style={styles.button} onClick={onNext}>
        <img src={require('../../assets/seta.svg')} alt="Próximo" style={styles.nextArrow}/>
      </button>
    </div>
  )
}

BarPagination.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
}