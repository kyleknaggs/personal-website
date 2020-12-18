import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Meta/SEO';
import Main from '../components/Layout/Main';
import H1 from '../components/Text/H1';
import Section from '../components/Layout/Section';
import WorkAndSkills from '../components/Text/WorkAndSkills';
import ButtonLink from '../components/Links/ButtonLink';
import KyleKnaggsResumePdf from '../assets/2020_kyleKnaggsResume.pdf';
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

  @media screen and (max-width: 1200px) {
    padding 11vw 0vw;
  }
`;

export default function Index({ data }) {
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
          <Section>
            <WorkAndSkills />
          </Section>
          <Section>
            <ButtonLink to={KyleKnaggsResumePdf}>View Resume</ButtonLink>
          </Section>
        </StyledDiv>
      </Main>
    </Layout>
  );
}

Index.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
  }).isRequired,
};
