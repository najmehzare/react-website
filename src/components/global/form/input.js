import PropTypes from 'prop-types'
import { useState } from 'react';


function Input({ name , type ='text' , label , placeholder  , children }) {
    const [value , setValue] = useState("");

    let changeHandler = (e) => setValue(e.target.value);

    return (
        <>
        <label className="block">{label}</label>
            <input 
                type={type}  
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            {children && children({ value })}
        </>
    )
}

Input.propTypes = {
    name : PropTypes.string.isRequired,
    render : PropTypes.func
}


export default Input;