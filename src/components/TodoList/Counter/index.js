import React from 'react';
import { Container } from 'semantic-ui-react';

const Counter = ({nbCurrentTasks}) => {
  
  let taskSentence = 'tâche';
  if (nbCurrentTasks > 1) {
    taskSentence += 's';
  };
  return (
    <Container id="todo-counter" style={{
      marginTop: "1em",
      fontSize: "1.3em",
      color: "black",
      borderBottom: "1px solid rgb(233, 232, 232)",
      padding: ".5em 0",
    }}>
    {nbCurrentTasks} {taskSentence} à faire
    </Container>
  );
};

export default Counter;