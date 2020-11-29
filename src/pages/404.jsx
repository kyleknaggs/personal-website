import React from 'react';
import styled from 'styled-components';
import { TEXT } from '../utility/constants';
import Layout from '../components/Layout';
import Main from '../components/Main';
import BodyLink from '../components/Links/BodyLink';

const StyledDiv = styled.div`
  padding: 11vw 0vw;

  @media screen and (max-width: 1080px) {
    padding: 20vw 0vw;
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

// In Gatsby the 404 page should be located at src/pages/404.js
// However, you cannot have a 404 function name in JavaScript
export default function NotFound() {
  const {
    NOT_FOUND_HERO,
    NOT_FOUND_DESCRIPTION,
    NOT_FOUND_NEXT_STEPS,
    HOMEPAGE_LINK,
    HOMEPAGE_LINK_TEXT,
  } = TEXT;

  return (
    <Layout>
      <Main>
        <StyledDiv>
          <StyledH1>{NOT_FOUND_HERO}</StyledH1>
          <StyledRow>
            <p>{NOT_FOUND_DESCRIPTION}</p>
            <p>
              {NOT_FOUND_NEXT_STEPS}
              &nbsp;
              <BodyLink to={HOMEPAGE_LINK}>
                {HOMEPAGE_LINK_TEXT}
              </BodyLink>
              .
            </p>
          </StyledRow>
        </StyledDiv>
      </Main>
    </Layout>
  );
}
