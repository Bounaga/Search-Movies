import React from 'react';
import './Form.css';

const Form = ({setSearchValue}) => {

    const handleInput = (e) => {
        setSearchValue(e.target.value);
    }

    const handelsubmit = (event) => {
        event.preventDefault();  
        setSearchValue('');  
    }
    return(
        <div>
            <form   className='form-container'
                    onSubmit={handelsubmit}>
                <input 
                        onChange={handleInput}
                        className='input-name'
                        placeholder='Search for a movie'>
                </input>
                {/* <button className='button'> Search</button> */}
            </form>
        </div>
    );
}

export default Form;