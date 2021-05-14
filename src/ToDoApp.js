import React, { useEffect, useReducer } from "react";
import { ToDoAdd } from "./components/ToDoAdd";
import { ToDoList } from "./components/ToDoList";
import { todoReducer } from "./hooks/todoReducer";
import "./todoapp.css"; 


const init = () => {
    
    return JSON.parse(localStorage.getItem('todos')) || []; 
    
}

export const ToDoApp= () =>{


    const [ todos, dispatch ] = useReducer (todoReducer, [], init);



    useEffect ( () => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);

    console.log ("Me renderizo");

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

    const handleAddToDo = (newToDo) => {
        dispatch({
            type: "add",
            payload: newToDo
        })
    }

    return(
        <div>
            <h1>ToDoApp ({todos.length})</h1>
            <hr/>

            <div className="row">

                <div className="col-7">
                  
                    <ToDoList
                        todos= {todos}
                        handleDelete= { handleDelete }
                        handleToggle= { handleToggle }
                    />
                </div>

                <div className="col-5">
                       <ToDoAdd
                            handleAddToDo = { handleAddToDo }
                       
                       />
                </div>




            </div>


        </div>
    )        




}