import React, {Component} from 'react';

import './todo-modal.css';


import { DatePicker } from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import 'moment/locale/ru';


export default class TodoModal extends Component { 
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        const {action} = this.state;
        
        //const {todoData,term,filter} = this.props
        //const visibleItems = this.filter(this.search(todoData, term),filter);
        return(
            <div>    
               
                <div style={{height: '100px'}}>
                {this.props.label}
                    <DatePicker onChange={action} includeTime />
                </div>
            </div>
        )
    }

}