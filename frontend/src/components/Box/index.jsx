import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

export default function Box({ title, children }) {
  return (
    <section style={styles.box}>
      <h2 style={styles.title}>{ title }</h2>
      <div style={styles.content}>
        { children }
      </div>
    </section>
  );
};

Box.propTypes = {
  title: PropTypes.string.isRequired
}