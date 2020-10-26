import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';

export default function Layout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
