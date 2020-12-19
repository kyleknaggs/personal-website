import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spacer from '../Layout/Spacer';
import FigCaption from '../Text/FigCaption';
import AmazonPrecedentImg from '../../assets/amazonPrecedent.jpg';
import AllyPrecedentImg from '../../assets/allyPrecedent.jpg';
import CasperPrecedentImg from '../../assets/casperPrecedent.jpg';
import TradeGeckoPrecedentImg from '../../assets/tradeGeckoPrecedent.jpg';
import { TEXT } from '../../utility/constants';

const StyledWrapperDiv = styled.div`
  width: 100%;
  display: grid;
  margin-top: 10px; /* Keeps visual spacing of text to image consistent */
  column-gap: calc(2 * var(--padding-height));;
  row-gap: calc(2 * var(--padding-height));;
  grid-template-columns: 1fr;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

export default function PrecedentImages({ description }) {
  const {
    PRECEDENT_IMAGES: {
      AMAZON_PRECEDENT_ALT,
      CASPER_PRECEDENT_ALT,
      ALLY_PRECEDENT_ALT,
      TRADE_GECKO_PRECEDENT_ALT,
    },
  } = TEXT;

  return (
    <figure>
      <Spacer />
      <FigCaption
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
    </figure>
  );
}

PrecedentImages.propTypes = {
  description: PropTypes.string.isRequired,
};
