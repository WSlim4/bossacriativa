import React from 'react';
import PropTypes from 'prop-types';
import { Section, Content } from './styles';

export default function Box({ title, children, p, pt, pb, pl, pr }) {
  return (
    <Section>
      <h2>{ title }</h2>
      <Content p={p} pt={pt} pb={pb} pl={pl} pr={pr}>
        { children }
      </Content>
    </Section>
  );
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  p: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
};