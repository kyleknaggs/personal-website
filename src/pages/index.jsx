import React from 'react';
import styled from 'styled-components';
import { HREF } from '../utility/constants';
import Layout from '../components/Layout';
import BodyLink from '../components/BodyLink';
import ButtonLink from '../components/ButtonLink';

const StyledMain = styled.main`
  min-height: calc(100vh - var(--menu-height-lg));
  padding-right: 9vw;
  padding-left: 9vw;
  @media screen and (max-width: 1024px) {
    padding: 13.5vw;
    min-height: calc(100vh - var(--menu-height-md));
  }
  @media screen and (max-width: 640px) {
    min-height: calc(100vh - var(--menu-height-sm));
  }
`;

const StyledDiv = styled.div`
  padding: 6vw 1.5vw;
`;

const StyledRow = styled.div`
  padding-top: 17px;
  padding-bottom: 17px;
`;

const StyledH1 = styled.h1`
  width: 87.5%;
  font-size: 64px;

  @media screen and (max-width: 640px) {
    font-size: 36px;
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

const StyledP = styled.p`
  @media screen and (max-width: 1080px) {
    padding-bottom: 17px;
  }
`;

export default function Home() {
  const HERO_TEXT = 'Kyle Knaggs is a Software Developer from Trinidad and Tobago obsessed with making great user experiences a reality.';
  const KEY_SKILLS_TEXT = 'Key Skills: JavaScript, React, Redux, ES6, Jest, Flow, Git/Mercurial, Bootstrap, Styled-Components, HTML, CSS, Sketch and Adobe Creative Suite.';
  const { ONLINE_ORDERING_PLATFORM, FIREFOX_DEBUGGER, RESUME } = HREF;

  const body = (
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

  return (
    <Layout>
      <StyledMain>
        <StyledDiv>
          <StyledH1>{HERO_TEXT}</StyledH1>
          <StyledRow>
            {body}
          </StyledRow>
          <StyledRow>
            <ButtonLink to={RESUME}>View Resume</ButtonLink>
          </StyledRow>
        </StyledDiv>
      </StyledMain>
    </Layout>
  );
}
