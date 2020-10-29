import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ImGithub, ImLinkedin2 } from 'react-icons/im';
import { Link } from 'gatsby';
import { HREF } from '../utility/constants';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(0, 0%, 20%);
  height: 32px;
  width: 32px;
`;

export default function SocialLink({ site }) {
  const { LINKEDIN, GITHUB } = HREF;

  if (site === 'GitHub') {
    return (
      <StyledLink to={GITHUB}>
        <ImGithub />
      </StyledLink>
    );
  }

  return (
    <StyledLink to={LINKEDIN}>
      <ImLinkedin2 />
    </StyledLink>
  );
}

SocialLink.propTypes = {
  site: PropTypes.string.isRequired,
};
