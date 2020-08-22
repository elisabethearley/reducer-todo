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

    const clearComplete = e => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_COMPLETE'
        });
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <label className='header'>
                    <h1>To Do List</h1>
                </label>
                <input 
                    type='text'
                    value={list} 
                    name='todo' 
                    onChange={handleChanges} 
                />
                <button className='toDoBtn'> 
                    Add 
                </button>
                <button onClick={clearComplete}>
                    Clear Complete
                </button>
            </form>
        </div>
    );
};

export default ToDoForm;