import React, { useState } from 'react';

import data from 'src/Data/data.js';
import { nbCurrentTasks } from 'src/utils/tasks';
import Form from 'src/components/Todo/Form';
import Counter from 'src/components/Todo/Counter';
import List from 'src/components/Todo/List';

import './styles.scss';

const Todo = () => {
    const [tasks, setTasks] = useState(data);
    const counterLabel = nbCurrentTasks(tasks);
    return (
        <div id="todo">
            <Form/>
            <Counter label={counterLabel}/>
            <List/>
        </div>
    );

};

export default Todo;