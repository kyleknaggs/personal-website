import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Main from '../components/Main';
import H1 from '../components/Text/H1';
import Section from '../components/Rows/Section';
import BodyLink from '../components/Links/BodyLink';
import { TEXT } from '../utility/constants';

const StyledDiv = styled.div`
  padding: 11vw 0vw;
`;

// In Gatsby the 404 page should be located at src/pages/404.js
// However, you cannot have a 404 function name in JavaScript
export default function NotFound() {
  const {
    NOT_FOUND_META_TITLE,
    NOT_FOUND_META_DESCRIPTION,
    NOT_FOUND_HERO,
    NOT_FOUND_DESCRIPTION,
    NOT_FOUND_NEXT_STEPS,
    HOMEPAGE_LINK,
    HOMEPAGE_LINK_TEXT,
  } = TEXT;

  return (
    <Layout>
      <SEO
        title={NOT_FOUND_META_TITLE}
        description={NOT_FOUND_META_DESCRIPTION}
      />
      <Main>
        <StyledDiv>
          <H1 text={NOT_FOUND_HERO} />
          <Section>
            <p>{NOT_FOUND_DESCRIPTION}</p>
            <p>
              {NOT_FOUND_NEXT_STEPS}
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
