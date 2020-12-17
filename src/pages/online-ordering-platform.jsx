import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Meta/SEO';
import Main from '../components/Layout/Main';
import Video from '../components/Media/Video';
import Paragraph from '../components/Text/Paragraph';
import Spacer from '../components/Layout/Spacer';
import NotableContributions from '../components/Text/NotableContributions';
import FullWidthImage from '../components/Media/FullWidthImage';
import PrecedentImages from '../components/Media/PrecedentImages';
import MobileImages from '../components/Media/MobileImages';
import OrderEntryProcessOldImg from '../assets/orderEntryProcessOld.png';
import OrderEntryProcessNewImg from '../assets/orderEntryProcessNew.png';
import FreedomOrderEntryImg from '../assets/freedomOrderEntry.png';
import WorkingOrderAnalysisImg from '../assets/workingOrderAnalysis.png';
import PrecedentSiteStudyDiagromImg from '../assets/precedentSiteStudyDiagram.png';
import HomePageMockupImg from '../assets/homePageMockup.png';
import { TEXT } from '../utility/constants';

const StyledH1 = styled.h1`
  font-family: 'Gill Sans Nova Bold';
  font-size: 32px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

export default function OnlineOrderingPlatform() {
  const {
    ONLINE_ORDERING_PLATFORM_META_TITLE,
    ONLINE_ORDERING_PLATFORM_META_DESCRIPTION,
    ONLINE_ORDERING_PLATFORM_HERO,
    ONLINE_ORDERING_PLATFORM_WRITE_UP,
    NOTABLE_CONTRIBUTIONS_LIST_DESCRIPTION,
    ORDER_ENTRY_PROCESS_OLD_ALT,
    ORDER_ENTRY_PROCESS_OLD_DESCRIPTION,
    ORDER_ENTRY_PROCESS_NEW_ALT,
    ORDER_ENTRY_PROCESS_NEW_DESCRIPTION,
    FREEDOM_ORDER_ENTRY_ALT,
    FREEDOM_ORDER_ENTRY_DESCRIPTION,
    WORKING_ORDER_ANALYSIS_ALT,
    WORKING_ORDER_ANALYSIS_DESCRIPTION,
    PRECEDENT_IMAGE_DESCRIPTION,
    PRECEDENT_SITE_STUDY_DIAGRAM_ALT,
    PRECEDENT_SITE_STUDY_DIAGRAM_DESCRIPTION,
    HOME_PAGE_MOCKUP_ALT,
    HOME_PAGE_MOCKUP_DESCRIPTION,
    MOBILE_IMAGE_DESCRIPTION,
  } = TEXT;

  return (
    <Layout>
      <SEO
        title={ONLINE_ORDERING_PLATFORM_META_TITLE}
        description={ONLINE_ORDERING_PLATFORM_META_DESCRIPTION}
      />
      <Main>
        <article>
          <section>
            <Video />
          </section>
          <section>
            <Spacer />
            <StyledH1>{ONLINE_ORDERING_PLATFORM_HERO}</StyledH1>
            <Paragraph text={ONLINE_ORDERING_PLATFORM_WRITE_UP} />
            <Spacer />
            <Paragraph text={NOTABLE_CONTRIBUTIONS_LIST_DESCRIPTION} />
            <NotableContributions />
            <FullWidthImage
              description={ORDER_ENTRY_PROCESS_OLD_DESCRIPTION}
              src={OrderEntryProcessOldImg}
              alt={ORDER_ENTRY_PROCESS_OLD_ALT}
            />
            <FullWidthImage
              description={ORDER_ENTRY_PROCESS_NEW_DESCRIPTION}
              src={OrderEntryProcessNewImg}
              alt={ORDER_ENTRY_PROCESS_NEW_ALT}
            />
            <FullWidthImage
              description={FREEDOM_ORDER_ENTRY_DESCRIPTION}
              src={FreedomOrderEntryImg}
              alt={FREEDOM_ORDER_ENTRY_ALT}
            />
            <FullWidthImage
              description={WORKING_ORDER_ANALYSIS_DESCRIPTION}
              src={WorkingOrderAnalysisImg}
              alt={WORKING_ORDER_ANALYSIS_ALT}
            />
            <PrecedentImages
              description={PRECEDENT_IMAGE_DESCRIPTION}
            />
            <FullWidthImage
              description={PRECEDENT_SITE_STUDY_DIAGRAM_DESCRIPTION}
              src={PrecedentSiteStudyDiagromImg}
              alt={PRECEDENT_SITE_STUDY_DIAGRAM_ALT}
            />
            <FullWidthImage
              description={HOME_PAGE_MOCKUP_DESCRIPTION}
              src={HomePageMockupImg}
              alt={HOME_PAGE_MOCKUP_ALT}
            />
            <MobileImages
              description={MOBILE_IMAGE_DESCRIPTION}
            />
            <Spacer
              visibleOnMobile
            />
          </section>
        </article>
      </Main>
    </Layout>
  );
}
