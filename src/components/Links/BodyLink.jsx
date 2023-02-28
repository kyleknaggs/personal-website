import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Add a hover animation to both types of links on desktop devices. Don't apply
// this styling to mobile devices as hover styles are not relevant to them
const StyledA = styled.a`
  box-shadow: inset 0 -1px 0 hsl(0, 0%, 20%);
  color: hsl(0, 0%, 20%);
  text-decoration: none;

  @keyframes slideUp {
    from {
      box-shadow: inset 0 -2px 0 white;
      color: hsl(0, 0%, 20%);
    }
  
    to {
      box-shadow: inset 0 -20px 0 hsl(0, 0%, 20%);
      color: white;
    }
  }

  :hover {
    @media (min-width: 1200px) {
      animation-duration: 0.5s;
      animation-name: slideUp;
      animation-timing-function: ease-out;
      box-shadow: inset 0 -20px 0 hsl(0, 0%, 20%);
      color: white;
    }
  }
`;

const StyledLink = styled(Link)`
  box-shadow: inset 0 -1px 0 hsl(0, 0%, 20%);
  color: hsl(0, 0%, 20%);
  text-decoration: none;

  @keyframes slideUp {
    from {
      box-shadow: inset 0 -2px 0 white;
      color: hsl(0, 0%, 20%);
    }

    to {
      box-shadow: inset 0 -20px 0 hsl(0, 0%, 20%);
      color: white;
    }
  }

  :hover {
    @media (min-width: 1200px) {
      animation-duration: 0.5s;
      animation-name: slideUp;
      animation-timing-function: ease-out;
      box-shadow: inset 0 -20px 0 hsl(0, 0%, 20%);
      color: white;
    }
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
