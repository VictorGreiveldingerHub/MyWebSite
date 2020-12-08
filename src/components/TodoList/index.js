// == Import npm
import React, { useState } from 'react';

// == Import
import Form from 'src/components/TodoList/Form';
import Counter from 'src/components/TodoList/Counter';
import List from 'src/components/TodoList/List';
import initialTasks from 'src/data/todolist.js';


const TodoList = () => {
  // Hooks 
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskText, setNewTaskText] = useState('');

  const handleCheckboxChange = (taskId) => {
    const newTasks = tasks.map((task) => {
      const taskCopy = { ...task };
      if (taskCopy.id === taskId) taskCopy.done = !taskCopy.done;
      return taskCopy;
    });
    setTasks(newTasks);
  };

  const nbCurrentTasks = tasks.filter((task) => {
    console.log(task.done);
    return !task.done;
  }).length;

  const addTask = () => {
    // Calcul d'un id pour la nouvelle tâche
    const taskIds = tasks.map((task) => task.id);
    const maxId = Math.max(...taskIds);
    const id = maxId + 1;
    // const id = (Math.max(...taskIds)) + 1;

    // Modélisation de la nouvelle tâche
    const taskToAdd = {
      id,
      text: newTaskText,
      done: false,
    };
    const newTasks = [...tasks, taskToAdd];

    // MÀJ du state de l'élément React
    setTasks(newTasks);
    // On vide l'input du formulaire
    setNewTaskText('');
  };

  return (
    <div id="todo">
      <Form 
        text={newTaskText}
        addTask={addTask}
        updateText={setNewTaskText}
      />
      <Counter nbCurrentTasks={nbCurrentTasks}/>
      <List
        handleCheckboxChange={handleCheckboxChange}
        tasks={tasks}
      />
    </div>
  );
};

// == Export
export default TodoList;