import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'src/assets/Images/LogoNoir.svg';
import { Container, Segment, Divider, Icon, Header, List, Image, Grid, Button, Form } from 'semantic-ui-react';
import './styles.scss';

const C = () => {
    // Pour la gestion de la date en année 
    const now = new Date();
    const year = now.getFullYear();

    return (
        <Segment vertical id="footer">
            <Divider horizontal><img src={Logo}/></Divider>
            <Container textAlign='center' >
                <List horizontal>
                    <List.Item>
                        <Header>victorgreiveldinger@gmail.com</Header>
                    </List.Item>
                    <List.Item>
                        <Icon name="github" size="medium" href="https://github.com/VictorGreiveldingerHub" target="no_blank"></Icon>
                    </List.Item>
                </List>
            </Container>
        </Segment>
    );
};

C.propTypes = {};

export default C;
            // <Header  as='h4' content='Contact' />
            //     <List link >
            //         <List.Item icon='mail' content='victorgreiveldinger@gmail.com' />
            //         <List.Item icon='marker' content='Metz, Luxembourg' />
            //     </List>
            //     <Container textAlign='right'>
            //         <p>Site réalisé par - Victor Greiveldinger - {year} ©</p>
            //     </Container>