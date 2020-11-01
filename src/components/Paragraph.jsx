import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 17px 0;
`;

export default function Paragraph({ text }) {
  return (
    <StyledDiv>
      <p>{text}</p>
    </StyledDiv>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};
