// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import
import { Container } from 'semantic-ui-react';

// Composant 
const Indication = ( {message} ) => {
    return (
        <Container className="indication-container">La recherche a donné {message} résultats</Container>
    );
};

Indication.propTypes = {
    message: PropTypes.number.isRequired,
};

export default Indication;