import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Main from '../components/Main';
import { IMG } from '../utility/constants';

const StyledDiv = styled.div`
  @media screen and (max-width: 1024px) {
    padding 11vw 0vw;
  }
`;

// Because the image file is larger than the max width of the parent element
// Setting width to 100% ensures that it never extends beyond the width
//  of its parent element
const StyledImg = styled.img`
  width: 100%;
`;

/*
  TODO: Markup for iframe used to load in Vimeo video
  <iframe
    src="https://player.vimeo.com/video/455057785?app_id=122963&amp;wmode=opaque&amp;autoplay=1"
    width="100%"
    height="240"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen=""
    title="aflOnline_applicationDemo"
    id="yui_3_17_2_1_1604168177590_76"
    style={{
      opacity: 1,
    }}
  />
*/

export default function OnlineOrderingPlatform() {
  const {
    AFL_ONLINE_VIDEO,
    ORDER_ENTRY_PROCESS_OLD,
    ORDER_ENTRY_PROCESS_NEW,
    FREEDOM_ORDER_ENTRY,
    WORKING_ORDER_ANALYSIS,
    PRECEDENT_SITE_STUDY_DIAGRAM,
    HOME_PAGE_MOCKUP,
  } = IMG;

  return (
    <Layout>
      <Main>
        <StyledDiv>
          <StyledImg
            src={AFL_ONLINE_VIDEO}
            alt=""
          />
        </StyledDiv>
        <StyledImg
          src={ORDER_ENTRY_PROCESS_OLD}
          alt=""
        />
        <StyledImg
          src={ORDER_ENTRY_PROCESS_NEW}
          alt=""
        />
        <StyledImg
          src={FREEDOM_ORDER_ENTRY}
          alt=""
        />
        <StyledImg
          src={WORKING_ORDER_ANALYSIS}
          alt=""
        />
        {/* TODO: Add sequence of 4 precedent study images */}
        <StyledImg
          src={PRECEDENT_SITE_STUDY_DIAGRAM}
          alt=""
        />
        <StyledImg
          src={HOME_PAGE_MOCKUP}
          alt=""
        />
        {/* TODO: Add sequence of 3 screenshots on mobile devices */}
      </Main>
    </Layout>
  );
}
