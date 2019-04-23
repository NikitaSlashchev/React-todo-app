import React,{Component} from 'react';

import Modal from 'react-awesome-modal';

import './app.css';


import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import TodoModal from '../todo-modal';


import 'moment/locale/ru';

export default class App extends Component{

    maxId = 100;

    constructor(props){
        super(props);
        this.state = {
            todoData: [
                this.createTodoItem('Drink Coffee',),
                this.createTodoItem('Make awesome app'),
                this.createTodoItem('Have a lunch'),
           ],
           term: '',
           filter: 'active',
           visible : false,
         
        }
      
    }


    createTodoItem(label,notes){

        return{
                label,
                important: false,
                done:false,
                disabled:true,
                id: this.maxId++,
                notes
                
               
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
    addItem = (text) =>{

        const newItem = this.createTodoItem(text);
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
                todoData: this.toggleProperty(todoData,id,'important'),

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
    onFilterChange = (filter) =>{
        this.setState({filter});
    }


    openModal = (labelName,notesName) => {
        this.setState({
            visible : true,
            name:labelName,
            notes:notesName
        });

        
    }
    closeModal() {
        this.setState({
            visible : false
        });
    }


    render(){
        
        const {todoData, term,filter} = this.state;
        const visibleItems = this.filter(this.search(todoData, term),filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
    return(
        
        <div className="todo-app">
        
       
            <AppHeader toDo={todoCount} done={doneCount} />
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
                openModal={this.openModal}
                
            />

            <ItemAddForm
                onAddition={ this.addItem}/>  

         
                <Modal 
               
                    visible={this.state.visible}
                    width="550"
                    height="487"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                    <TodoModal
                    name ={this.state.name}
                    notes ={this.state.notes}
                    />
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                    
                </Modal>
        </div>
    );
    }
}
