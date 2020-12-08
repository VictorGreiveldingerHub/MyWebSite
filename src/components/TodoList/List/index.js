import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const List = ({handleCheckboxChange, tasks} ) => {
// On récupère la data grâce aux props

// On map sur les tâches pour retourner une liste
const taskJSX = tasks.map(task => {
    let taskClassNames = 'todo';
    if (task.done) taskClassNames += ' todo--done';

    return (
    <li key={task.id} className={taskClassNames}>
        <input
          className="todo-check"
          type="checkbox"
          onChange={() => {handleCheckboxChange(task.id)}}
          checked={task.done}
        />
        <span className="todo-text">{task.text}</span>
    </li>
    );
});

return (
    <ul className="todo-list">
        {taskJSX}
    </ul>
  );
};

// On vérifie les props ...
List.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
};

export default List;