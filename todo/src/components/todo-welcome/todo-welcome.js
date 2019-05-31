import React,{Component} from 'react';

import Modal from 'react-awesome-modal';

import './todo-welcome.css';
import ReactSwipe from 'react-swipe';


let reactSwipeEl;

export default class TodoWelcome extends Component{
    constructor(props){
        super(props);
    this.state = {
        startVisible:true,
    }
}

changeVisible = () =>{
    this.setState({
        startVisible:false
    })
}

finishButtonClick = () =>{
    this.props.signIn();
    reactSwipeEl.next();

}



    render(){
     
        return(
            <Modal 
            visible={this.state.startVisible} 
            effect="fadeInUp" 
            width="100%"
            height="100%"
            key="2"
        >

       <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
          
        <div className='welcomeModal black-overlay'>
                            <h1>Добро пожаловать в <br/><span>Todo-list</span></h1>
                            <p>Откройте для себя удобный инструмент для управления вашими делами!</p>
                            <button type='button' className='btn welcome-button' onClick={() => reactSwipeEl.next()}>Начнем!</button>
                            <button className="skip-tutorial"  onClick={this.changeVisible}>Пропустить обучение</button>
                             
                    </div>
                    
                    <div className='welcomeModal black-overlay'>
                    <div className="slide-wrapper">
                        <h2 className="welcome-title">Отмечайте важные задачи</h2> 
                        <iframe title="Important" src="https://giphy.com/embed/f4PmGQgStrQ562wiTE" width="480" height="383" frameBorder="0" className="gif-tutorial" allowFullScreen></iframe>
                        <button type='button' className='btn welcome-button tutorial' onClick={() => reactSwipeEl.next()}>Понятно</button>
                          </div>
                    </div>

                    <div className='welcomeModal black-overlay'>
                    <div className="slide-wrapper">
                        <h2 className="welcome-title">Удаляйте задачи</h2> 
                        <iframe  title="Delete" src="https://giphy.com/embed/cLwLdoiK8IMTOX1g9e" width="480" height="383" frameBorder="0" className="gif-tutorial" allowFullScreen></iframe>
                        <button type='button' className='btn welcome-button tutorial' onClick={() => reactSwipeEl.next()}>Понятно</button>
                          </div>
                    </div>
                    <div className='welcomeModal black-overlay'>
                    <div className="slide-wrapper">
                    <h2 className="welcome-title">Добавляйте заметки и напоминания</h2>
                    <iframe  title="Notes" src="https://giphy.com/embed/S5ho8l6tqyWVT06yB6" width="454" height="480" frameBorder="0" className="gif-tutorial" allowFullScreen></iframe>
                    <button type='button' className='btn welcome-button tutorial' onClick={() => reactSwipeEl.next()}>Понятно</button>
                          </div>
                    </div>
                    <div className='welcomeModal black-overlay'>
                        <h1>Еще одна вещь</h1>
                        <p className="login-text">Войдите с вашей учетной записью Google чтобы сихронизировать ваши задачи между устройствами. Поверьте, это удобно :)</p>
                        <button className="btn welcome-button" onClick={this.finishButtonClick}><i className="fa fa-google" aria-hidden="true"></i>Log in</button>
                    </div>
                    <div className='welcomeModal black-overlay'>
                        <h1 className="end-tutorial">Спасибо за ваше терпение</h1>
                        <p className="end-text">Теперь вы сможете начать работу в Todo-list</p>
                        <button 
                                className="btn welcome-button" 
                                onClick={this.changeVisible}
                        >
                            Начать</button>
                    </div>
                    </ReactSwipe>
                    <div>
                    {/* <button  className="shish" onClick={() => reactSwipeEl.next()}>Next</button>
      <button  className="berdish" onClick={() => reactSwipeEl.prev()}>Previous</button> */}
      </div>
                   
 
        </Modal>
        )
       
    }
}

