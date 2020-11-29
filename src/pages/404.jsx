import React from 'react';
import styled from 'styled-components';
import { TEXT } from '../utility/constants';
import Layout from '../components/Layout';
import Main from '../components/Main';
import H1 from '../components/H1';
import PaddingRow from '../components/PaddingRow';
import BodyLink from '../components/Links/BodyLink';

const StyledDiv = styled.div`
  padding: 11vw 0vw;

  @media screen and (max-width: 1080px) {
    padding: 20vw 0vw;
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
          <H1 text={NOT_FOUND_HERO} />
          <PaddingRow>
            <p>{NOT_FOUND_DESCRIPTION}</p>
            <p>
              {NOT_FOUND_NEXT_STEPS}
              &nbsp;
              <BodyLink to={HOMEPAGE_LINK}>
                {HOMEPAGE_LINK_TEXT}
              </BodyLink>
              .
            </p>
          </PaddingRow>
        </StyledDiv>
      </Main>
    </Layout>
  );
}
