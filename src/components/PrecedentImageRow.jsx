import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spacer from './Spacer';
import Paragraph from './Paragraph';
import { IMG } from '../utility/constants';

const StyledWrapperDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 34px;
  margin-top: 10px; /* Keeps visual spacing of text to image consistent */
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 34px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

export default function PrecedentImageRow({ description }) {
  const {
    AMAZON_PRECEDENT,
    CASPER_PRECEDENT,
    ALLY_PRECEDENT,
    TRADE_GECKO_PRECEDENT,
  } = IMG;
  return (
    <span>
      <Spacer />
      <Paragraph
        text={description}
      />
      <StyledWrapperDiv>
        <StyledImg
          src={AMAZON_PRECEDENT}
          alt=""
        />
        <StyledImg
          src={CASPER_PRECEDENT}
          alt=""
        />
        <StyledImg
          src={ALLY_PRECEDENT}
          alt=""
        />
        <StyledImg
          src={TRADE_GECKO_PRECEDENT}
          alt=""
        />
      </StyledWrapperDiv>
    </span>
  );
}

PrecedentImageRow.propTypes = {
  description: PropTypes.string.isRequired,
};
