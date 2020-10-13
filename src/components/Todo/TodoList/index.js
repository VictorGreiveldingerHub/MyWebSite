import React, { useState } from 'react';

import data from 'src/Data/data.js';
import { nbCurrentTasks } from 'src/utils/tasks';
import Form from 'src/components/Todo/Form';
import Counter from 'src/components/Todo/Counter';
import List from 'src/components/Todo/List';

import './styles.scss';

const Todo = () => {
    const [tasks, setTasks] = useState(data);
    const [newTaskText, setNewTaskText] = useState('');

    const handleCheckboxChange = (taskId) => {
        const newTasks = tasks.map((task) => {
          const taskCopy = { ...task };
          if (taskCopy.id === taskId) taskCopy.done = !taskCopy.done;
          return taskCopy;
        });
        setTasks(newTasks);
      };

      const addTask = () => {
        const taskIds = tasks.map((task) => task.id);
        const maxId = Math.max(...taskIds);
        const id = maxId + 1;
    
        const taskToAdd = {
          id,
          text: newTaskText,
          done: false,
        };
        const newTasks = [...tasks, taskToAdd];
    
        setTasks(newTasks);
        setNewTaskText('');
      };

    const counterLabel = nbCurrentTasks(tasks);

    return (
        <div id="todo">
            <Form
            text={newTaskText}
            addTask={addTask}
            updateText={setNewTaskText}
            />
            <Counter label={counterLabel}/>
            <List 
                tasks={tasks}
                handleCheckboxChange={handleCheckboxChange}/>
        </div>
    );

};

export default Todo;