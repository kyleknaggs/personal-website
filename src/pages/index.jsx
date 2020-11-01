import React from 'react';
import styled from 'styled-components';
import { HREF } from '../utility/constants';
import Layout from '../components/Layout';
import Main from '../components/Main';
import HomeText from '../components/HomeText';
import ButtonLink from '../components/Links/ButtonLink';

const StyledDiv = styled.div`
  padding: 6vw 0vw;

  @media screen and (max-width: 1024px) {
    padding 11vw 0vw;
  }
`;

const StyledRow = styled.div`
  padding: 17px 0px;
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
      <Main>
        <StyledDiv>
          <StyledH1>{HERO_TEXT}</StyledH1>
          <StyledRow>
            <HomeText />
          </StyledRow>
          <StyledRow>
            <ButtonLink to={RESUME}>View Resume</ButtonLink>
          </StyledRow>
        </StyledDiv>
      </Main>
    </Layout>
  );
}
