import React,{Component} from 'react';

import './app.css';


import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';



export default class App extends Component{

    maxId = 100;
   

    state = {
         todoData: [
             this.createTodoItem('Drink Coffee'),
             this.createTodoItem('Make awesome app'),
             this.createTodoItem('Have a lunch'),
        ],
        term: '',
        filter: 'active',
        category: '',
    };

    createTodoItem(label,categoryItem){
        return{
                label,
                notes:'Sample Note',
                categoryItem:{
                    regular:true,
                    job:false,
                    personal:false,
                    daily:false
                },
                important: false,
                done:false,
                disabled:true,
                id: this.maxId++
               
        }
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
    
    addItem = (text,tag) =>{

        const newItem = this.createTodoItem(text,tag);
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
    
 

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx]
        const newItem = {...oldItem, 
            [propName]:!oldItem[propName]};

        return[
            ...arr.slice(0, idx),
            newItem,
             ...arr.slice(idx + 1)
            ];

    }
    
    onToggleImportant = (id) => {
        this.setState(({todoData}) => { 
            return {
                todoData: this.toggleProperty(todoData,id,'important')
            };
        })
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => { 
            return {
                todoData: this.toggleProperty(todoData,id,'done')
            };
        });
    }; 

    onToggleEnabled = (id) => {
        this.setState(({todoData}) => { 
            return {
                todoData: this.toggleProperty(todoData,id,'disabled')
            };
        });
    }; 
    onSearchChange = (term) =>{
        this.setState({term});
    }
    search(items, term){
        if(term.length === 0){
            return items;
        }
        return items.filter((item) =>{
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    filter(items,filter){

        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    categoryFilter(items,category){

        switch(category){
            case 'regular':
                return items;
            case 'job':
                return items.categoryFilter((item) => !item.categoryItem.job);
            case 'personal':
                return items.categoryFilter((item) => item.categoryItem.personal);
            case 'daily':
                return items.categoryFilter((item) => item.categoryItem.daily);
            default:
                return items;
        }
    }

    onFilterChange = (filter) =>{
        this.setState({filter});
    }

    onCategoryChange = (category) =>{
        this.setState({category});
    }

    render(){
        const {todoData, term,filter} = this.state;
        const visibleItems = this.filter(
            this.search(todoData, term),filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
    return(
        <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount} changeTheme = {this.changeTheme}/>
            <div className="top-panel d-flex">
                <SearchPanel
                onSearchChange={this.onSearchChange}></SearchPanel>
                <ItemStatusFilter 
                filter={filter}
                onFilterChange={this.onFilterChange}></ItemStatusFilter>
            </div>
            <TodoList 
            todos = {visibleItems}
            onDeleted={ this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            onToggleEnabled={this.onToggleEnabled} 
            onCategoryChange ={this.onCategoryChange}
            />
            <ItemAddForm
            onAddition={ this.addItem}/>  
        </div>
    );
    }
}
