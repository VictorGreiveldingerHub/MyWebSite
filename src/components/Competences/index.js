import React from 'react';
import PropTypes from 'prop-types';
import {
    Segment,
    Header,
    List,
    Rating,
    Popup,
    Card
} from 'semantic-ui-react';

import './styles.scss';

const C = ( {data} ) => {
    const MAXRATING = 5;
    const competencesJSX = data.map((item) => {
    return (
        <Popup
            size='tiny'
            hideOnScroll
            key={item.id}
            trigger={
                <Segment
                    key={item.id}
                    color={item.color}
                    id="segment-list"
                >
                    <List.Item key={item.id}>
                        <Header as='h3'>{item.text}</Header>
                    </List.Item>
                    <Rating
                        disabled
                        icon='star'
                        defaultRating={item.rating}
                        maxRating={MAXRATING}
                        id="rating-list"
                    />
                </Segment>
            }>
            <Popup.Content>
            <Card
                header={item.header}
                meta={item.meta}
                description={item.description}
            />
            </Popup.Content>
        </Popup>
    );
    });
    return (
        <Segment id="segment-competences" vertical textAlign='center'>
            <Header as='h2'>
                Compétences
            </Header>
            <List id="list-item">
                {competencesJSX}
            </List>
        </Segment>
    );
};

C.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

export default C;