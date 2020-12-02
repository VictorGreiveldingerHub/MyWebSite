// == Import npm
import React, {createRef} from 'react';
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
    height: "689px",
    marginBottom: "0",
    padding: "0",
    position: 'relative',
    backgroundSize: "cover",
    background: "no-repeat fixed center",
    backgroundImage: `url(${BackgroundPicture})`
  };
  
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
          </Container>
        </div>
      </div>
      <Grid centered columns={1}>
      <Grid.Column>
          <Ref innerRef={contextRef}>
        <Segment id="main-segment">
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
                    <Header as='h4'>Profil</Header>
                    </Menu.Item>

                    <Menu.Item
                    name='competences'
                    >
                    <Header as='h4'>Compétences</Header>
                    </Menu.Item>
                    <Menu.Item
                    name='experiences'
                    >
                    <Header as='h4'>Expériences</Header>
                    </Menu.Item>
                    <Menu.Item
                    name='projets'
                    >
                    <Header as='h4'>Projets</Header>
                    </Menu.Item>
                    <Menu.Item
                    name='contact'
                    >
                    <Header as='h4'>Contact</Header>
                    </Menu.Item>
                </Menu>
                </Sticky>
              </Rail>
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
