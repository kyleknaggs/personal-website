import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// The image file can be larger than the max width of the parent element
// Because of this setting width to 100% ensures that it never extends
// beyond the width of its parent element
const StyledImg = styled.img`
  width: 100%;
`;

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

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 17px 0;
`;

export default function Image({ src, alt }) {
  const PLACEHOLDER_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lacus nec facilisis luctus.';

  return (
    <span>
      <StyledSpacerDiv />
      <StyledDiv>
        <p>{PLACEHOLDER_TEXT}</p>
      </StyledDiv>
      <StyledImg
        src={src}
        alt={alt}
      />
    </span>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
