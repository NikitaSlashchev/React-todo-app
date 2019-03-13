import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
 
import AppHeader from './components/app-header';
import ItemStatusFilter from './components/item-status-filter';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make awesome app', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3},
    ];

    return(
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel></SearchPanel>
                <ItemStatusFilter></ItemStatusFilter>
            </div>
            <TodoList todos = {todoData}></TodoList>
        </div>
    );
};


ReactDOM.render(<App></App>,
     document.getElementById('root'));