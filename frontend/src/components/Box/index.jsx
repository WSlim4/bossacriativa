import React from 'react';
import PropTypes from 'prop-types';
import { Section, Content } from './styles';

export default function Box({ title, children, mt }) {
  return (
    <Section>
      <h2>{ title }</h2>
      <Content mt={mt}>
        {children}
      </Content>
    </Section>
  );
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  mt: PropTypes.number,
};

Box.defaultProps = {
  mt: 0
};