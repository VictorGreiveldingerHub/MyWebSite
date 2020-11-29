import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment, Grid, Header, List } from 'semantic-ui-react';

const C = () => {
    // Pour la gestion de la date en année 
    const now = new Date();
    const year = now.getFullYear();

    return (
        <Segment inverted vertical>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                    <Grid.Column width={5}>
                        <Header inverted as='h4' content='Contact' />
                        <List link inverted>
                            <List.Item icon='mail' content='victorgreiveldinger@gmail.com' />
                            <List.Item icon='marker' content='Metz, Luxembourg' />
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Container textAlign='center'>
                            <p>Site réalisé par - Victor Greiveldinger - {year} ©</p>
                        </Container>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    );
};

C.propTypes = {};

export default C;