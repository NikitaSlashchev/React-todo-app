import React from 'react';
import './app-header-light.css';

const AppHeader = ({toDo, done}) => {
    const toDoStyle = {color:'#d8748a'};
    const doneStyle = {color:'aquamarine'}; 
    return(
    <div className="app-header d-flex">

    <h1>Todo List</h1>
    <h5>
        <span style = {toDoStyle}>{toDo} </span>
         надо сделать, 
         <span style = {doneStyle}> {done} </span>
         сделано
    </h5> 
    </div>);
};

export default AppHeader;