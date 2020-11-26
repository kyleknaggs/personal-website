import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Paragraph from '../components/Paragraph';
import Spacer from '../components/Spacer';
import ImageFullWidth from '../components/ImageFullWidth';
import PrecedentImageRow from '../components/PrecedentImageRow';
import MobileImageRow from '../components/MobileImageRow';
import AflOnlineVideoImg from '../assets/aflOnlineVideo.png';
import OrderEntryProcessOldImg from '../assets/orderEntryProcessOld.png';
import OrderEntryProcessNewImg from '../assets/orderEntryProcessNew.png';
import FreedomOrderEntryImg from '../assets/freedomOrderEntry.png';
import WorkingOrderAnalysisImg from '../assets/workingOrderAnalysis.png';
import PrecedentSiteStudyDiagromImg from '../assets/precedentSiteStudyDiagram.png';
import HomePageMockupImg from '../assets/homePageMockup.png';
import { TEXT } from '../utility/constants';

const AbsolutePlaceholderImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const RelativePlaceholderImgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClickableArrow = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-image: url(//assets.squarespace.com/universal/images-v6/damask/play-button@2x.png);
  background-position: center;
  background-size: contain;
`;

// Well known CSS hack: https://css-tricks.com/aspect-ratio-boxes/
// Padding percentage values are calculated using an element's width
// The use of padding-top with a percentage creates an image that
// maintains a particular aspect ratio as the content resizes
const StyledVideoWrapperDiv = styled.div`
  padding-top: 56.26%; /* Maintains 9:16 aspect ratio */
  position: relative;
  overflow: hidden; /* Crops placeholder image which is taller than wrapper */
`;

// TODO:
// 1. Remove title from top left of video if still present
// 2. Rename AflOnlineVideoImg to AflOnlinePlaceholderVideoImg
// 3. Consolidate same placeholder img and iframe styles into single component
// 4. Replace Squarespace arrow image with your own arrow image
// 5. Move placeholder image content into own component
const StyledPlaceholderImg = styled.img`
  width: 100%;
`;

const StyledIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const StyledH1 = styled.h1`
  font-family: 'Gill Sans Nova Bold';
  font-size: 32px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

const StyledUl = styled.ul`
  padding-left: 30px;
  list-style: none;
`;

const StyledLi = styled.li`
  display: flex;
  padding: 8px 0px;
  ::before {
    content: "•";
    padding-right: 10px;
  }
`;

export default function OnlineOrderingPlatform() {
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
    PRECEDENT_IMAGE_DESCRIPTION,
    PRECEDENT_SITE_STUDY_DIAGRAM_DESCRIPTION,
    HOME_PAGE_MOCKUP_DESCRIPTION,
    MOBILE_IMAGE_DESCRIPTION,
  } = TEXT;
  const [hasClickedVideo, setHasClickedVideo] = useState(false);

  function handleClick() {
    setHasClickedVideo(true);
  }

  const placeholderContent = (
    <AbsolutePlaceholderImgWrapper>
      <RelativePlaceholderImgWrapper>
        <StyledPlaceholderImg
          src={AflOnlineVideoImg}
          alt=""
        />
        <ClickableArrow
          onClick={handleClick}
        />
      </RelativePlaceholderImgWrapper>
    </AbsolutePlaceholderImgWrapper>
  );

  return (
    <Layout>
      <Main>
        <StyledVideoWrapperDiv>
          {
            !hasClickedVideo ? (
              placeholderContent
            ) : (
              <StyledIFrame
                src="https://player.vimeo.com/video/455057785?app_id=122963&amp;wmode=opaque&amp;autoplay=1"
                title="aflOnline_applicationDemo"
                id="yui_3_17_2_1_1606395291091_76"
                allow="fullscreen"
                autoplay="true"
              />
            )
          }
        </StyledVideoWrapperDiv>
        <Paragraph text={AFL_ONLINE_VIDEO_DESCRIPTION} />
        <Spacer />
        <StyledH1>{ONLINE_ORDERING_PLATFORM_HERO}</StyledH1>
        <Paragraph text={ONLINE_ORDERING_PLATFORM_WRITE_UP} />
        <Spacer />
        <Paragraph text={NOTABLE_CONTRIBUTIONS_LIST_DESCRIPTION} />
        <StyledUl>
          <StyledLi>
            <p>{NOTABLE_CONTRIBUTIONS_LIST_FIRST}</p>
          </StyledLi>
          <StyledLi>
            <p>{NOTABLE_CONTRIBUTIONS_LIST_SECOND}</p>
          </StyledLi>
          <StyledLi>
            <p>{NOTABLE_CONTRIBUTIONS_LIST_THIRD}</p>
          </StyledLi>
          <StyledLi>
            <p>{NOTABLE_CONTRIBUTIONS_LIST_FOURTH}</p>
          </StyledLi>
          <StyledLi>
            <p>{NOTABLE_CONTRIBUTIONS_LIST_FIFTH}</p>
          </StyledLi>
        </StyledUl>
        <ImageFullWidth
          description={ORDER_ENTRY_PROCESS_OLD_DESCRIPTION}
          src={OrderEntryProcessOldImg}
          alt=""
        />
        <ImageFullWidth
          description={ORDER_ENTRY_PROCESS_NEW_DESCRIPTION}
          src={OrderEntryProcessNewImg}
          alt=""
        />
        <ImageFullWidth
          description={FREEDOM_ORDER_ENTRY_DESCRIPTION}
          src={FreedomOrderEntryImg}
          alt=""
        />
        <ImageFullWidth
          description={WORKING_ORDER_ANALYSIS_DESCRIPTION}
          src={WorkingOrderAnalysisImg}
          alt=""
        />
        <PrecedentImageRow
          description={PRECEDENT_IMAGE_DESCRIPTION}
        />
        <ImageFullWidth
          description={PRECEDENT_SITE_STUDY_DIAGRAM_DESCRIPTION}
          src={PrecedentSiteStudyDiagromImg}
          alt=""
        />
        <ImageFullWidth
          description={HOME_PAGE_MOCKUP_DESCRIPTION}
          src={HomePageMockupImg}
          alt=""
        />
        <MobileImageRow
          description={MOBILE_IMAGE_DESCRIPTION}
        />
        <Spacer
          visibleOnMobile
        />
      </Main>
    </Layout>
  );
}
