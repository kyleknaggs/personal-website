import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { TEXT } from '../utility/constants';
import Layout from '../components/Layout';
import Main from '../components/Main';
import H1 from '../components/Text/H1';
import PaddingRow from '../components/Rows/PaddingRow';
import HomeText from '../components/Text/HomeText';
import ButtonLink from '../components/Links/ButtonLink';
import KyleKnaggsResumePdf from '../assets/kyleKnaggsResume.pdf';

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
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
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
