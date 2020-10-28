import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HREF } from '../utility/constants';
import BodyLink from './BodyLink';
import './Layout.css';

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
          <BodyLink to={INDEX}>Kyle Knaggs</BodyLink>
        </div>
        <div>
          <BodyLink to={LINKEDIN}>LinkedIn</BodyLink>
          <BodyLink to={GITHUB}>GitHub</BodyLink>
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
