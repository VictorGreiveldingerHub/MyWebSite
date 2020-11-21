import React from 'react';
import PropTypes from 'prop-types';
import { Container, Menu } from 'semantic-ui-react';
import './styles.scss';

// Test 
import { Link } from 'react-router-dom';

const C = ( {handleItemClick, activeItem} ) => {
    return (
        <div>
            <Container>
            <Menu id="menu" pointing secondary stackable>
                <Link to="/">
                    <Menu.Item
                        id="menu-item"
                        name='accueil'
                        active={activeItem === 'accueil'}
                        onClick={handleItemClick}
                    />
                </Link>
                <Link to="profil">
                    <Menu.Item
                        id="menu-item"
                        name='profil'
                        active={activeItem === 'profil'}
                        onClick={handleItemClick}
                    />
                </Link>
                <Link to="realisations">
                    <Menu.Item
                        id="menu-item"
                        name='réalisations'
                        active={activeItem === 'réalisations'}
                        onClick={handleItemClick}
                    />
                </Link>
            </Menu>
            </Container>
            </div>
    );
};

C.propTypes = {
    handleItemClick: PropTypes.func.isRequired,
    activeItem: PropTypes.bool.isRequired,
};

export default C;