import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from 'src/assets/Images/Final.svg';
import BackgroundPicture from 'src/assets/Images/back.svg';

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

const C = () => {
    return (
        <div>
            <div id="top">
                <Image src={BackgroundPicture} alt="freelancer" />
            </div>
            <Container id="name-container">
                <Image
                    src={Logo}
                    size='tiny'
                    alt="Logo personnel"
                    id="logo"
                    centered
                />

                <Header
                    as='h1'
                    content='Victor Greiveldinger'
                    textAlign='center'
                />
                <Header
                    as='h2'
                    content='Développeur Web & Web Mobile Junior'
                    textAlign='center'
                />
            </Container>
            <Icon name="angle double down" size="huge"/>
           
            <Segment vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column floated="left" width={6} id="first">
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Pourquoi ce site ?
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Ce site web a pour but de vous montrer mon profil en tant que développeur Javascript Junior dans un premier temps.
                            </p>
                            <p style={{ fontSize: '1.33em' }}>
                                Et dans un second temps quelques travaux que j'ai pu effectuer au cours de ma <a href="https://oclock.io/formations/developpeur-web-fullstack-javascript" target="_blank">formation</a> chez <a href="https://oclock.io/" target="_blank">O'Clock</a>.
                            </p>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>

                        <Grid.Column floated='right' width={6} id="second">
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='#'>En savoir plus</a>
                    </Divider>

            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '10em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                        Ce que je fais
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        De la mise en place des premieres lignes de code à la mise en ligne de mon site dans l'univers de <a href="https://fr.reactjs.org/">React</a>.
                        </p> 
                    <p style={{ fontSize: '1.33em' }}>
                        Des travaux divers et variés regroupant plusieurs technologies ...
                    </p>
                    
                    <Button as='a' size='large'>
                        <Icon name="pencil square"/>Réalisations
                    </Button>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em'}}>
                                Ce que je recherche
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                De l'experience parce qu'on a tous débuté un jour.
                            </p>
                            <p style={{ fontSize: '1.33em' }}>
                                De la visibilité dans le milieu du travail. (lien vers linkdin + github)
                            </p>
                            <p style={{ fontSize: '1.33em' }}>
                                Une prise au sérieux, je suis très motivé pour travailler, en attendant je developpe mon site
                            </p>
                            <p>
                                <Button compact>Voir les technologies du site<Icon name="arrow right"/></Button>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Mon profil
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Je m'appelle Victor, 25 ans et tout nouveau dans le milieu du développement web
                    </p>
                    <Button as='a' size='large'>
                        <Link to="/profil">
                            <Icon name="id badge outline"/> Profil
                        </Link>
                    </Button>
                </Container>
            </Segment>
        </div>
    );
};

export default C;