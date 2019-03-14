import React from 'react';
import './todo-list-item.css';

//USE THIS AS PARAM FOR TodoListItem
//{label, important = false}

const TodoListItem = (props) => {
    const style = {color: props.important ? 'tomato' : 'black'}; 

    return (
    <span className ="todo-list-item"
        style={style}>
        <span className="todo-list-item-label">
            {props.label}
        </span>
        <button className="btn  btn-outline-success btn-lg float-right border-0">
            <i className="fa fa-check-square"></i>
        </button>
        <button className="btn  btn-outline-danger btn-lg float-right border-0">
            <i className="fa fa-times"></i>
        </button>
    </span> 
 
    );
};

export default TodoListItem; 