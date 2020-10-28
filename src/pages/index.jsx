import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const StyledDiv = styled.div`
  background: lightgrey;
  min-height: calc(100vh - var(--menu-height));
  padding-right: 9vw;
  padding-bottom: 9vw;
  padding-left: 9vw;
  @media screen and (max-width: 1024px) {
    padding-right: 13.5vw;
    padding-bottom: 13.5vw;
    padding-left: 13.5vw;
  }
`;

const StyledH1 = styled.h1`
  font-size: 64px;
  @media screen and (max-width: 1080px) {
    font-size: 36px;
  }
`;

export default function Home() {
  const heroText = 'Kyle Knaggs is a Software Developer from Trinidad and Tobago obsessed with making great user experiences a reality.';
  const selectedWork = ' Selected Work: Open Source Contributions to the Firefox Debugger and an Online Ordering System for the largest mattress manufacturer in the Caribbean.';
  const keySkills = 'Key Skills: JavaScript, React, Redux, ES6, Jest, Flow, Git/Mercurial, Bootstrap, Styled-Components, HTML, CSS, Sketch and Adobe Creative Suite.';
  const viewResume = 'View Resume';
  // TODO: Remove once links are properly set up
  const onlineOrderingPlatform = 'Online Ordering Platform';

  return (
    <Layout>
      <StyledDiv>
        <StyledH1>{heroText}</StyledH1>
        <p>{selectedWork}</p>
        <p>{keySkills}</p>
        <Link to="/online-ordering-platform">{viewResume}</Link>
        {/* TODO: Remove once links are properly set up */}
        <Link to="/online-ordering-platform">{onlineOrderingPlatform}</Link>
      </StyledDiv>
    </Layout>
  );
}
