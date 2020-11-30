import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Segment,
    Divider,
    Grid,
    List,
    Image,
    Header,
} from 'semantic-ui-react';
import './styles.scss';

// Import des logos nécessaire
import Logo from 'src/assets/Images/LogoNoir.svg';
import Github from 'src/assets/Images/github.png';
import Linkedin from 'src/assets/Images/linkedin.png';
import Facebook from 'src/assets/Images/facebook1.png';

const C = () => {
    // Pour la gestion de la date en année 
    const now = new Date();
    const year = now.getFullYear();

    return (
        <Segment vertical id="footer">
            <Divider horizontal>
                <img src={Logo}/>
            </Divider>
            <Grid columns={3} divided>
                <Grid.Row stretched style={{marginBottom: '2em'}}>
                    <Grid.Column />
                    <Grid.Column>
                        <List id="list" horizontal>
                            <List.Item id="list-item">
                                <a href='https://github.com/VictorGreiveldingerHub' target='no_blank'>
                                    <Image id="list-logo" src={Github}/>
                                </a>
                            </List.Item>
                            <List.Item id="list-item">
                                <a href='https://www.linkedin.com/in/victor-greiveldinger-0b21471a7/' target='no_blank'>
                                    <Image id="list-logo" src={Linkedin}/>
                                </a>
                            </List.Item>
                            <List.Item id="list-item">
                                <a href='https://www.facebook.com/victor.greiveldinger?ref=bookmarks' target='no_blank'>
                                    <Image id="list-logo" src={Facebook}/>
                                </a>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column />
                </Grid.Row>
            </Grid>
            <Container id="last" textAlign="center">
                <Header as='h4'>Site réalisé par - Victor Greiveldinger - {year} ©</Header> 
            </Container>
        </Segment>
    );
};

C.propTypes = {};

export default C;