import React, {Component} from 'react';

import './todo-modal.css';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



export default class TodoModal extends Component { 
    constructor(props){
        super(props);
        this.state = {
         notes:'',
         startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(date) {
        this.setState({
          startDate: date
        });
      }

      

    render(){
        
        
        return(
            <div className="todo-modal">    
                <h1 className="todo-modal-header">
                    {this.props.name}
                </h1>

                <div 
                className="todo-modal-timepicker"
                >
                 <div>
                 <DatePicker
                    selected={this.state.startDate}
                    timeInputLabel="Time:"
                    onChange={this.handleChange}
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                />
            </div>
                   
                </div>
                <div className="todo-modal-notes">
                <textarea
                        value={this.props.notes}
                />
                </div>
            
            </div>
        )
    }

}




