// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Segment,
  Grid,
  Header,
  Divider,
  Button,
  Container,
  Icon,
  Image,
} from 'semantic-ui-react';
// == Import

import Logo from 'src/assets/Images/Final.svg';
import BackgroundPicture from 'src/assets/Images/back.svg';
import Profil from 'src/assets/Images/profil.png';
import './styles.scss';

// == Components Imports
import Footer from 'src/components/Footer';

const Site = () => {
  var sectionStyle = {
    width: "100%",
    height: "666px",
    marginBottom: "0",
    padding: "0",
    position: 'relative',
    backgroundSize: "cover",
    background: "no-repeat fixed center right",
    backgroundImage: `url(${BackgroundPicture})`
  };
  
  return (
    <div className="app">
      <div id="top" className="background-picture">
        <div style={sectionStyle}/>
              <Grid container centered id="name-container" mobile={16} tablet={8} computer={4}>
                <Grid.Column  width={10}>
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
                    style={{
                        fontSize: '63px',
                        margin: '20px 0px 10px',
                        borderBottom: '0.1px solid #FFFFFF',
                        paddingBottom: '20px',
                    }}
                />
                <Header
                    as='h2'
                    content='Développeur Web & Web Mobile Junior'
                    textAlign='center'
                    inverted color="white"
                    style={{fontSize: '28px', margin: 'Opx 0px 15px'}}
                />
                </Grid.Column>
            </Grid>
            <div className="overlay">
              <Icon id="arrowdown" centered inverted color="white" name="angle double down" size="huge"/>
            </div>
          </div>
            <Segment style={{padding: '8em 0em'}} vertical>
                <Container text centered>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                      Profil
                    </Header>
                    <Header as='h4' centered style={{ fontSize: '1.33em' }}>
                        Junior & Motivé
                    </Header>
                </Container>
            </Segment>
            <Segment vertical>
              <Container>
                <Grid.Column>
                  <Grid.Row width={5}>
                    <Header as='h4'>
                      Qui suis je ?
                    </Header>
                    <Container text>
                      Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem.
                    </Container>
                  </Grid.Row>
                  <Grid.Column width={5}>
                    <Image src={Profil} size='small' circular/>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <Header as='h4'>
                      Détails
                    </Header>
                    <Container text>
                    Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
                    </Container>
                  </Grid.Column>
                </Grid.Column>
              </Container>
            </Segment>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Compétences
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                    Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
                    </p>
                    <Button as='a' size='large'>
                        <Link to="/profil">
                            <Icon name="id badge outline"/> Profil
                        </Link>
                    </Button>
                </Container>
            </Segment>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Expériences
                    </Header>
                </Container>
            </Segment>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Projets - Réalisations
                    </Header>
                    <Button as='a' size='large'>
                        <Link to="/profil">
                            <Icon name="id badge outline"/> Profil
                        </Link>
                    </Button>
                </Container>
            </Segment>
      <Footer />
    </div>
  );
};

// == Export
export default Site;
