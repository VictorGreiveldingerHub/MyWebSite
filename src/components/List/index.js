import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const List = ({ handleCheckboxChange, tasks }) => {
  console.log('refresh de List');

  const tasksJSX = tasks.map((task) => {
    let taskClassNames = 'todo';
    if (task.done) taskClassNames += ' todo--done';
    return (
      <li key={task.text} className={taskClassNames}>
        <input
          className="todo-check"
          type="checkbox"
          onChange={() => { handleCheckboxChange(task.id); }}
          checked={task.done}
        />
        <span className="todo-text">{task.text}</span>
      </li>
    );
  });

  return (
    <ul id="todo-list">
      {tasksJSX}
    </ul>
  );
};

List.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
  // TODO: améliorer la validation des tâches
  tasks: PropTypes.array.isRequired,
};

export default List;
