import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH2 = styled.h2`
  font-size: 36px;
  width: 100%;

  @media (min-width: 576px) {
    font-size: 64px;
  }

  @media (min-width: 1200px) {
    width: 87.5%;
  }
`;

export default function H2({ text }) {
  return (
    <StyledH2>{text}</StyledH2>
  );
}

H2.propTypes = {
  text: PropTypes.string.isRequired,
};
