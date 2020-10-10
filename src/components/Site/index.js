// == Import npm
import React, { useState } from 'react';

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
  // Pour le chargement asynchrone des résultats 
  const [loading, setLoading] = useState(false);

  return (
    <div className="app">
      <HeaderLeft />
      <Header />
      {/* <Profil 
        picture={personnalData.author}
        birthday={personnalData.birthday}
        description={personnalData.description}
      /> */}
      <Description />
      {/* <Progression /> */}
    </div>
  );
};

// == Export
export default Site;
