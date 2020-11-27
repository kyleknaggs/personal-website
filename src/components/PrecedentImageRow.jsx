import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spacer from './Spacer';
import Paragraph from './Paragraph';
import AmazonPrecedentImg from '../assets/amazonPrecedent.png';
import AllyPrecedentImg from '../assets/allyPrecedent.png';
import CasperPrecedentImg from '../assets/casperPrecedent.png';
import TradeGeckoPrecedentImg from '../assets/tradeGeckoPrecedent.jpg';

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
  return (
    <span>
      <Spacer />
      <Paragraph
        text={description}
      />
      <StyledWrapperDiv>
        <StyledImg
          src={AmazonPrecedentImg}
          alt=""
        />
        <StyledImg
          src={CasperPrecedentImg}
          alt=""
        />
        <StyledImg
          src={AllyPrecedentImg}
          alt=""
        />
        <StyledImg
          src={TradeGeckoPrecedentImg}
          alt=""
        />
      </StyledWrapperDiv>
    </span>
  );
}

PrecedentImageRow.propTypes = {
  description: PropTypes.string.isRequired,
};
