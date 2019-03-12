import React from 'react';

//USE THIS AS PARAM FOR TodoListItem
//{label, important = false}

const TodoListItem = (props) => {
    const style = {
        color: props.important ? 'tomato' : 'black'
    }; 

    return <span style={style}>{props.label}</span>
};

export default TodoListItem; 