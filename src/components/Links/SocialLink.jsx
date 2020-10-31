import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ImGithub, ImLinkedin2 } from 'react-icons/im';
import { HREF } from '../../utility/constants';

const StyledA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(0, 0%, 20%);
  height: 32px;
  width: 32px;
  
  :hover {
    color: #000;
  }
`;

export default function SocialLink({ site }) {
  const { LINKEDIN, GITHUB } = HREF;

  if (site === 'GitHub') {
    return (
      <StyledA href={GITHUB} target="_blank" rel="noopener noreferrer">
        <ImGithub />
      </StyledA>
    );
  }

  return (
    <StyledA href={LINKEDIN} target="_blank" rel="noopener noreferrer">
      <ImLinkedin2 />
    </StyledA>
  );
}

SocialLink.propTypes = {
  site: PropTypes.string.isRequired,
};
