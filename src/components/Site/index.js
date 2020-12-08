// == Import npm
import React, { createRef } from 'react';
import { layoutGenerator } from 'react-break';
import {
  Header,
  Icon,
  Image,
  Container,
  Segment,
  Ref,
  Menu,
  Rail,
  Sticky,
} from 'semantic-ui-react';

import { Roll } from 'react-reveal';

// == Import data & images & styles
import Logo from 'src/assets/Images/Final.svg';
import BackgroundPicture from 'src/assets/Images/ba.jpg';
import dataCompetences from 'src/data/competences.js';
import titles from 'src/data/title.js';
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
    background: "repeat fixed center",
    backgroundImage: `url(${BackgroundPicture})`
  };

  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });

  const OnMobile = layout.is('mobile');
  const OnAtLeastTablet = layout.isAtLeast('tablet');
  const OnAtMostPhablet = layout.isAtMost('phablet');
  const OnDesktop = layout.is('desktop');
  
  const contextRef = createRef();

  const menuJSX = titles.map((title) => {
    return (
      <Menu.Item>
        <Header id="main-header" as='h4'>
          <a href={title.ref}>{title.header}</a>
        </Header>
      </Menu.Item>
    );
  });

  return (
    <div id="app">
      <div id="top" id="background-picture">
        <div style={sectionStyle}>
          <Container id="header-container">
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
              textAlign='center'
              inverted
            >
              <Roll bot cascade>Victor Greiveldinger</Roll>
            </Header>
            <Header as='h2' textAlign='center' inverted>
              <Roll top cascade>Développeur Web & Web Mobile Junior</Roll>
            </Header>
          </Container>
        <a href="#profil-segment">
          <Icon
            id="arrowdown"
            name="angle double down"
            size="huge"
            inverted
          />
        </a>
        </div>
      </div>
        <Ref innerRef={contextRef}>
          <Segment id="main-segment">
            <OnDesktop>
              <Rail internal position='left'>
                <Sticky
                  context={contextRef}
                  offset={50}
                  pushing
                  id="sticky-segment"
                >
              <Menu vertical>
                {menuJSX}
              </Menu>
            </Sticky>
          </Rail>
          </OnDesktop>
          <Profil />
          <Competences data={dataCompetences}/>    
          <Experiences />
          <Realisations />
          <Footer />
        </Segment>
      </Ref>
    </div>
  );
};

// == Export
export default Site;
