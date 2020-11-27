import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMain = styled.main`
  max-width: 1920px;
  min-height: calc(100vh - var(--menu-height-lg));
  padding: 0vw 10.5vw;
  animation: fadeIn ease-in 2s;
  -webkit-animation: fadeIn ease-in 2s;
  -moz-animation: fadeIn ease-in 2s;
  -o-animation: fadeIn ease-in 2s;
  -ms-animation: fadeIn ease-in 2s;

  @media screen and (max-width: 1024px) {
    min-height: calc(100vh - var(--menu-height-md));
    padding 0vw 15vw;
  }

  @media screen and (max-width: 640px) {
    min-height: calc(100vh - var(--menu-height-sm));
  }
`;

export default function Main({ children }) {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
