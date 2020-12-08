import React from 'react';
import PropTypes from 'prop-types';

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
          placeholder="Ajouter une tâche"
          autoComplete="off"
          onChange={handleChange}
          value={text}
          style={{
            width: "100%",
            color: "white",
            fontSize: "2em",
            height: "3em",
            background: "green",
            border: "1px solid",
            boxShadow: "inset 0 0 25px",
            padding: "1em",
          }}
        />
    </form>
  );
};

Form.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Form;