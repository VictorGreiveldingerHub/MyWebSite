import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Counter = ({ label }) => {
  console.log('refresh de Counter');

  return (
    <div id="todo-counter">{label}</div>
  );
};

Counter.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Counter;
