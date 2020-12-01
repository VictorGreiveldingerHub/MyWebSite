import React from 'react';
import {
    Segment,
    Container,
    Header
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

const C = () => {
    
    return (
        <Segment id="realisation-segment" vertical textAlign='center'>
            <Container text>
                <Header as='h2'>
                    Projets
                </Header>
            </Container>
        </Segment>
    );
};

C.propTypes = {};

export default C;