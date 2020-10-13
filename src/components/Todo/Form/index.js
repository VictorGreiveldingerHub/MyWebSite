import React from 'react';

const Form = () => {
    return (
        <form id="todo-form">
          <input
            type="text"
            id="todo-input"
            placeholder="Ajouter une tâche"
            autoComplete="off"
          />
        </form>
      );

};

export default Form;