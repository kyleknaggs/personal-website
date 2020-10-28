import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HomeLink from './HomeLink';
import SocialLink from './SocialLink';
import { HREF } from '../utility/constants';
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

const StyledDiv = styled.div`
  display: flex;
`;

export default function Layout({ children }) {
  const { INDEX } = HREF;

  return (
    <div>
      <StyledHeader>
        <div>
          <HomeLink to={INDEX}>Kyle Knaggs</HomeLink>
        </div>
        <StyledDiv>
          <SocialLink site="LinkedIn" />
          <SocialLink site="GitHub" />
        </StyledDiv>
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
