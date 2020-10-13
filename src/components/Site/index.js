// == Import npm
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

// == Components Imports
import Header from 'src/components/Header';
import Description from 'src/components/Description';
import Profil from 'src/components/Profil';

// == Import
import 'semantic-ui-css/semantic.min.css'
import './styles.scss';


const Site = () => {
  return (
    <div className="app">
      <Header />
      <Container>
        <Switch>
          <Route exact path="/"><Description /></Route>
          <Route exact path ="/profil" ><Profil /></Route>
          <Route exact path="/travaux"></Route>
        </Switch>
      </Container>
    </div>
  );
};

// == Export
export default Site;
