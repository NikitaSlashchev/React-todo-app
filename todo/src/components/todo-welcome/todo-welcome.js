import React,{Component} from 'react';

import Modal from 'react-awesome-modal';

import './todo-welcome.css';


export default class TodoWelcome extends Component{
    constructor(props){
        super(props);
    this.state = {
        startVisible:true
    }
}

    render(){
        return(
            <Modal 
            visible={this.state.startVisible} 
            effect="fadeInUp" 
            onClickAway={() => this.startCloseModal()}
            width="100%"
            height="100%"
        >
        <div className='welcomeModal black-overlay'>
                        <h1>Добро пожаловать в <br/><span>Todo-list</span></h1>
                        <p>Откройте для себя удобный инструмент для управления вашими делами!</p>
                        <button type='button' className='btn start-button'>Начнем!</button>
                        {/* <a href="javascript:void(0);" onClick={() => this.startCloseModal()}>Close</a> */}
                    </div>
        </Modal>
        )
       
    }
}