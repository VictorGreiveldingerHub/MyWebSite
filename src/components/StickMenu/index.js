import React from 'react';
import PropTypes from 'prop-types';
import {
    Rail,
    Sticky,
    Header,
    Menu,
} from 'semantic-ui-react';

const C = () => {
    return(
        <Rail position='right'>
                <Sticky
                  bottomOffset={50}
                  offset={50}
                  pushing
                >
                    <Menu vertical>
                        <Menu.Item
                        name='promotions'
                        >
                        <Header as='h4'>Promotions</Header>
                        <p>Check out our new promotions</p>
                        </Menu.Item>
                        <Menu.Item
                        name='coupons'
                        >
                        <Header as='h4'>Coupons</Header>
                        <p>Check out our collection of coupons</p>
                        </Menu.Item>
                        <Menu.Item
                        name='rebates'
                        >
                        <Header as='h4'>Rebates</Header>
                        <p>Visit our rebate forum for information on claiming rebates</p>
                        </Menu.Item>
                    </Menu>
                </Sticky>
              </Rail>
    );
};

C.propTypes = {};

export default C;