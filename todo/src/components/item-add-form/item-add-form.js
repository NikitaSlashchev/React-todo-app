import React,{Component} from 'react';

import './item-add-form.css';


export default class ItemAddForm extends Component{

    state = {
        label: '',
    }

onLabelChange = (e) =>{
    this.setState({
        label:e.target.value,
    })
}

onSubmit = (e) =>{
    e.preventDefault();
    this.props.onAddition(this.state.label)
    this.setState({
        label: '',
    })
};

    render(){
        return(
            <div>
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit}>
            <input type="text"
            tabIndex="1"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="Что нужно сделать?"
                    value={this.state.label}>
            </input>
                <button type="button"
                    className="btn btn-light"
                    onClick={this.onSubmit}>
                    Добавить
                    </button>
            </form>
            </div>
        )
       
    }
}