import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Image, Menu } from 'semantic-ui-react';

import Logo from 'src/assets/Images/Final.svg';

const C = ( {handleItemClick, activeItem} ) => {
    return (
        <Segment className="header">
            <Menu pointing secondary>
                <Menu.Item
                    name='accueil'
                    active={activeItem === 'accueil'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='profil'
                    active={activeItem === 'profil'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='réalisations'
                    active={activeItem === 'réalisations'}
                    onClick={handleItemClick}
                />
                <Image src={Logo} size='tiny' centered/>
            </Menu>
            <Header
                className="header-name"
                as='h1'
                content='Victor Greiveldinger'
                textAlign='center'
                style={{
                    fontSize: '3em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '2em',
                  }}
            />
            <Header
                className="header-work"
                as='h2'
                content='Développeur Web & Web Mobile Junior'
                textAlign='center'
                style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1em',
                  }}
            />
        </Segment>
    );
};

C.propTypes = {
    handleItemClick: PropTypes.func.isRequired,
    activeItem: PropTypes.bool.isRequired,
};

export default C;