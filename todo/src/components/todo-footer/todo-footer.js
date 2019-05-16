import React, {Component} from 'react';

import './todo-footer.css';

export default class TodoFooter extends Component { 
   render(){
       return(
           <div className="todo-footer">
           <div className="todo-footer-block">
           <h1>Copyright Никита Слащёв</h1>
           <div>
           <a href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
           <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
           <a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
           </div>
        
           </div>
           </div>
       )
   }

}
