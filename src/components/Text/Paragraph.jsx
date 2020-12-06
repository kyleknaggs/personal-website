import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledP = styled.p`
  padding: 17px 0;
`;

export default function Paragraph({ text }) {
  return (
    <StyledP>{text}</StyledP>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};
