import React from 'react';
import styled from 'styled-components';
import { HREF } from '../utility/constants';
import Layout from '../components/Layout';
import HomeText from '../components/HomeText';
import ButtonLink from '../components/Links/ButtonLink';

const StyledMain = styled.main`
  min-height: calc(100vh - var(--menu-height-lg));
  padding-left: 9vw;
  padding-right: 9vw;

  @media screen and (max-width: 1024px) {
    min-height: calc(100vh - var(--menu-height-md));
    padding-left: 13.5vw;
    padding-right: 13.5vw;
    padding-top: 5vw;
    padding-bottom: 5vw;
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

export default function Home() {
  const HERO_TEXT = 'Kyle Knaggs is a Software Developer from Trinidad and Tobago obsessed with making great user experiences a reality.';
  const { RESUME } = HREF;

  return (
    <Layout>
      <StyledMain>
        <StyledDiv>
          <StyledH1>{HERO_TEXT}</StyledH1>
          <StyledRow>
            <HomeText />
          </StyledRow>
          <StyledRow>
            <ButtonLink to={RESUME}>View Resume</ButtonLink>
          </StyledRow>
        </StyledDiv>
      </StyledMain>
    </Layout>
  );
}
