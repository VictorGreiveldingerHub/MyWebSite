import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Form = ({ text, addTask, updateText }) => {
  console.log('refresh de Form');

  // Callback du DOM (gère un événement submit détecté par le navigateur)
  const handleSubmit = (evt) => {
    evt.preventDefault(); // empêcher le refresh auto du navigateur
    addTask();
  };

  const handleChange = (evt) => {
    const currentText = evt.currentTarget.value;
    console.log(currentText);
    updateText(currentText);
  };

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo-input"
        placeholder="Ajouter une tâche"
        autoComplete="off"
        onChange={handleChange}
        value={text}
      />
    </form>
  );
};

Form.propTypes = {
  text: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
  updateText: PropTypes.func.isRequired,
};

export default Form;
