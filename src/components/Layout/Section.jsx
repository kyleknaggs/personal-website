import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  padding: var(--padding-height) 0;
`;

export default function Section({ children }) {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
