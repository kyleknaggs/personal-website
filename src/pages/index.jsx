import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const StyledH1 = styled.h1`
  color: green;
`;

export default function Home() {
  // Placeholder comment that enable experiment with remote repo
  return (
    <Layout>
      <StyledH1>Home</StyledH1>
      <Link to="/online-ordering-platform">Online Ordering Platform</Link>
    </Layout>
  );
}
