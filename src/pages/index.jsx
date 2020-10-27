import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const StyledDiv = styled.div`
  background: lightgrey;
  height: calc(100vh - var(--menu-height));
  padding-right: 9vw;
  padding-bottom: 9vw;
  padding-left: 9vw;
  @media screen and (max-width: 1024px) {
    padding-right: 13.5vw;
    padding-bottom: 13.5vw;
    padding-left: 13.5vw;
  }
`;

export default function Home() {
  return (
    <Layout>
      <StyledDiv>
        <h1>Home</h1>
        <Link to="/online-ordering-platform">Online Ordering Platform</Link>
      </StyledDiv>
    </Layout>
  );
}
