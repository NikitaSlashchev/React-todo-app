import React,{Component} from 'react';

import Modal from 'react-awesome-modal';

import './app.css';

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import TodoModal from '../todo-modal';
import TodoFooter from '../todo-footer'
import TodoWelcome from '../todo-welcome'


import 'moment/locale/ru';

let reactSwipeEl;
export default class App extends Component{

    maxId = 100;
    

    constructor(props){
        super(props);
        this.state = {
            todoData: [
                this.createTodoItem('Выпить кофе'),
                this.createTodoItem('Сделать классное приложение'),
                this.createTodoItem('Перекусить'),
           ],
           term: '',
           filter: 'active',
           visible : false,
           startVisible:true,
           changeCounter:0
         
        }
      
    }

    componentDidMount() {
        const _onInit = auth2 => {
          console.log('init OK', auth2)
        }
        const _onError = err => {
          console.log('error', err)
        }
        window.gapi.load('auth2', function() {
          window.gapi.auth2
            .init({ // не забудьте указать ваш ключ в .env
              client_id:
                process.env.REACT_APP_GOOGLE_CLIENT_ID,
            })
            .then(_onInit, _onError)
        })
      }
      signIn = () => {
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signIn().then(googleUser => {
        
          // метод возвращает объект пользователя
          // где есть все необходимые нам поля
          const profile = googleUser.getBasicProfile()
        //   console.log('ID: ' + profile.getId()) // не посылайте подобную информацию напрямую, на ваш сервер!
        //   console.log('Full Name: ' + profile.getName())
        //   console.log('Given Name: ' + profile.getGivenName())
        //   console.log('Family Name: ' + profile.getFamilyName())
        //   console.log('Image URL: ' + profile.getImageUrl())
        //   console.log('Email: ' + profile.getEmail())
            
          // токен
          const id_token = googleUser.getAuthResponse().id_token
          this.setState({
            changeCounter:1
          })
          console.log(this.state.changeCounter);
        //   console.log('ID Token: ' + id_token)
        //   alert('Hello ' + profile.getName());

        })
      }
      signOut = () => {
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signOut().then(function() {
          console.log('User signed out.');
        })
      }

    createTodoItem(label,work,personal,family){

        return{
                label,
                important: false,
                done:false,
                disabled:true,
                id: this.maxId++,
                
               
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

    onToggleWork = (id) => {
        this.setState(({todoData}) => { 
            return {
                todoData: this.toggleProperty(todoData,id,'work')
            };
        });
    }; 

    onTogglePersonal = (id) => {
        this.setState(({todoData}) => { 
            return {
                todoData: this.toggleProperty(todoData,id,'personal')
            };
        });
    }; 

    onToggleFamily = (id) => {
        this.setState(({todoData}) => { 
            return {
                todoData: this.toggleProperty(todoData,id,'family')
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


    openModal = (labelName,notesName,flagName) => {
        this.setState({
            visible : true,
            name:labelName,
            notes:notesName,
            flag:flagName
        });

        
    }


    closeModal(visible) {
        this.setState({
            visible : false
        });
    }

    startCloseModal(startVisible) {
        this.setState({
            startVisible : false
        });
    }

    startOpenModal = () =>{
        this.setState({
            visible:true
        })
    }

     keyPress (e) {
        if(e.key === "Escape") {
            this.closeModal();
        }
    }


    render(){
        
        const {todoData, term,filter} = this.state;
        const visibleItems = this.filter(this.search(todoData, term),filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
    return(
        
        <div className="todo-app">
       <TodoWelcome
       startVisible={this.state.visible}
       startCloseModal={this.closeModal}
       signIn={this.signIn}
       changeCounter={this.state.changeCounter}
       signOut={this.signOut}>
          
       </TodoWelcome>
            <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                    onSearchChange={this.onSearchChange} ></SearchPanel>
                    <ItemStatusFilter 
                    filter={filter}
                    onFilterChange={this.onFilterChange}></ItemStatusFilter>
                </div>
                {/* <button onClick={this.signIn}>Log in</button>
          <button onClick={this.signOut}>Log out</button> */}
                <ItemAddForm
                onAddition={ this.addItem}/>  
    
            <TodoList 
                todos = {visibleItems}
                onDeleted={ this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}
                onToggleEnabled={this.onToggleEnabled}
                onToggleWork={this.onToggleWork}
                onTogglePersonal={this.onTogglePersonal}
                onToggleFamily={this.onToggleFamily}
                openModal={this.openModal}
                changeFlag={this.changeFlag}
                
            />
         
                <Modal 
                    visible={this.state.visible}
                    width="450"
                    height="50%"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                    
                >
                    <div>
                    <TodoModal
                    name ={this.state.name}
                    notes ={this.state.notes}
                    closeModal={() => this.closeModal(this.visible)}
                    flag={this.state.flag}
                    />
                   
                    </div>
                    
                </Modal>
               
        <TodoFooter></TodoFooter>
        </div>
            
    );
    }
}
