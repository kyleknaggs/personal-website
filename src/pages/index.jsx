import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { HREF } from '../utility/constants';
import Layout from '../components/layout';

const StyledMain = styled.main`
  min-height: calc(100vh - var(--menu-height));
  padding-right: 9vw;
  padding-bottom: 9vw;
  padding-left: 9vw;
  @media screen and (max-width: 1024px) {
    padding-right: 13.5vw;
    padding-bottom: 13.5vw;
    padding-left: 13.5vw;
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

const StyledLink = styled(Link)`
  color: hsl(0, 0%, 20%);
`;

const StyledResumeLink = styled(StyledLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 195px;
  height: 65px;
  background: hsl(0, 0%, 20%);
  color: hsl(0, 0%, 100%);
  font-family: Gill Sans Nova SemiBold;
  text-transform: uppercase;
  text-decoration: none;
`;

export default function Home() {
  const HERO_TEXT = 'Kyle Knaggs is a Software Developer from Trinidad and Tobago obsessed with making great user experiences a reality.';
  const KEY_SKILLS_TEXT = 'Key Skills: JavaScript, React, Redux, ES6, Jest, Flow, Git/Mercurial, Bootstrap, Styled-Components, HTML, CSS, Sketch and Adobe Creative Suite.';
  const { ONLINE_ORDERING_PLATFORM, FIREFOX_DEBUGGER, RESUME } = HREF;

  const body = (
    <span>
      <p>
        Selected Work:&nbsp;
        <StyledLink to={ONLINE_ORDERING_PLATFORM}>
          Online Ordering Platform for the largest mattress manufacturer in the Caribbean
        </StyledLink>
        &nbsp;and an&nbsp;
        <StyledLink to={FIREFOX_DEBUGGER}>
          Open Source Contributions to the Firefox Debugger
        </StyledLink>
        .
      </p>
      <p>{KEY_SKILLS_TEXT}</p>
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
            <StyledResumeLink to={RESUME}>View Resume</StyledResumeLink>
          </StyledRow>
        </StyledDiv>
      </StyledMain>
    </Layout>
  );
}
