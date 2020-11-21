import React from 'react';
import { Grid, Segment, Modal, Button, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const C = ( {handleModalClick} ) => {
    
    return (
        <div className="carousel">
            <Grid columns='equal'>
                <Grid.Column>
                    <Segment className="previous-work">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut bibendum justo. Mauris neque tellus, ultrices sed facilisis at, hendrerit eu justo. Aliquam non quam mi. Nullam imperdiet leo gravida, porta tellus ac, bibendum felis. Sed venenatis nisl sed bibendum volutpat. Etiam eget fringilla magna, non laoreet libero.
                    </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Segment className="active-work">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut bibendum justo. Mauris neque tellus, ultrices sed facilisis at, hendrerit eu justo. Aliquam non quam mi. Nullam imperdiet leo gravida, porta tellus ac, bibendum felis. Sed venenatis nisl sed bibendum volutpat. Etiam eget fringilla magna, non laoreet libero.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut bibendum justo. Mauris neque tellus, ultrices sed facilisis at, hendrerit eu justo. Aliquam non quam mi. Nullam imperdiet leo gravida, porta tellus ac, bibendum felis. Sed venenatis nisl sed bibendum volutpat. Etiam eget fringilla magna, non laoreet libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut bibendum justo. Mauris neque tellus, ultrices sed facilisis at, hendrerit eu justo. Aliquam non quam mi. Nullam imperdiet leo gravida, porta tellus ac, bibendum felis. Sed venenatis nisl sed bibendum volutpat. Etiam eget fringilla magna, non laoreet libero.
                        <Modal
                            onClick={handleModalClick}
                            trigger={<Button>Description</Button>}
                        >
                            <Modal.Header>Select a Photo</Modal.Header>
                            <Modal.Content image>
                                <Modal.Description>
                                <Header>Default Profile Image</Header>
                                <p>
                                    We've found the following gravatar image associated with your e-mail
                                    address.
                                </p>
                                <p>Is it okay to use this photo?</p>
                                </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='black' onClick={() => setOpen(false)}>
                                    Nope
                                </Button>
                                <Button
                                    content="Yep, that's me"
                                    labelPosition='right'
                                    icon='checkmark'
                                    onClick={() => setOpen(false)}
                                    positive
                                />
                            </Modal.Actions>
                        </Modal>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment className="next-work">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut bibendum justo. Mauris neque tellus, ultrices sed facilisis at, hendrerit eu justo. Aliquam non quam mi. Nullam imperdiet leo gravida, porta tellus ac, bibendum felis. Sed venenatis nisl sed bibendum volutpat. Etiam eget fringilla magna, non laoreet libero.
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    );
};

C.propTypes = {
    handleModalClick: PropTypes.func.isRequired,
};

export default C;