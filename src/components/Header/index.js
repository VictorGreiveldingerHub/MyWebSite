import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Image, Menu } from 'semantic-ui-react';

// Test 
import { Link } from 'react-router-dom';

import Logo from 'src/assets/Images/Final.svg';

const C = ( {handleItemClick, activeItem} ) => {
    return (
        <Segment className="header">
            <Menu className="menu-fixe" pointing secondary stackable>
                <Link to="/">
                    <Menu.Item
                        name='accueil'
                        active={activeItem === 'accueil'}
                        onClick={handleItemClick}
                    />
                </Link>
                <Link to="profil">
                    <Menu.Item
                        name='profil'
                        active={activeItem === 'profil'}
                        onClick={handleItemClick}
                    />
                </Link>
                <Link to="realisations">
                    <Menu.Item
                        name='réalisations'
                        active={activeItem === 'réalisations'}
                        onClick={handleItemClick}
                    />
                </Link>
            </Menu>
            <Image src={Logo} size='tiny'/>
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