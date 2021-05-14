import React from 'react'
import { ToDoListItem } from './ToDoListItem';

export const ToDoList = (props) => {

    const {todos, handleToggle, handleDelete}=props;

    return (
        
        <ul className="list-group list-group-flush">
              {
                 todos.map( (todo, i) => (
                    <ToDoListItem
                            key={todo.id}
                            todo= {todo}
                            handleDelete= { handleDelete }
                            handleToggle= { handleToggle }
                            i= {i}
                        />
                    ))
              }
         </ul>
        
    )
}
