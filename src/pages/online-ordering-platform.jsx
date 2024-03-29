import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Meta/SEO';
import Main from '../components/Layout/Main';
import Video from '../components/Media/Video';
import Paragraph from '../components/Text/Paragraph';
import Spacer from '../components/Layout/Spacer';
import H1 from '../components/Text/H1';
import H2 from '../components/Text/H2';
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

export default function OnlineOrderingPlatform() {
  const {
    ONLINE_ORDERING_PLATFORM: {
      META_TITLE,
      META_DESCRIPTION,
      NOTABLE_CONTRIBUTIONS_DESCRIPTION,
      DESCRIPTION,
      ORDER_ENTRY_OLD_DESCRIPTION,
      ORDER_ENTRY_OLD_ALT,
      ORDER_ENTRY_NEW_DESCRIPTION,
      ORDER_ENTRY_NEW_ALT,
      FREEDOM_DESCRIPTION,
      FREEDOM_ALT,
      WORKING_ORDER_DESCRIPTION,
      WORKING_ORDER_ALT,
      PRECEDENTS_DESCRIPTION,
      PRECEDENT_DIAGRAM_DESCRIPTION,
      PRECEDENT_DIAGRAM_ALT,
      HOME_MOCKUP_DESCRIPTION,
      HOME_MOCKUP_ALT,
      MOBILE_IMAGES_DESCRIPTION,
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
            <H1 text="AFL Online" />
            <Spacer />
            <H2 text="The design and development of an online ordering system for the largest mattress and foam manufacturer in the English-speaking Caribbean." />
            <Spacer />
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
