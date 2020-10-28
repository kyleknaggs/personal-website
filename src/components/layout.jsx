import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { HREF } from '../utility/constants';
import './layout.css';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--menu-height);
  padding-left: 4vw;
  padding-right: 4vw;
  background-color: lightgrey;
`;

export default function Layout({ children }) {
  const { INDEX, LINKEDIN, GITHUB } = HREF;

  return (
    <div>
      <StyledHeader>
        <div>
          <Link href={INDEX}>Kyle Knaggs</Link>
        </div>
        <div>
          <Link href={LINKEDIN}>LinkedIn</Link>
          <Link href={GITHUB}>GitHub</Link>
        </div>
      </StyledHeader>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
