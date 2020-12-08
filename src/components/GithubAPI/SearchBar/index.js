// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import 
import { Form, Input, Segment } from 'semantic-ui-react';

// Composant 
const SearchBar = ({ handleChange, value, handleSubmit, loading}) => {
    return (
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <Input
                        icon='search' 
                        iconPosition='left' 
                        placeholder='Saisir une valeur => React par exemple'
                        value={value}
                        onChange={handleChange}
                        loading={loading}
                    />
                </Form.Field>
            </Form>
        </Segment>
    );
};

SearchBar.propTypes = {
    loading: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;