import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component { 




  
    
    
    render(){
    const {label, onDeleted,
           onToggleImportant,onToggleDone,onToggleEnabled,
           important,done,disabled,onSubmitNote} = this.props;
    
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

 


    return (
    <span className ={classNames}>
    <div className='todo-list-item-wrapper'>
    <span 
        className="todo-list-item-label"
        onClick={onToggleDone}>
            {label}
        </span>
       
        <button type="button"
         className="btn  btn-outline-primary btn-lg float-right "
                onClick={onToggleImportant}>
            <i className="fa fa-exclamation"></i>
        </button>

        <button type="button"
            className="btn  btn-outline-danger btn-lg float-right "
            onClick={onDeleted}>
            <i className="fa fa-times"></i>
        </button>

        <button type="button"
            className="btn  btn-outline-warning btn-lg float-right "
            onClick={onToggleEnabled}>
            <i className="fa fa-bars"></i>
        </button>
   
       <div>
       </div>     
       <span 
            className = {`${addInfoClassNames}`}>
            <input 
                onChange={this.props.onLabelChangeNote}
                className= 'form-control'
                value={this.props.notes}
                onClick={onSubmitNote}
            >
            </input>
        </span>
       </div>
        
    </span> 
    );
    }
};
