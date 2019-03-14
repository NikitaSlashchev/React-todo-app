import React from 'react';
import TodoListItem from '../todo-list-item/';
import './todo-list.css';

const TodoList = (props) => {
    const elements = props.todos.map((item) =>{

        const {id, ...itemProps } = item;
        return(
            <li key={item.id} className="list-group-item">
                <TodoListItem {...itemProps}/>
            </li>
        );
    });
    return (
    <ul className="list-group todo-list">
        {elements}
    </ul>
    );
};

export default TodoList;