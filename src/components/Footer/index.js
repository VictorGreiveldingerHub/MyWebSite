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
import { motion } from "framer-motion";

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
                            <motion.button
                                id="icon-hover"
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                            <motion.div
                                animate={{
                                    scale: [1, 2, 2, 1, 1],
                                    rotate: [0, 0, 360, 360, 0],
                                    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeatDelay: 1
                                }}
                            >
                                <a href='https://github.com/VictorGreiveldingerHub' target='no_blank'>
                                    <Image id="list-logo" src={Github}/>
                                </a>
                            </motion.div>
                            </motion.button>
                            </List.Item>
                            <List.Item id="list-item">
                            <motion.button
                                id="icon-hover"
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                            <motion.div
                                animate={{
                                    scale: [1, 2, 2, 1, 1],
                                    rotate: [0, 0, 360, 360, 0],
                                    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeatDelay: 1
                                }}
                            >
                                <a href='https://www.linkedin.com/in/victor-greiveldinger-0b21471a7/' target='no_blank'>
                                    <Image id="list-logo" src={Linkedin}/>
                                </a>
                            </motion.div>
                            </motion.button>
                            </List.Item>
                            <List.Item id="list-item">
                            <motion.button
                                id="icon-hover"
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                            <motion.div
                                animate={{
                                    scale: [1, 2, 2, 1, 1],
                                    rotate: [0, 0, 360, 360, 0],
                                    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeatDelay: 1
                                }}
                            >
                                <a href='https://www.facebook.com/victor.greiveldinger?ref=bookmarks' target='no_blank'>
                                    <Image id="list-logo" src={Facebook}/>
                                </a>
                                </motion.div>
                                </motion.button>
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