import React from 'react';
import styled from 'styled-components';

const StyledSpacerDiv = styled.div`
  width: 100%;
  height: 60px;

  @media screen and (max-width: 1024px) {
    height: 85px;
  }

  @media screen and (max-width: 640px) {
    height: 0px;
  }
`;

export default function Spacer() {
  return (
    <StyledSpacerDiv />
  );
}
