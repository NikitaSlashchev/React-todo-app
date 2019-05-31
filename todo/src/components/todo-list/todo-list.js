import React from 'react';
import TodoListItem from '../todo-list-item/';
import './todo-list.css';

import {SortablePane, Pane} from 'react-sortable-pane';

const brdStyle={
    'borderRadius':'10px'
};
const TodoList = ({todos,onDeleted,
                        onToggleImportant,
                        onToggleDone,updateData,
                        onToggleEnabled,onToggleFamily,
                        onTogglePersonal,onToggleWork,
                        openModal}) => {
    const elements = todos.map((item) =>{
        
        const {id, notes,value,...itemProps } = item;
        
        return(
            <Pane key={item.id}defaultSize={{ width: '100%'}} resizable={{ x: false, y: false, xy: false }}>
            <li key={item.id} style={brdStyle} className="list-group-item">
                
                <TodoListItem
                 {...itemProps}
                 onDeleted={() => onDeleted(id)}
                 onToggleImportant={() => onToggleImportant(id)}
                 onToggleDone={() => onToggleDone(id)}
                 onToggleEnabled={() => onToggleEnabled(id)}
                 onToggleWork={() => onToggleWork(id)}
                 onTogglePersonal={() => onTogglePersonal(id)}
                 onToggleFamily={() => onToggleFamily(id)}
                 openModal = {openModal}
                 updateData={() => updateData(value)}
                 
                 />
            </li>
            </Pane>
        );
    });
    
    return (
        
<span>
    <ul className="list-group todo-list">
    <SortablePane
        direction="vertical"
        margin={10}    
      >
        {elements}
        </SortablePane>
    </ul>
    </span>
    );
};

export default TodoList;