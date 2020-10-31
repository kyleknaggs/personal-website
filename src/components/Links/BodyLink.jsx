import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledA = styled.a`
  color: hsl(0, 0%, 20%);
`;

const StyledLink = styled(Link)`
  color: hsl(0, 0%, 20%);
  :hover {
    color: #000;
  }
`;

export default function BodyLink({ children, to, external }) {
  if (external) {
    return (
      <StyledA href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </StyledA>
    );
  }

  return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
}

BodyLink.defaultProps = {
  external: false,
};

BodyLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  external: PropTypes.bool,
};
