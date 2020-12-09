import React from 'react';

const Counter = ({nbCurrentTasks}) => {
  
  let taskSentence = 'tâche';
  if (nbCurrentTasks > 1) {
    taskSentence += 's';
  };
  return (
    <div id="todo-counter" style={{
      marginTop: "1em",
      fontSize: "1.3em",
      color: "black",
      borderBottom: "1px solid rgb(233, 232, 232)",
      padding: ".5em 0",
    }}>
    {nbCurrentTasks} {taskSentence} à faire
    </div>
  );
};

export default Counter;