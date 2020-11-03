import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spacer from './Spacer';
import Paragraph from './Paragraph';
import { IMG } from '../utility/constants';

const StyledWrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const StyledDiv = styled.div`
  width: 25%;
  padding: 17px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

export default function ImageFullWidth({ description }) {
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
        <StyledDiv>
          <StyledImg
            src={AMAZON_PRECEDENT}
            alt=""
          />
        </StyledDiv>
        <StyledDiv>
          <StyledImg
            src={CASPER_PRECEDENT}
            alt=""
          />
        </StyledDiv>
        <StyledDiv>
          <StyledImg
            src={ALLY_PRECEDENT}
            alt=""
          />
        </StyledDiv>
        <StyledDiv>
          <StyledImg
            src={TRADE_GECKO_PRECEDENT}
            alt=""
          />
        </StyledDiv>
      </StyledWrapperDiv>
    </span>
  );
}

ImageFullWidth.propTypes = {
  description: PropTypes.string.isRequired,
};
