// == Npm Import
import React from 'react';
import {
    Container,
    Segment,
    Divider,
    List,
    Image,
    Header,
} from 'semantic-ui-react';
import { Fade, Roll } from "react-reveal";
import './styles.scss';

// Import des logos nécessaire
import Logo from 'src/assets/Images/LogoNoir.svg';
import Github from 'src/assets/Images/github.svg';
import Linkedin from 'src/assets/Images/linkedin.svg';
import Facebook from 'src/assets/Images/facebook.svg';

const C = () => {
    // Pour la gestion de la date en année 
    const now = new Date();
    const year = now.getFullYear();

    return (
        <Segment vertical id="contact-segment">
            <Divider horizontal>
                <Roll bottom>
                    <img src={Logo}/>
                </Roll>
            </Divider>
            <List id="list">
                <Fade top cascade>
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
                </Fade>
            </List>  
            <Container id="last" textAlign="center">
                <Header as='h4'>Site réalisé par - Victor Greiveldinger - {year} ©</Header> 
            </Container>
        </Segment>
    );
};

C.propTypes = {};

export default C;