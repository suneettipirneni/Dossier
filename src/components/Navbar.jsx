import React from 'react';
import PropTypes from 'prop-types';

function NavBar({ items }) {
  return (
    <div>
      {items.map(() => <div />)}
    </div>
  );
}

NavBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavBar;
