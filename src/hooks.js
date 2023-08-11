import {useState} from 'react';

export function useFormInput(Initalvalue){
    const [value,setValue] = useState(Initalvalue);

    function handleChange(e){
        setValue(e.target.value);
    }
    return{
        value,
        onChange:handleChange,
        setValue
    }
}


