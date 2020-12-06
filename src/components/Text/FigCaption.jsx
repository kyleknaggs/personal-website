import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFigCaption = styled.figcaption`
  padding: 17px 0;
`;

export default function FigCaption({ text }) {
  return (
    <StyledFigCaption>{text}</StyledFigCaption>
  );
}

FigCaption.propTypes = {
  text: PropTypes.string.isRequired,
};
