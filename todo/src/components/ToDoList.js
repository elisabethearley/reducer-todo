import React, { useReducer } from 'react';
import { toDoReducer, todo } from '../reducers/reducer';
import ToDoToggle from './ToDoToggle';
import ToDoForm from './ToDoForm';

const ToDoList = () => {
    const [state, dispatch] = useReducer(toDoReducer, todo);

    return (
        <div className='todo-list'>
            <ToDoForm dispatch={dispatch} />
            {state.map(todo => {
                return <ToDoToggle key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </div>
    );
};

export default ToDoList;