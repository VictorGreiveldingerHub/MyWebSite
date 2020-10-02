// == Import npm
import React from 'react';

// == Import
import reactLogo from './react-logo.svg';
import './styles.scss';


const Site = () => {
  
  return (
    <div className="app">
      <img id="react" src={reactLogo} alt="react logo" />
      <h1>Mon site web</h1>
    </div>
  );
};

// == Export
export default Site;
