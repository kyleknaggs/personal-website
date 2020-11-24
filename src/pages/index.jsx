import React from 'react';
import styled from 'styled-components';
import { TEXT } from '../utility/constants';
import Layout from '../components/Layout';
import Main from '../components/Main';
import HomeText from '../components/HomeText';
import ButtonLink from '../components/Links/ButtonLink';
import KyleKnaggsResumePdf from '../assets/kyleKnaggsResume.pdf';

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
  const { INDEX_HERO } = TEXT;

  return (
    <Layout>
      <Main>
        <StyledDiv>
          <StyledH1>{INDEX_HERO}</StyledH1>
          <StyledRow>
            <HomeText />
          </StyledRow>
          <StyledRow>
            <ButtonLink to={KyleKnaggsResumePdf}>View Resume</ButtonLink>
          </StyledRow>
        </StyledDiv>
      </Main>
    </Layout>
  );
}
