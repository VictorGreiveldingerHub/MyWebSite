import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment } from 'semantic-ui-react';

const C = () => {
    // Pour la gestion de la date en année 
    const now = new Date();
    const year = now.getFullYear();

    return (
        <Container className="footer">
           <Segment.Group horizontal>
                <Segment textAlign='center'>
                    Zone pour les contacts
                </Segment>
                <Segment textAlign='center'>
                   Site réalisé par - Victor Greiveldinger - {year} ©
                </Segment>
           </Segment.Group>
        </Container>
    );
};

C.propTypes = {};

export default C;