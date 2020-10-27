import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './layout.css';

const StyledHeader = styled.header`
  height: var(--menu-height);
  background-color: grey;
`;

export default function Layout({ children }) {
  return (
    <div>
      <StyledHeader />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
