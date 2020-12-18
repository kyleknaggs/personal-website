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
    NOTABLE_CONTRIBUTIONS: {
      FIRST_BULLET,
      SECOND_BULLET,
      THIRD_BULLET,
      FOURTH_BULLET,
      FIFTH_BULLET,
    },
  } = TEXT;

  return (
    <StyledUl>
      <StyledLi>
        <p>{FIRST_BULLET}</p>
      </StyledLi>
      <StyledLi>
        <p>{SECOND_BULLET}</p>
      </StyledLi>
      <StyledLi>
        <p>{THIRD_BULLET}</p>
      </StyledLi>
      <StyledLi>
        <p>{FOURTH_BULLET}</p>
      </StyledLi>
      <StyledLi>
        <p>{FIFTH_BULLET}</p>
      </StyledLi>
    </StyledUl>
  );
}
