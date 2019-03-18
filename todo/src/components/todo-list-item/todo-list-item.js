import React, {Component} from 'react';
import './todo-list-item.css';

//USE THIS AS PARAM FOR TodoListItem
//{label, important = false}

export default class TodoListItem extends Component {
    
    render(){
    const {label, onDeleted, onToggleImportant,onToggleDone,important,done} = this.props;

    let classNames = 'todo-list-item';
    if(done){
        classNames += ' done';
    }

    if(important){
        classNames += ' important';
    }

    return (
    <span className ={classNames}>
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
     
    </span> 
 
    );
    }
};
