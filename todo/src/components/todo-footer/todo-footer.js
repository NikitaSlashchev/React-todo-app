import React, {Component} from 'react';

import './todo-footer.css';

export default class TodoFooter extends Component { 
   render(){
       return(
           <div className="todo-footer">
           <div className="todo-footer-block">
           <h1>Copyright Никита Слащёв</h1>
           <div>
           <a href="mailto:nikitaslashchev@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
           <a href="https://github.com/NikitaSlashchev/React-todo-app"><i className="fa fa-github" aria-hidden="true"></i></a>
           <a href="https://t.me/NikitaSlashchev"><i className="fa fa-telegram" aria-hidden="true"></i></a>
           </div>
        
           </div>
           </div>
       )
   }

}
