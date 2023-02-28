import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Style from Melanie's website:
// box-shadow: inset 0 -2px 0 0 #d0df00;
const StyledA = styled.a`
  color: hsl(0, 0%, 20%);
  text-decoration: none;
  box-shadow: inset 0 -1px 0 hsl(0, 0%, 20%);

  :hover {
    color: #000;
    box-shadow: inset 0 -1px 0 #000;
  }
`;

const StyledLink = styled(Link)`
  color: hsl(0, 0%, 20%);
  text-decoration: none;
  box-shadow: inset 0 -1px 0 hsl(0, 0%, 20%);

  :hover {
    color: #000;
    box-shadow: inset 0 -1px 0 #000;
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
