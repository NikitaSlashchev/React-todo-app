import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component { 
    state = {
        notes: '',
     
    }

    onLabelChange = (e) =>{
        this.setState({
            notes:e.target.value,
        })
    }
    
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onAdditionItemDesc(this.state.notes)
        this.setState({
            notes: '',
        
        })
    };
    
    render(){
    const {label, onDeleted,
           onToggleImportant,onToggleDone,onToggleEnabled,
           important,done,disabled,categoryItem,onCategoryChange} = this.props;
    
    let classNames = 'todo-list-item';
    let addInfoClassNames = 'form-addinfo-item';
    let categoryClassNames = 'todo-list-item-wrapper';
    
    if(done){
        classNames += ' done';
    }

    if(important){
        classNames += ' important';
    }

    if(disabled){
        addInfoClassNames += ' disabled';
    }


    if(categoryItem.regular){
        categoryClassNames += ' regular';
    }

    if(categoryItem.job){
        categoryClassNames += ' job';
    }
    
    
    
    /*else if(categoryItem.job){
        this.setState()
        console.log({label},'job')
    }else if(categoryItem.personal){
        console.log({label},'personal');
    }else  if(categoryItem.daily){
        console.log({label},'daily');
    }*/

    return (
    <span className ={classNames}>
    <div className={categoryClassNames}>
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

        <button type="button"
            className="btn  btn-outline-warning btn-lg float-right "
            onClick={onCategoryChange}>
            <i className="fa fa-bars"></i>
        </button>
    </div>
       <div>
 
       <span 
            className = {`${addInfoClassNames}`}>
            <input 
                onChange={this.onLabelChange}
                className= 'form-control'
                placeholder='Notes: '
                value={this.state.notes}
                onSubmit={this.onSubmit}
            >
            </input>
        </span>
       </div>
        
    </span> 
    );
    }
};
