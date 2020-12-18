import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Meta/SEO';
import Main from '../components/Layout/Main';
import H1 from '../components/Text/H1';
import Section from '../components/Layout/Section';
import BodyLink from '../components/Links/BodyLink';
import { TEXT } from '../utility/constants';

const StyledDiv = styled.div`
  padding: 11vw 0vw;
`;

// In Gatsby the 404 page should be located at src/pages/404.js
// However, you cannot have a 404 function name in JavaScript
export default function NotFound() {
  const {
    NOT_FOUND: {
      META_TITLE,
      META_DESCRIPTION,
      HERO,
      REASON,
      NEXT_STEPS,
      HOMEPAGE_LINK,
      HOMEPAGE_LINK_TEXT,
    },
  } = TEXT;

  return (
    <Layout>
      <SEO
        title={META_TITLE}
        description={META_DESCRIPTION}
      />
      <Main>
        <StyledDiv>
          <H1 text={HERO} />
          <Section>
            <p>{REASON}</p>
            <p>
              {NEXT_STEPS}
              &nbsp;
              <BodyLink to={HOMEPAGE_LINK}>
                {HOMEPAGE_LINK_TEXT}
              </BodyLink>
              .
            </p>
          </Section>
        </StyledDiv>
      </Main>
    </Layout>
  );
}
