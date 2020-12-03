import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spacer from '../Spacer';
import Paragraph from '../Text/Paragraph';
import AmazonPrecedentImg from '../../assets/amazonPrecedent.jpg';
import AllyPrecedentImg from '../../assets/allyPrecedent.jpg';
import CasperPrecedentImg from '../../assets/casperPrecedent.jpg';
import TradeGeckoPrecedentImg from '../../assets/tradeGeckoPrecedent.jpg';
import { TEXT } from '../../utility/constants';

const StyledWrapperDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 34px;
  margin-top: 10px; /* Keeps visual spacing of text to image consistent */
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 34px;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

export default function PrecedentImageRow({ description }) {
  const {
    ALLY_PRECEDENT_ALT,
    AMAZON_PRECEDENT_ALT,
    CASPER_PRECEDENT_ALT,
    TRADE_GECKO_PRECEDENT_ALT,
  } = TEXT;

  return (
    <Fragment>
      <Spacer />
      <Paragraph
        text={description}
      />
      <StyledWrapperDiv>
        <StyledImg
          src={AmazonPrecedentImg}
          alt={AMAZON_PRECEDENT_ALT}
        />
        <StyledImg
          src={CasperPrecedentImg}
          alt={CASPER_PRECEDENT_ALT}
        />
        <StyledImg
          src={AllyPrecedentImg}
          alt={ALLY_PRECEDENT_ALT}
        />
        <StyledImg
          src={TradeGeckoPrecedentImg}
          alt={TRADE_GECKO_PRECEDENT_ALT}
        />
      </StyledWrapperDiv>
    </Fragment>
  );
}

PrecedentImageRow.propTypes = {
  description: PropTypes.string.isRequired,
};
