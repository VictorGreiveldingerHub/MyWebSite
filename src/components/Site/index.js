// == Import npm
import React, { useState, useEffect } from 'react';
import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

// == Components Imports
import HeaderLeft from 'src/components/HeaderLeft';
import Header from 'src/components/Header';
import Description from 'src/components/Description';
import Profil from 'src/components/Profil';
import Progression from 'src/components/Progression';

// == Import
import personnalData from 'src/Data/data.js';
import 'semantic-ui-css/semantic.min.css'
import './styles.scss';


const Site = () => {

  const [value, setValue] = useState(false);

  const handleChange = (evt) => {
    setValue(evt.target.value);
  }
  const cleanData = personnalData.map(data => {
    return {
      author: data.author,
      birthday: data.birthday,
      description: data.description,
    };
  });
  
  return (
    <div className="app">
      {/* <HeaderLeft /> */}
      <Header value={value} handleChange={handleChange}/>
      <Profil data={cleanData}/>
      <Description />
      {/* <Progression /> */}
    </div>
  );
};

// == Export
export default Site;
