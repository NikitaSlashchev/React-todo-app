import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = (props) => {
    const elements = props.todos.map((item) =>{

        const {id, ...itemProps } = item;
        return(
            <li key={item.id}>
                <TodoListItem {...itemProps}/>
            </li>
        );
    });
    return (
    <ul>
        {elements}
    </ul>
    );
};

export default TodoList;