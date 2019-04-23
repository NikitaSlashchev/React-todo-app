import React, {Component} from 'react';

import './todo-modal.css';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"

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

      handleOnBlur(event) {
        var timer = moment.duration(5, "seconds").timer({loop: true}, function() {
            console.log('hello')
          });
        }


    render(){
        
        return(
            <div className="todo-modal">   
                <div  className="todo-modal-timepicker">
                    <h2 className="todo-modal-header">
                        {this.props.name}
                    </h2>
                    <div>
                        <DatePicker
                            selected={this.state.startDate}
                            timeInputLabel="Time:"
                            onChange={this.handleChange}
                            dateFormat="MM/dd/yyyy h:mm aa"
                            showTimeInput
                            onBlur={this.handleOnBlur}
                        />
                    </div>
                    <button onClick={this.handleOnBlur}>shish</button>
                   
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




