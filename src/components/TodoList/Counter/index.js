import React from 'react';

const Counter = ({nbCurrentTasks}) => {
  
  let taskSentence = 'tâche';
  if (nbCurrentTasks > 1) {
    taskSentence += 's';
  };
console.log(taskSentence);
  return (
    <div id="todo-counter" style={{
      marginTop: "2em",
      fontSize: "1.3em",
      color: "white",
      borderBottom: "1px solid white",
      padding: ".5em 0",
    }}>
    {nbCurrentTasks} {taskSentence} à faire
    </div>
  );
};

export default Counter;