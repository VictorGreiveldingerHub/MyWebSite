import React from 'react';
import PropTypes from 'prop-types';

import {
    Segment,
    Grid,
    Header,
    Divider,
    Button,
    Container,
    Icon,
} from 'semantic-ui-react';

const C = () => {
    return (
        <div>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Pourquoi ce site ?
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Ce site web a pour but de vous montrer mon profil en tant que développeur Javascript Junior dans un premier temps.
                            </p>
                            <p style={{ fontSize: '1.33em' }}>
                                Et dans un second temps quelques travaux que j'ai pu effectuer au cours de ma <a href="https://oclock.io/formations/developpeur-web-fullstack-javascript" target="_blank">formation</a> chez <a href="https://oclock.io/" target="_blank">O'Clock</a>.
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Ce que je recherche
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                De l'experience parce qu'on a tous débuté un jour.
                            </p>
                            <p style={{ fontSize: '1.33em' }}>
                                De la visibilité dans le milieu du travail. (lien vers linkdin + github)
                            </p>
                            <p style={{ fontSize: '1.33em' }}>
                                Une prise au sérieux, je suis très motivé pour travailler, en attendant je developpe mon site (ancre vers les technologies utilisés)
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '10em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Lorem ipsum dolor sit amet
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                That is what they all say about us
                            </p>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Lorem ipsum dolor sit amet
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut bibendum justo. Mauris neque tellus, ultrices sed facilisis at, hendrerit eu justo. Aliquam non quam mi. Nullam imperdiet leo gravida, porta tellus ac, bibendum felis. Sed venenatis nisl sed bibendum volutpat. Etiam eget fringilla magna, non laoreet libero.
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
                        
                    </p>
                    <Button as='a' size='large'>
                        <Icon name="id badge outline"/> Profil
                    </Button>

                    <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='#'>Case Studies</a>
                    </Divider>

                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Ce que je fais
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        De la mise en place des premieres lignes de code à la mise en ligne de mon site dans l'univers de <a href="https://fr.reactjs.org/">React</a>.
                        </p> 
                    <p style={{ fontSize: '1.33em' }}>
                        Des travaux divers et variés regroupant plusieurs technologies ...
                        <Button compact>Voir les technologies <Icon name="arrow right"/></Button>
                    </p>
                    
                    <Button as='a' size='large'>
                        <Icon name="pencil square"/>Réalisations
                    </Button>
                </Container>
            </Segment>
        </div>
    );
};

export default C;