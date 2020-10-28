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
  const onlineOrderingPlatformHref = '/online-ordering-platform';
  const firefoxDebuggerHref = 'https://bugzilla.mozilla.org/buglist.cgi?bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&classification=Components&component=Debugger&email1=kyleknaggs%40gmail.com&emailassigned_to1=1&emailtype1=exact&list_id=15389168&product=DevTools&query_format=advanced&resolution=---&resolution=FIXED&resolution=INVALID&resolution=WONTFIX&resolution=INACTIVE&resolution=DUPLICATE&resolution=WORKSFORME&resolution=INCOMPLETE&resolution=SUPPORT&resolution=EXPIRED&resolution=MOVED';
  const resumeHref = '/resume';
  const keySkills = 'Key Skills: JavaScript, React, Redux, ES6, Jest, Flow, Git/Mercurial, Bootstrap, Styled-Components, HTML, CSS, Sketch and Adobe Creative Suite.';

  return (
    <Layout>
      <StyledDiv>
        <StyledH1>{heroText}</StyledH1>
        <p>
          Selected Work:&nbsp;
          <Link to={onlineOrderingPlatformHref}>
            Online Ordering Platform for the largest mattress manufacturer in the Caribbean
          </Link>
          &nbsp;and an&nbsp;
          <Link to={firefoxDebuggerHref}>Open Source Contributions to the Firefox Debugger</Link>
          .
        </p>
        <p>{keySkills}</p>
        <Link to={resumeHref}>View Resume</Link>
      </StyledDiv>
    </Layout>
  );
}
