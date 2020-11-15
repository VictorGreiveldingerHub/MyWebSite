import React from 'react';
import PropTypes from 'prop-types';

import { Segment, Grid, Header, Divider, Button, Container} from 'semantic-ui-react';

const C = () => {
    return (
        <div>
            <Segment style={{ padding: '8em 0em' }} vertical inverted>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }} inverted>
                                Lorem ipsum dolor sit amet
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut bibendum justo. Mauris neque tellus, ultrices sed facilisis at, hendrerit eu justo. Aliquam non quam mi. Nullam imperdiet leo gravida, porta tellus ac, bibendum felis. Sed venenatis nisl sed bibendum volutpat. Etiam eget fringilla magna, non laoreet libero.
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Lorem ipsum dolor sit amet
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut bibendum justo. Mauris neque tellus, ultrices sed facilisis at, hendrerit eu justo. Aliquam non quam mi. Nullam imperdiet leo gravida, porta tellus ac, bibendum felis. Sed venenatis nisl sed bibendum volutpat. Etiam eget fringilla magna, non laoreet libero.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button size='huge'>Check Them Out</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Lorem ipsum dolor sit amet
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                That is what they all say about us
                            </p>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Lorem ipsum dolor sit amet
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut bibendum justo. Mauris neque tellus, ultrices sed facilisis at, hendrerit eu justo. Aliquam non quam mi. Nullam imperdiet leo gravida, porta tellus ac, bibendum felis. Sed venenatis nisl sed bibendum volutpat. Etiam eget fringilla magna, non laoreet libero.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Lorem ipsum dolor sit amet
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut bibendum justo. Mauris neque tellus, ultrices sed facilisis at, hendrerit eu justo. Aliquam non quam mi. Nullam imperdiet leo gravida, porta tellus ac, bibendum felis. Sed venenatis nisl sed bibendum volutpat. Etiam eget fringilla magna, non laoreet libero.
                    </p>
                    <Button as='a' size='large'>
                        Read More
                    </Button>

                    <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='#'>Case Studies</a>
                    </Divider>

                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Lorem ipsum dolor sit amet
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut bibendum justo. Mauris neque tellus, ultrices sed facilisis at, hendrerit eu justo. Aliquam non quam mi. Nullam imperdiet leo gravida, porta tellus ac, bibendum felis. Sed venenatis nisl sed bibendum volutpat. Etiam eget fringilla magna, non laoreet libero.
                    </p>
                    <Button as='a' size='large'>
                        I'm Still Quite Interested
                    </Button>
                </Container>
            </Segment>
        </div>
    );
};

export default C;