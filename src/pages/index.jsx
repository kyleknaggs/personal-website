import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Main from '../components/Main';
import H1 from '../components/Text/H1';
import SectionWithPadding from '../components/Rows/SectionWithPadding';
import HomeText from '../components/Text/HomeText';
import ButtonLink from '../components/Links/ButtonLink';
import KyleKnaggsResumePdf from '../assets/kyleKnaggsResume.pdf';
import { TEXT } from '../utility/constants';

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`;

const StyledDiv = styled.div`
  padding: 6vw 0vw;

  @media screen and (max-width: 1024px) {
    padding 11vw 0vw;
  }
`;

export default function Home({ data }) {
  const { INDEX_HERO } = TEXT;
  const {
    site: {
      siteMetadata: {
        title,
        description,
      },
    },
  } = data;

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
      />
      <Main>
        <StyledDiv>
          <H1 text={INDEX_HERO} />
          <SectionWithPadding>
            <HomeText />
          </SectionWithPadding>
          <SectionWithPadding>
            <ButtonLink to={KyleKnaggsResumePdf}>View Resume</ButtonLink>
          </SectionWithPadding>
        </StyledDiv>
      </Main>
    </Layout>
  );
}

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
  }).isRequired,
};
