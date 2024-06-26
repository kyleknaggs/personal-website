import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Meta/SEO';
import Main from '../components/Layout/Main';
import H2 from '../components/Text/H2';
import H1 from '../components/Text/H1';
import Section from '../components/Layout/Section';
import WorkAndSkills from '../components/Text/WorkAndSkills';
import ButtonLink from '../components/Links/ButtonLink';
import KyleKnaggsResumePdf from '../assets/2024_kyleKnaggsResume.pdf';

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

// Need to give a little breathing room below content on desktop devices
const StyledDiv = styled.div`
  padding 11vw 0vw;

  @media (min-width: 1200px) {
    padding: 0vw 0vw 3vw;
  }
`;

export default function Index({ data }) {
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
          <Section>
            <H1 text="Hello! I'm Kyle." />
          </Section>
          <Section>
            <H2 text="I am a design-focused, detail-oriented software developer obsessed with making great user experiences a reality." />
          </Section>
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
