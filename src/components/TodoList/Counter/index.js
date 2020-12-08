import React from 'react';
// import './styles.scss'; 

const Counter = ({nbCurrentTasks}) => {
  
  let taskSentence = 'tâche';
  if (nbCurrentTasks > 1) {
    taskSentence += 's';
  };
console.log(taskSentence);
  return (
    <div id="todo-counter">{nbCurrentTasks} {taskSentence} à faire</div>
  );
};

export default Counter;