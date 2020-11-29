import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRow = styled.div`
  padding: 17px 0px;
`;

export default function PaddingRow({ children }) {
  return (
    <StyledRow>
      {children}
    </StyledRow>
  );
}

PaddingRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
