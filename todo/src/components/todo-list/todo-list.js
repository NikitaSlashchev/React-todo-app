import React from 'react';
import TodoListItem from '../todo-list-item/';
import './todo-list.css';



const TodoList = ({todos,onDeleted,
                        onToggleImportant,
                        onToggleDone, onToggleEnabled}) => {
    const elements = todos.map((item) =>{

        const {id,notes, ...itemProps } = item;
        
        
        return(
            <li key={item.id} className="list-group-item">
            
                <TodoListItem
                 {...itemProps}
                 onDeleted={() => onDeleted(id)}
                 onToggleImportant={() => onToggleImportant(id)}
                 onToggleDone={() => onToggleDone(id)}
                 onToggleEnabled={() => onToggleEnabled(id)}
                 notes = {notes}
                 
                 />
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