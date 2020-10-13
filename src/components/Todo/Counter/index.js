import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({label}) => {
    return (
        <div id="todo-counter">{label}</div>
    );
};

Counter.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Counter;