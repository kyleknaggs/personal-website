import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  color: hsl(0, 0%, 20%);
`;

export default function BodyLink({ children, to }) {
  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
}

BodyLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
