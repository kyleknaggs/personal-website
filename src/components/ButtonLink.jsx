import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
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
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
