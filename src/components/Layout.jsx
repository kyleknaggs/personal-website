import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HomeLink from './Links/HomeLink';
import SocialLink from './Links/SocialLink';
import { HREF } from '../utility/constants';
import './Layout.css';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4vw;
  padding-right: 4vw;
  height: var(--menu-height-lg);

  @media screen and (max-width: 1024px) {
    height: var(--menu-height-md);
  }

  @media screen and (max-width: 640px) {
    height: var(--menu-height-sm);
  }
`;

const StyledFlexDiv = styled.div`
  display: flex;
`;

const StyledJustifyContentDiv = styled(StyledFlexDiv)`
  justify-content: center;
`;

export default function Layout({ children }) {
  const { INDEX } = HREF;

  return (
    <Fragment>
      <Helmet>
        <title>Kyle Knaggs | Software Developer</title>
        <meta name="description" content="A design-oriented Software Developer obsessed with making great user interfaces a reality." />
      </Helmet>
      <StyledHeader>
        <div>
          <HomeLink to={INDEX}>Kyle Knaggs</HomeLink>
        </div>
        <StyledFlexDiv>
          <SocialLink site="LinkedIn" />
          <SocialLink site="GitHub" />
        </StyledFlexDiv>
      </StyledHeader>
      <StyledJustifyContentDiv>
        {children}
      </StyledJustifyContentDiv>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
