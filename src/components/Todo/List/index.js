import React from 'react';
// import PropTypes from 'prop-types';

const List = () => {
    return (
        <ul id="todo-list">
            <li className="todo">
            <input className="todo-check" type="checkbox" />
            <span className="todo-text">Mettre un thème light / dark</span>
            </li>
            <li className="todo">
            <input className="todo-check" type="checkbox" />
            <span className="todo-text">Créer un menu en sidebar avec animation</span>
            </li>
            <li className="todo">
            <input className="todo-check" type="checkbox" />
            <span className="todo-text">Implémenter une app React avec GitHub API</span>
            </li>
            <li className="todo">
            <input className="todo-check" type="checkbox" />
            <span className="todo-text">Chercher un travail au Luxembourg</span>
            </li>
            <li className="todo">
            <input className="todo-check" type="checkbox" />
            <span className="todo-text">Site intégralement consultable sur mobile</span>
            </li>
        </ul>
    );
};

List.propTypes = {};

export default List;