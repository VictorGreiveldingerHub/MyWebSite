import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Rail,
    Segment,
    Image,
    Sticky,
    Header,
    Menu,
} from 'semantic-ui-react';

const C = () => {
    return(
        <Grid centered columns={3}>
            <Grid.Column>
            <Segment>
                <Rail position='left'>
                    <Sticky>

                <Menu vertical>
                    <Menu.Item
                    name='promotions'
                    >
                    <Header as='h4'>Profil</Header>
                    </Menu.Item>

                    <Menu.Item
                    name='coupons'
                    >
                    <Header as='h4'>Compétences</Header>
                    </Menu.Item>
                    <Menu.Item
                    name='rebates'
                    >
                    <Header as='h4'>Expériences</Header>
                    </Menu.Item>
                    <Menu.Item
                    name='rebates'
                    >
                    <Header as='h4'>Projets</Header>
                    </Menu.Item>
                    <Menu.Item
                    name='rebates'
                    >
                    <Header as='h4'>Contact</Header>
                    </Menu.Item>
                </Menu>
                    </Sticky>
                </Rail>
            </Segment>
            </Grid.Column>
        </Grid>
    );
};

C.propTypes = {};

export default C;