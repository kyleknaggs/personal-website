import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spacer from './Spacer';
import Paragraph from './Paragraph';
import { IMG } from '../utility/constants';

const StyledWrapperDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 34px;
  margin-top: 10px; /* Keeps visual spacing of text to image consistent */
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 34px;
  }
`;

const StyledSmallImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSmallImg = styled.img`
  width: 50%;
  height: 50%;
  margin-top: 50px;
  /* Preserve aspect ratio when resizing image */
  object-fit: contain;
  @media screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;

const StyledLargeImg = styled.img`
  width: 100%;
`;

// TODO: Replace placeholder content with MobileImageRow content
export default function MobileImageRow({ description }) {
  const {
    MOBILE_ORDER_HISTORY,
    MOBILE_MATTRESS_AND_FOUNDATION,
    MOBILE_CUSTOM_REQUEST,
  } = IMG;
  return (
    <span>
      <Spacer />
      <Paragraph
        text={description}
      />
      <StyledWrapperDiv>
        <StyledSmallImgWrapper>
          <StyledSmallImg
            src={MOBILE_ORDER_HISTORY}
            alt=""
          />
        </StyledSmallImgWrapper>
        <StyledLargeImg
          src={MOBILE_MATTRESS_AND_FOUNDATION}
          alt=""
        />
        <StyledSmallImgWrapper>
          <StyledSmallImg
            src={MOBILE_CUSTOM_REQUEST}
            alt=""
          />
        </StyledSmallImgWrapper>
      </StyledWrapperDiv>
    </span>
  );
}

MobileImageRow.propTypes = {
  description: PropTypes.string.isRequired,
};
