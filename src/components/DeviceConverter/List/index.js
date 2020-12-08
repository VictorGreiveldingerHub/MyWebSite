import React from 'react';
import PropTypes from 'prop-types';

// import './styles.scss';

// Dans List, on veut recuperer :
//  - le nom de la device cliqué,


const List = ({initialCurrencies, handleClick}) => {
    
    const currenciesJSX = initialCurrencies.map((currencie) => {
        return (
            <li key={currencie.name}>
                <button 
                    onClick={() => {handleClick(currencie.name, currencie.rate)}}
                >{currencie.name}</button>
            </li>
        );
    });

    return (
        <ul className="list">
            {currenciesJSX}
        </ul>
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