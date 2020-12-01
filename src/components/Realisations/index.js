import React from 'react';
import {
    Segment,
    Container,
    Header,
    Reveal,
    Image,
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
                <Reveal animated='move'>
                    <Reveal.Content visible>
                        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/chris.jpg' size='small' />
                    </Reveal.Content>
                </Reveal>
            </Container>
        </Segment>
    );
};

C.propTypes = {};

export default C;