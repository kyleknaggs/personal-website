import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spacer from '../Layout/Spacer';
import FigCaption from '../Text/FigCaption';

// The image file can be larger than the max width of the parent element
// Because of this setting width to 100% ensures that it never extends
// beyond the width of its parent element
const StyledImg = styled.img`
  width: 100%;
`;

export default function FullWidthImage({ description, src, alt }) {
  return (
    <figure>
      <Spacer />
      <FigCaption
        text={description}
      />
      <StyledImg
        src={src}
        alt={alt}
      />
    </figure>
  );
}

FullWidthImage.propTypes = {
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
