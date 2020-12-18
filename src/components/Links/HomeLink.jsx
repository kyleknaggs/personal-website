import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  color: hsl(0, 0%, 20%);
  text-decoration: none;
  font-size: 22px;

  :hover {
    color: #000;
  }

  @media (min-width: 576px) {
    font-size: 28px;
  }
`;

export default function HomeLink({ children, to }) {
  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
}

HomeLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
