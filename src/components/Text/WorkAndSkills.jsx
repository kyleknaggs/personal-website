import React, { Fragment } from 'react';
import styled from 'styled-components';
import { HREF, TEXT } from '../../utility/constants';
import BodyLink from '../Links/BodyLink';

const StyledP = styled.p`
  padding-bottom: var(--padding-height);

  @media (min-width: 1200px) {
    padding-bottom: 0;
  }
`;

export default function WorkAndSkills() {
  const { ONLINE_ORDERING_PLATFORM, FIREFOX_DEBUGGER } = HREF;
  const {
    WORK_AND_SKILLS: {
      SELECTED_WORK_PREFIX,
      SELECTED_WORK_ONLINE_ORDERING_PLATFORM,
      SELECTED_WORK_CONJUGATION,
      SELECTED_WORK_FIREFOX_DEBUGGER,
      KEY_SKILLS_PREFIX_AND_DESCRIPTION,
    },
  } = TEXT;

  return (
    <Fragment>
      <StyledP>
        {SELECTED_WORK_PREFIX}
        &nbsp;
        <BodyLink to={ONLINE_ORDERING_PLATFORM}>
          {SELECTED_WORK_ONLINE_ORDERING_PLATFORM}
        </BodyLink>
        &nbsp;
        {SELECTED_WORK_CONJUGATION}
        &nbsp;
        <BodyLink to={FIREFOX_DEBUGGER} external>
          {SELECTED_WORK_FIREFOX_DEBUGGER}
        </BodyLink>
        .
      </StyledP>
      <StyledP>{KEY_SKILLS_PREFIX_AND_DESCRIPTION}</StyledP>
    </Fragment>
  );
}
