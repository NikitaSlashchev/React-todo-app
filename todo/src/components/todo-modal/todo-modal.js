import React, {Component} from 'react';

import './todo-modal.css';

import DatePicker from "react-datepicker";
import moment from "moment";


import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

export default class TodoModal extends Component { 
    constructor(props){
        super(props);
        this.state = {
         notes:'',
         startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.toggleCalendar = this.toggleCalendar.bind(this);
    }
    
    handleChange(date) {
        this.setState({
          startDate: date
        });
     
       
      }

      handleOnBlur(){
        let shish = moment(this.state.startDate,"h:mm:ss").fromNow();
        alert("Напоминание придет: " + shish);
        this.toggleCalendar()
        }  

        toggleCalendar (e) {
            e && e.preventDefault()
            this.setState({isOpen: !this.state.isOpen})
            
          }
      
    render(){
        
        return(
            <div className="todo-modal">   
                <div  className="todo-modal-timepicker">
                    <h2 className="todo-modal-header">
                        {this.props.name}
                    </h2>
                    <div>     
    {
        this.state.isOpen && (
            <DatePicker
                        width="200"
                        height="200"
                            selected={this.state.startDate}
                            timeInputLabel="Time:"
                            onChange={this.handleChange}
                            dateFormat="MM/dd/yyyy h:mm aa"
                            showTimeInput
                            inline
                            onClickOutside={this.handleOnBlur}
                        />
        )
    }
                        <button type="button"
                        className="btn  btn-outline-danger btn-lg"
                        onClick={this.toggleCalendar}>
                        <i className="fa fa-bell"></i>
                    </button>
                    </div>
                    
                </div>
                <div className="todo-modal-notes">
                <textarea
                        value={this.props.notes}
                        placeholder="Добавить заметку"
                />
                </div>

            </div>
        )
    }
    

}
