import React, { Fragment } from 'react';
import styled from 'styled-components';
import { HREF } from '../../utility/constants';
import BodyLink from '../Links/BodyLink';

const StyledP = styled.p`
  padding-bottom: var(--padding-height);

  @media (min-width: 1200px) {
    padding-bottom: 0;
  }
`;

// ----------------------------------------------------------------------------
// NOTE: I have intentionally stopped storing data for text that is to be
// rendered as markup in constants as the act of naming the keys/variables
// associated with the constants become more cumbersome than simply rendering
// the text directly into the component as I have done here. This practice
// should probably be extended to the remaining components in this project
// whenever those components are modified.
// ----------------------------------------------------------------------------
export default function WorkAndSkills() {
  return (
    <Fragment>
      <StyledP>
        As a Senior Software Engineer at&nbsp;
        <BodyLink to={HREF.QGIV} external>Bloomerang</BodyLink>
        , I build and maintain experiences across its fundraising products,
        including an&nbsp;
        <BodyLink to={HREF.QGIV_DONATION_FORM} external>
          online donation form
        </BodyLink>
        , a&nbsp;
        <BodyLink to={HREF.QGIV_PEER_TO_PEER} external>
          peer-to-peer fundraising platform
        </BodyLink>
        &nbsp;and an&nbsp;
        <BodyLink to={HREF.QGIV_EVENTS} external>
          event registration platform
        </BodyLink>
        . My work spans customer-facing interfaces, front-end architecture and
        the tools nonprofits use to customize their fundraising experiences.
        Previously, I was responsible for the design and development of an&nbsp;
        <BodyLink to={HREF.ONLINE_ORDERING_PLATFORM}>
          online ordering platform
        </BodyLink>
        &nbsp;for the largest mattress manufacturer in the Caribbean, and I’ve
        also made&nbsp;
        <BodyLink to={HREF.FIREFOX_DEBUGGER} external>
          open-source contributions
        </BodyLink>
        &nbsp;to the Firefox Debugger.
      </StyledP>
      <StyledP>
        I primarily work with TypeScript, JavaScript, and React, with a
        strong focus on thoughtful UI implementation, maintainability, and code quality.
      </StyledP>
      <br />
      <StyledP>Want to learn more?</StyledP>
    </Fragment>
  );
}
