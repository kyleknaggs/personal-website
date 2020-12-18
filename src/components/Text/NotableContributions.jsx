import React from 'react';
import styled from 'styled-components';
import { TEXT } from '../../utility/constants';

const StyledUl = styled.ul`
  padding-left: 30px;
  list-style: none;
`;

const StyledLi = styled.li`
  display: flex;
  padding: 8px 0;

  ::before {
    content: "•";
    padding-right: 10px;
  }
`;

export default function NotableContributions() {
  const {
    NOTABLE_CONTRIBUTIONS_LIST_FIRST,
    NOTABLE_CONTRIBUTIONS_LIST_SECOND,
    NOTABLE_CONTRIBUTIONS_LIST_THIRD,
    NOTABLE_CONTRIBUTIONS_LIST_FOURTH,
    NOTABLE_CONTRIBUTIONS_LIST_FIFTH,
  } = TEXT;

  return (
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
  );
}
