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
  font-size: 16px;

  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

export default function OnlineOrderingPlatform() {
  const {
    ONLINE_ORDERING_PLATFORM: {
      META_TITLE,
      META_DESCRIPTION,
      HERO,
      DESCRIPTION,
      ORDER_ENTRY_OLD_ALT,
      ORDER_ENTRY_OLD_DESCRIPTION,
      ORDER_ENTRY_NEW_ALT,
      ORDER_ENTRY_NEW_DESCRIPTION,
      FREEDOM_ALT,
      FREEDOM_DESCRIPTION,
      WORKING_ORDER_ALT,
      WORKING_ORDER_DESCRIPTION,
      PRECEDENTS_DESCRIPTION,
      PRECEDENT_DIAGRAM_ALT,
      PRECEDENT_DIAGRAM_DESCRIPTION,
      HOME_MOCKUP_ALT,
      HOME_MOCKUP_DESCRIPTION,
      MOBILE_IMAGES_DESCRIPTION,
      NOTABLE_CONTRIBUTIONS_DESCRIPTION,
    },
  } = TEXT;

  return (
    <Layout>
      <SEO
        title={META_TITLE}
        description={META_DESCRIPTION}
      />
      <Main>
        <article>
          <section>
            <Video />
          </section>
          <section>
            <Spacer />
            <StyledH1>{HERO}</StyledH1>
            <Paragraph text={DESCRIPTION} />
            <Spacer />
            <Paragraph text={NOTABLE_CONTRIBUTIONS_DESCRIPTION} />
            <NotableContributions />
            <FullWidthImage
              description={ORDER_ENTRY_OLD_DESCRIPTION}
              src={OrderEntryProcessOldImg}
              alt={ORDER_ENTRY_OLD_ALT}
            />
            <FullWidthImage
              description={ORDER_ENTRY_NEW_DESCRIPTION}
              src={OrderEntryProcessNewImg}
              alt={ORDER_ENTRY_NEW_ALT}
            />
            <FullWidthImage
              description={FREEDOM_DESCRIPTION}
              src={FreedomOrderEntryImg}
              alt={FREEDOM_ALT}
            />
            <FullWidthImage
              description={WORKING_ORDER_DESCRIPTION}
              src={WorkingOrderAnalysisImg}
              alt={WORKING_ORDER_ALT}
            />
            <PrecedentImages
              description={PRECEDENTS_DESCRIPTION}
            />
            <FullWidthImage
              description={PRECEDENT_DIAGRAM_DESCRIPTION}
              src={PrecedentSiteStudyDiagromImg}
              alt={PRECEDENT_DIAGRAM_ALT}
            />
            <FullWidthImage
              description={HOME_MOCKUP_DESCRIPTION}
              src={HomePageMockupImg}
              alt={HOME_MOCKUP_ALT}
            />
            <MobileImages
              description={MOBILE_IMAGES_DESCRIPTION}
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
