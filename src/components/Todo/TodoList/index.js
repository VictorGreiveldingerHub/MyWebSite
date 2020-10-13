import React from 'react';

import data from 'src/Data/data.js'
import Form from 'src/components/Todo/Form';
import Counter from 'src/components/Todo/Counter';
import List from 'src/components/Todo/List';

import './styles.scss';

const Todo = () => {
    console.log(data);
    return (
        <div id="todo">
            <Form/>
            <Counter/>
            <List/>
        </div>
    );

};

export default Todo;