import React from 'react';
import { Checkbox } from 'semantic-ui-react';
// import PropTypes from 'prop-types';

import './styles.scss';

const List = ({tasks, handleCheckboxChange}) => {

    const tasksJSX = tasks.map((task) => {
        let taskClassNames = 'todo';
        if (task.done) taskClassNames += ' todo--done';
        return (
          <li key={task.text} className={taskClassNames}>
            <Checkbox
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

List.propTypes = {};

export default List;