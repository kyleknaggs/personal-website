import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH1 = styled.h1`
  font-size: 36px;
  width: 100%;

  @media (min-width: 576px) {
    font-size: 64px;
  }

  @media (min-width: 1200px) {
    width: 87.5%;
  }
`;

export default function H1({ text }) {
  return (
    <StyledH1>{text}</StyledH1>
  );
}

H1.propTypes = {
  text: PropTypes.string.isRequired,
};
