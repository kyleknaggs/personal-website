import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 195px;
  height: 65px;
  background: hsl(0, 0%, 20%);
  color: hsl(0, 0%, 100%);
  font-family: Gill Sans Nova SemiBold;
  text-transform: uppercase;
  text-decoration: none;
`;

export default function ButtonLink({ children, to }) {
  return (
    <StyledA href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledA>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
