// == Import npm
import React, { createRef } from 'react';
import { layoutGenerator } from 'react-break';
import {
  Header,
  Icon,
  Image,
  Container,
  Segment,
  Grid,
  Ref,
  Menu,
  Rail,
  Sticky,
} from 'semantic-ui-react';

import { Zoom, Roll } from 'react-reveal';

// == Import data & images & styles
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

  return (
    <div id="app">
      <div id="top" className="background-picture">
        <div style={sectionStyle}>
          <Container style={{padding: '13%'}}>
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
            <Zoom top cascade>
              Victor Greiveldinger
            </Zoom>
            </Header>
            <Header
              as='h2'
              content=''
              textAlign='center'
              inverted
            >
            <Roll top cascade>
              Développeur Web & Web Mobile Junior
            </Roll>
            </Header>
            <OnDesktop>
              <a href="#profil-segment">
                <Icon id="arrowdown" inverted color="white" name="angle double down" size="huge" />
              </a>
            </OnDesktop>
                      
          </Container>
        </div>
      </div>
      <Grid centered columns={1}>
        <Grid.Column>
          <Ref innerRef={contextRef}>
            <Segment id="main-segment">
            <OnDesktop>
              <Rail position='left'>
                <Sticky
                  bottomOffset={50}
                  context={contextRef}
                  offset={25}
                  pushing
                  id="sticky-segment"
                >
                  <Menu vertical style={{width:'144px', marginLeft:'63px'}}>
                    <Menu.Item
                    name='profil'
                    >
                    <Header as='h4'>
                      <a href="#profil-segment">
                        Profil
                      </a>
                    </Header>
                    </Menu.Item>

                    <Menu.Item
                    name='competences'
                    >
                    <Header as='h4'>
                      <a href="#segment-competences">
                        Compétences
                      </a>
                    </Header>
                    </Menu.Item>
                    <Menu.Item
                    name='experiences'
                    >
                    <Header as='h4'>
                      <a href="#experience-segment">
                        Expériences
                      </a>
                    </Header>
                    </Menu.Item>
                    <Menu.Item
                    name='projets'
                    >
                    <Header as='h4'>
                      <a href="#realisation-segment">
                        Projets
                      </a>
                    </Header>
                    </Menu.Item>
                    <Menu.Item
                    name='contact'
                    >
                    <Header as='h4'>
                      <a href="#footer">
                        Contact
                      </a>
                    </Header>
                    </Menu.Item>
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
        </Grid.Column>
      </Grid>
    </div>
  );
};

// == Export
export default Site;
