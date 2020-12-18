import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH1 = styled.h1`
  width: 87.5%;
  font-size: 64px;

  @media screen and (max-width: 576px) {
    font-size: 36px;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
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
