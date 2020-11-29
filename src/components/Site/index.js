// == Import npm
import React from 'react';
import {
  Segment,
  Header,
  Container,
  Icon,
  Image,
  Rail,
} from 'semantic-ui-react';
// == Import

import Logo from 'src/assets/Images/Final.svg';
import BackgroundPicture from 'src/assets/Images/ba.jpg';
import dataCompetences from 'src/data/competences.js';
import './styles.scss';

// == Components Imports
import Profil from 'src/components/Profil';
import Competences from 'src/components/Competences';
import Experiences from 'src/components/Experiences';
import Realisations from 'src/components/Realisations';
import Footer from 'src/components/Footer';

const Site = () => {
  var sectionStyle = {
    width: "100%",
    height: "666px",
    marginBottom: "0",
    padding: "0",
    position: 'relative',
    backgroundSize: "cover",
    background: "no-repeat fixed center",
    backgroundImage: `url(${BackgroundPicture})`
  };
  
  return (
    <div id="app">
      <div id="top" className="background-picture">
        <div style={sectionStyle}>
          <Image
            src={Logo}
            size='tiny'
            alt="Logo personnel"
            id="logo"
            centered
          />
          <Header
            as='h1'
            id="name-header"
            content='Victor Greiveldinger'
            textAlign='center'
            inverted
          />
          <Header
            as='h2'
            content='Développeur Web & Web Mobile Junior'
            textAlign='center'
            inverted
          />
            <Icon id="arrowdown" inverted color="white" name="angle double down" size="huge"/>
        </div>
      </div>
      <Profil />
      <Competences data={dataCompetences}/>    
      <Experiences />
      <Realisations />
      <Footer />
    </div>
  );
};

// == Export
export default Site;
