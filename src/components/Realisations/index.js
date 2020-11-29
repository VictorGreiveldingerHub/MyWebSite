import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const C = () => {
    
    return (
        <Segment id="realisation-segment" style={{ padding: '8em 0em', borderBottom:'none', margin:'0 300px'}} vertical textAlign='center'>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Projets - Réalisations
                </Header>
            </Container>
        </Segment>
    );
};

C.propTypes = {};

export default C;