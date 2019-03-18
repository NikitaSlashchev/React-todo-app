import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
    const toDoStyle = {color:'#d8748a'};
    const doneStyle = {color:'#8d56c8'}; 
    return(
    <div className="app-header d-flex">
    <h1>Todo List</h1>
    <h5>
        <span style = {toDoStyle}>{toDo} </span>
         more to do, 
         <span style = {doneStyle}> {done} </span>
         done
    </h5> 
    </div>);
};

export default AppHeader;