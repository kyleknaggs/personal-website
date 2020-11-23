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

const StyledImg = styled.img`
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
        <StyledImg
          src={MOBILE_ORDER_HISTORY}
          alt=""
        />
        <StyledImg
          src={MOBILE_MATTRESS_AND_FOUNDATION}
          alt=""
        />
        <StyledImg
          src={MOBILE_CUSTOM_REQUEST}
          alt=""
        />
      </StyledWrapperDiv>
    </span>
  );
}

MobileImageRow.propTypes = {
  description: PropTypes.string.isRequired,
};
