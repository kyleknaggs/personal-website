import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Style from Melanie's website:
// box-shadow: inset 0 -2px 0 0 #d0df00;
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
    animation-duration: 0.5s;
    animation-name: slideUp;
    animation-timing-function: ease-out;
    box-shadow: inset 0 -20px 0 hsl(0, 0%, 20%);
    color: white;
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
    animation-duration: 0.5s;
    animation-name: slideUp;
    animation-timing-function: ease-out;
    box-shadow: inset 0 -20px 0 hsl(0, 0%, 20%);
    color: white;
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
