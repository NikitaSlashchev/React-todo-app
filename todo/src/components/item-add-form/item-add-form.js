import React,{Component} from 'react';

import './item-add-form.css';


export default class ItemAddForm extends Component{
    render(){
        const {onAddition} = this.props;
        return(
            <div className="item-add-form">
                <button type="button"
                    className="btn btn-primary"
                    onClick={onAddition}
                    >Add New Task</button>
            </div>
        )
       
    }
}