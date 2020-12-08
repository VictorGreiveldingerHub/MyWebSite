import React from 'react';
import PropTypes from 'prop-types';
import { Header, Input, Form as Formulaire } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
// import './styles.scss';

/* Prendre en compte le formulaire de l(utilisateur )
    Par défault la valeur est définie en € et est de 1,
    Si l'utilisateur change la valeur du formulaire --> on recup la valeur (toujours en €)
    Et on vient faire une simple multiplication selon le montant
    Donc le but de ce composant = Recuperer la valeur du client pour l'utiliser dans le composant Result 
*/


const Form = ( {value, handleChangeInput}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault(); // empêcher le refresh auto du navigateur
    };

    return (
        <div className="form" onSubmit={handleSubmit}>
            <Header as="h1">Convertisseur</Header>
            <Formulaire id="todo-form">
                <Input
                    type="text"
                    label={{ basic: true, content: '€' }}
                    labelPosition='right'
                    placeholder="Valeur initiale"
                    autoComplete="off"
                    onChange={(e) => {handleChangeInput(e.target.value)}}
                    value={value}
                />
            </Formulaire>
        </div>
    );
};

Form.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Form;