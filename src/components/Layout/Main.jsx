import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMain = styled.main`
  max-width: 1920px;
  animation: fadeIn ease-in 2.5s;
  -webkit-animation: fadeIn ease-in 2.5s;
  -moz-animation: fadeIn ease-in 2.5s;
  -o-animation: fadeIn ease-in 2.5s;
  -ms-animation: fadeIn ease-in 2.5s;
  min-height: calc(100vh - var(--menu-height-sm));
  padding 0vw 15vw;

  @media (min-width: 576px) {
    min-height: calc(100vh - var(--menu-height-md));
  }

  @media (min-width: 1200px) {
    min-height: calc(100vh - var(--menu-height-lg));
    padding: 0vw 10.5vw;
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
