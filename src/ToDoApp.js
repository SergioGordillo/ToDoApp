import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./hooks/todoReducer";
import { useForm } from "./hooks/useForm";
import "./todoapp.css"; 


const init = () => {
    
    return JSON.parse(localStorage.getItem('todos')) || []; 
    
}

export const ToDoApp= () =>{


    const [ todos, dispatch ] = useReducer (todoReducer, [], init);

    const [{description}, handleInputChange, reset]= useForm({
        description: ''
    });

    useEffect ( () => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action={
            type: "delete",
            payload: todoId
        }

        dispatch (action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(description.trim().length <=1 ){
            return ;
        }

        const newToDo={
            id: new Date().getTime(),
            description: description,
            done: false
        }

        const action={
            type: "add",
            payload: newToDo
        }

        dispatch (action); 
        reset();

    }

    return(
        <div>
            <h1>ToDoApp ({todos.length})</h1>
            <hr/>

            <div className="row">

                <div className="col-7">
                    {/* TodoList */}
                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                // TodoListitem
                                <li 
                                    key={todo.id}
                                    className="list-group-item"
                                    > <p className={`${todo.done && "complete" }`}
                                        onClick= { () => handleToggle (todo.id) }
                                    >{i+1}. {todo.description}</p>
                                    <button 
                                    className="btn btn-danger"
                                    onClick={ () => handleDelete (todo.id) }
                                    >Delete task</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="col-5">
                        <h4>Add new to do</h4>
                        <hr/>

                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="description" 
                                className="form-control"
                                placeholder="Write a new to do here" 
                                autoComplete="off"
                                value= {description}
                                onChange= { handleInputChange }
                            />

                        <div className = "d-grid gap-2">
                            <button 
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                            > Add new to do </button>
                        </div>



                        </form>
                </div>




            </div>


        </div>
    )        




}