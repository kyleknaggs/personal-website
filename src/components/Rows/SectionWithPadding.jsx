import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  padding: 17px 0px;
`;

export default function SectionWithPadding({ children }) {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  );
}

SectionWithPadding.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
