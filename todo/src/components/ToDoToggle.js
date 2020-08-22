import React from 'react';

const ToDoToggle = ({ todo, dispatch }) => {
    const toggled = () => {
        dispatch({
            type: 'TOGGLED',
            payload: todo.id
        });
    };

    return (
        <div
            className={`todo${todo.completed ? 'completed': ''}`}
            onClick={toggled}
            style={{ textDecoration: todo.completed ? 'line-through': ''}}
        >
            <p>{todo.item}</p>
        </div>
    );
};

export default ToDoToggle;