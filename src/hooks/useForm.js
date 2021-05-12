import { useState } from "react"


//It receives an object from a form and changes the state
export const useForm = (initialState={}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({target}) =>{

        setValues({
            ...values,
            [target.name]:target.value
        });

    } 

    return [values, handleInputChange, reset];

}