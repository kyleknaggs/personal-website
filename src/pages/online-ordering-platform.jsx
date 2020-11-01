import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Paragraph from '../components/Paragraph';
import Spacer from '../components/Spacer';
import Image from '../components/Image';
import { IMG, TEXT } from '../utility/constants';

const StyledImageWrapperDiv = styled.div`
  @media screen and (max-width: 1024px) {
    padding-top: 11vw;
  }
`;

// Because the image file is larger than the max width of the parent element
// Setting width to 100% ensures that it never extends beyond the width
//  of its parent element
const StyledImg = styled.img`
  width: 100%;
`;

const StyledH1 = styled.h1`
  font-family: 'Gill Sans Nova Bold';
  font-size: 32px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

const StyledUl = styled.ul`
  padding-left: 40px;
`;

const StyledLi = styled.li`
  padding: 8px 0px;
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
  const {
    ONLINE_ORDERING_PLATFORM_HERO,
    AFL_ONLINE_VIDEO_DESCRIPTION,
    ONLINE_ORDERING_PLATFORM_WRITE_UP,
    NOTABLE_CONTRIBUTIONS_LIST_DESCRIPTION,
    NOTABLE_CONTRIBUTIONS_LIST_FIRST,
    NOTABLE_CONTRIBUTIONS_LIST_SECOND,
    NOTABLE_CONTRIBUTIONS_LIST_THIRD,
    NOTABLE_CONTRIBUTIONS_LIST_FOURTH,
    NOTABLE_CONTRIBUTIONS_LIST_FIFTH,
    ORDER_ENTRY_PROCESS_OLD_DESCRIPTION,
    ORDER_ENTRY_PROCESS_NEW_DESCRIPTION,
    FREEDOM_ORDER_ENTRY_DESCRIPTION,
    WORKING_ORDER_ANALYSIS_DESCRIPTION,
    PRECEDENT_SITE_STUDY_DIAGRAM_DESCRIPTION,
    HOME_PAGE_MOCKUP_DESCRIPTION,
  } = TEXT;

  return (
    <Layout>
      <Main>
        <StyledImageWrapperDiv>
          <StyledImg
            src={AFL_ONLINE_VIDEO}
            alt=""
          />
        </StyledImageWrapperDiv>
        <Paragraph text={AFL_ONLINE_VIDEO_DESCRIPTION} />
        <Spacer />
        <StyledH1>{ONLINE_ORDERING_PLATFORM_HERO}</StyledH1>
        <Paragraph text={ONLINE_ORDERING_PLATFORM_WRITE_UP} />
        <Spacer />
        <Paragraph text={NOTABLE_CONTRIBUTIONS_LIST_DESCRIPTION} />
        <StyledUl>
          <StyledLi>{NOTABLE_CONTRIBUTIONS_LIST_FIRST}</StyledLi>
          <StyledLi>{NOTABLE_CONTRIBUTIONS_LIST_SECOND}</StyledLi>
          <StyledLi>{NOTABLE_CONTRIBUTIONS_LIST_THIRD}</StyledLi>
          <StyledLi>{NOTABLE_CONTRIBUTIONS_LIST_FOURTH}</StyledLi>
          <StyledLi>{NOTABLE_CONTRIBUTIONS_LIST_FIFTH}</StyledLi>
        </StyledUl>
        <Spacer />
        <Image
          description={ORDER_ENTRY_PROCESS_OLD_DESCRIPTION}
          src={ORDER_ENTRY_PROCESS_OLD}
          alt=""
        />
        <Image
          description={ORDER_ENTRY_PROCESS_NEW_DESCRIPTION}
          src={ORDER_ENTRY_PROCESS_NEW}
          alt=""
        />
        <Image
          description={FREEDOM_ORDER_ENTRY_DESCRIPTION}
          src={FREEDOM_ORDER_ENTRY}
          alt=""
        />
        <Image
          description={WORKING_ORDER_ANALYSIS_DESCRIPTION}
          src={WORKING_ORDER_ANALYSIS}
          alt=""
        />
        {/* TODO: Add sequence of 4 precedent study images */}
        <Image
          description={PRECEDENT_SITE_STUDY_DIAGRAM_DESCRIPTION}
          src={PRECEDENT_SITE_STUDY_DIAGRAM}
          alt=""
        />
        <Image
          description={HOME_PAGE_MOCKUP_DESCRIPTION}
          src={HOME_PAGE_MOCKUP}
          alt=""
        />
        {/* TODO: Add sequence of 3 screenshots on mobile devices */}
      </Main>
    </Layout>
  );
}
