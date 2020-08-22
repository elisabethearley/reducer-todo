import React, { useReducer } from 'react';
import { toDoReducer, todo } from '../reducers/reducer';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const ToDoList = () => {
    const [state, dispatch] = useReducer(toDoReducer, todo);
    return (
        <div>
            <ToDoForm dispatch={dispatch} />
            {/* {state.map(todo => {
                return <ToDo key={todo.id} todo={todo} dispatch={dispatch} />
            })} */}
        </div>
    );
};
export default ToDoList;