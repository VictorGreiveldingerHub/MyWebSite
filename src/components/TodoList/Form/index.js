import React from 'react';
import PropTypes from 'prop-types';

// import 'src/components/Form/styles.scss'; 

const Form = ({ text, addTask, updateText }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault(); // empêcher le refresh auto du navigateur
    addTask();
  };

  const handleChange = (evt) => {
    const currentText = evt.currentTarget.value;
    updateText(currentText);
  };

  return (
    <form className="add" onSubmit={handleSubmit}>
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
};

export default Form;