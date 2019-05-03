import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component { 
    constructor(props) {
        super(props);
       
        this.state = {
           notes:[],
           flag: ''
        };
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.flagChange = this.flagChange.bind(this);
    }

    onChangeNotes(event){
       this.setState({notes:event.target.value});  
      }


      flagChange(event){

        this.setState({flag: event.target.value});

      }

      flagSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.flag);
        event.preventDefault();
      }


    render(){
    const {label,notes, onDeleted,
           onToggleImportant,onToggleDone,
           important,done,disabled,openModal} = this.props;
    
    let classNames = 'todo-list-item';
    let addInfoClassNames = 'form-addinfo-item';
    
    if(done){
        classNames += ' done';
    }

    if(important){
        classNames += ' important';
    }

    if(disabled){
        addInfoClassNames += ' disabled';
    }
    if(this.state.flag === "work"){
        classNames += ' work';
    }
    if(this.state.flag === "personal"){
        classNames += ' personal';
    }
    if(this.state.flag === "family"){
        classNames += ' family';
    }

    return (
    <span className ={classNames}>
    <div className='todo-list-item-wrapper'>
    <span 
        className="todo-list-item-label"
        onClick={onToggleDone}>
            {label}
        </span>
        <div>
            <select value={this.state.flag} onChange={this.flagChange}>
                <option label="Work" value="work"/>
                <option label="Personal" value="personal"/>
                <option label="Family" value="family"/>
            </select>
        </div>
       <div
            className="todo-list-item-button">
        <button type="button"
         className="btn  btn-outline-primary btn-lg float-right "
                onClick={onToggleImportant}>
            <i className="fa fa-star"></i>
        </button>

        <button type="button"
            className="btn  btn-outline-danger btn-lg float-right "
            onClick={onDeleted}>
            <i className="fa fa-times"></i>
        </button>

        {/* <button type="button"
            className="btn  btn-outline-warning btn-lg float-right "
            onClick={onToggleEnabled}>
            <i className="fa fa-bars"></i>
        </button>  */}
        
        <button type="button"
            className="btn  btn-outline-warning btn-lg float-right "
            onClick={() =>{openModal(label,notes)}}>
          <i className="fa fa-expand"></i>
        </button>
        </div>
       <span 
            className = {`${addInfoClassNames}`}>
            <input 
                className= 'form-control'
                value={this.state.notes}
                onChange={this.onChangeNotes}
            >
            </input>
        </span>
       </div>
        
    </span> 
    );
    }
};
