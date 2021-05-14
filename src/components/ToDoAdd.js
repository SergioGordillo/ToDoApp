import React from 'react'
import { useForm } from '../hooks/useForm';

export const ToDoAdd = ({ handleAddToDo }  ) => {

    const [{description}, handleInputChange, reset]= useForm({
        description: ''
    });

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

        handleAddToDo(newToDo); 
        reset();

    }

    return (
        <div>
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
    )
}
