import React from 'react';
import {
    Segment,
    Container,
    Header,
} from 'semantic-ui-react';
import { Roll } from 'react-reveal';
import { Slider } from 'react-slick';
import PropTypes from 'prop-types';
import './styles.scss';

const C = () => {
    return (
        <Segment id="realisation-segment" vertical textAlign='center'>
            <Container text>
                <Header as='h2'>
                    <Roll right cascade>
                        Projets
                    </Roll>
                </Header>
                    
            </Container>
        </Segment>
    );
};

C.propTypes = {};

export default C;