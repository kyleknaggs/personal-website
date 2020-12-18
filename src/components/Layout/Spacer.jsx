import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpacerDiv = styled.div`
  width: 100%;
  height: 60px;

  @media screen and (max-width: 1200px) {
    height: 85px;
  }

  @media screen and (max-width: 576px) {
    height: ${(props) => (props.visibleOnMobile ? '85px' : '0px')}
  }
`;

export default function Spacer({ visibleOnMobile }) {
  return (
    <StyledSpacerDiv visibleOnMobile={visibleOnMobile} />
  );
}

Spacer.defaultProps = {
  visibleOnMobile: false,
};

Spacer.propTypes = {
  visibleOnMobile: PropTypes.bool,
};
