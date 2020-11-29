import React from 'react';
import styled from 'styled-components';
import { TEXT } from '../utility/constants';
import Layout from '../components/Layout';
import Main from '../components/Main';
import H1 from '../components/H1';
import PaddingRow from '../components/PaddingRow';
import HomeText from '../components/HomeText';
import ButtonLink from '../components/Links/ButtonLink';
import KyleKnaggsResumePdf from '../assets/kyleKnaggsResume.pdf';

const StyledDiv = styled.div`
  padding: 6vw 0vw;

  @media screen and (max-width: 1024px) {
    padding 11vw 0vw;
  }
`;

export default function Home() {
  const { INDEX_HERO } = TEXT;

  return (
    <Layout>
      <Main>
        <StyledDiv>
          <H1 text={INDEX_HERO} />
          <PaddingRow>
            <HomeText />
          </PaddingRow>
          <PaddingRow>
            <ButtonLink to={KyleKnaggsResumePdf}>View Resume</ButtonLink>
          </PaddingRow>
        </StyledDiv>
      </Main>
    </Layout>
  );
}
