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
  const { AFL_ONLINE_VIDEO } = IMG;

  return (
    <Layout>
      <Main>
        <StyledDiv>
          <StyledImg
            src={AFL_ONLINE_VIDEO}
            alt=""
          />
        </StyledDiv>
      </Main>
    </Layout>
  );
}
