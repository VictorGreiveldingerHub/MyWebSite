import React from 'react';
import { List as Liste } from 'semantic-ui-react'; 
import PropTypes from 'prop-types';

import './styles.scss';

// Dans List, on veut recuperer :
//  - le nom de la device cliqué,


const List = ({initialCurrencies, handleClick}) => {
    
    const currenciesJSX = initialCurrencies.map((currencie) => {
        return (
            <Liste.Item id="li-converter" key={currencie.name}>
                <button 
                    onClick={() => {handleClick(currencie.name, currencie.rate)}}
                >{currencie.name}</button>
            </Liste.Item>
        );
    });

    return (
        <Liste id="list-converter">
            {currenciesJSX}
        </Liste>   
    );
};

// Mise en place de proptypes pour le tableau d'objet.
List.propTypes = {
    initialCurrencies: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            rate: PropTypes.number.isRequired,
        })
    ).isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default List;