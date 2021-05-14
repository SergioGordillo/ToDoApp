import React from 'react'

export const ToDoListItem = (props) => {

    const {todo, handleDelete, handleToggle, i} = props; 

    return (
        <div>
            <li 
                key={todo.id}
                className="list-group-item"
            > 
                <p 
                    className={`${todo.done && "complete" }`}
                        onClick= { () => handleToggle (todo.id) }
                    > {i+1}. {todo.description}
                </p>
                <button 
                    className="btn btn-danger"
                    onClick={ () => handleDelete (todo.id) }
                    >Delete task</button>
            </li>
        </div>
    )
}
