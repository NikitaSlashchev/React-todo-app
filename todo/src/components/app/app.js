import React,{Component} from 'react';

import './app.css';
 
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component{

     

    state = {
         todoData : [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make awesome app', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3},
        ]
    }


    deleteItem = (id) =>{
        this.setState(({todoData}) => {

            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            }
        });
    }


    maxId = 100;
    
    addItem = (text) =>{

        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };
        this.setState(({todoData}) =>{

            const newArr = [
                ...todoData,
                newItem
            ];
            return{
                todoData:newArr
            }
        })
    };

    render(){
        
    return(
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel></SearchPanel>
                <ItemStatusFilter></ItemStatusFilter>
            </div>
            <TodoList 
            todos = {this.state.todoData}
            onDeleted={ this.deleteItem}/>
            <ItemAddForm
            onAddition={ this.addItem}/>
        </div>
    );
    }
}
