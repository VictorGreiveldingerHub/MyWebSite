// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import Repository from 'src/components/GithubAPI/Repository';

// Import
import { Card, Segment } from 'semantic-ui-react';

// Composant 
const CardList = (
    {
        items,
        loading
    }) => {
    const cardListJSX = items.map((item) => {
        return (
            <Repository
                key={item.id}
                item={item.owner} 
                {...item}
            />
        );
    });
    

    return (
        <Segment loading={loading}>
            <Card.Group itemsPerRow={3}>
                {cardListJSX}
            </Card.Group>
        </Segment>
    );
};

CardList.propTypes = {
    loading: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
};

export default CardList;