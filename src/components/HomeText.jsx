import React from 'react';
import styled from 'styled-components';
import { HREF } from '../utility/constants';
import BodyLink from './BodyLink';

const StyledP = styled.p`
  @media screen and (max-width: 1080px) {
    padding-bottom: 17px;
  }
`;

export default function BodyText() {
  const KEY_SKILLS_TEXT = 'Key Skills: JavaScript, React, Redux, ES6, Jest, Flow, Git/Mercurial, Bootstrap, Styled-Components, HTML, CSS, Sketch and Adobe Creative Suite.';
  const { ONLINE_ORDERING_PLATFORM, FIREFOX_DEBUGGER } = HREF;

  return (
    <span>
      <StyledP>
        Selected Work:&nbsp;
        <BodyLink to={ONLINE_ORDERING_PLATFORM}>
          Online Ordering Platform for the largest mattress manufacturer in the Caribbean
        </BodyLink>
        &nbsp;and an&nbsp;
        <BodyLink to={FIREFOX_DEBUGGER} external>
          Open Source Contributions to the Firefox Debugger
        </BodyLink>
        .
      </StyledP>
      <StyledP>{KEY_SKILLS_TEXT}</StyledP>
    </span>
  );
}
