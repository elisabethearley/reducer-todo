import React, { useState } from 'react';

const ToDoForm = ({dispatch}) => {
    const [list, setList] = useState('');

    const handleChanges = e => {
        setList(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: list })
        setList('');
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <label>
                    ToDo
                </label>
                <input type='text' name='todo' onChange={handleChanges} value={list} />
                <button> 
                    Add Todo 
                </button>
            </form>
        </div>
    );
};

export default ToDoForm;