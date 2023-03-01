import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Vertically center content on desktop devices & allow the content to extend
// vertically down the page on smaller devices
const StyledMain = styled.main`
  max-width: 1920px;
  animation: fadeIn ease-in 5s;
  -webkit-animation: fadeIn ease-in 5s;
  -moz-animation: fadeIn ease-in 5s;
  -o-animation: fadeIn ease-in 5s;
  -ms-animation: fadeIn ease-in 5s;
  min-height: calc(100vh - var(--menu-height-sm));
  padding 6vh 15vw;

  @media (min-width: 576px) {
    min-height: calc(100vh - var(--menu-height-md));
  }

  @media (min-width: 1200px) {
    min-height: calc(100vh - var(--menu-height-lg));
    padding: 0vh 10.5vw;
    display: flex;
    align-items: center;
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
