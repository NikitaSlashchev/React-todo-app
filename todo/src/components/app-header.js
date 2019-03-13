import React from 'react';
import './app-header.css';
const AppHeader = ({toDo, done}) => {

    const toDoStyle = {color:'tomato'};
    const doneStyle = {color:'#009933'};
    
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