export const todo = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn about Redux',
        completed: false,
        id: 4563456545235
    },{
        item: 'Make a list',
        completed: false,
        id: 245634634645
    },{
        item: 'Check it twice',
        completed: false,
        id: 46357634674524
    },
]

export const toDoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, 
                {list: action.payload, completed: false, id: Date.now() }
            ];

        case 'TOGGLED':
            return state.map(todo => {
                if(todo.id === action.payload) {
                    return {...todo, completed: !todo.completed};
                }
                return todo
            });
        
        case 'CLEAR_COMPLETE':
            return state.filter(todo => !todo.completed)
            
        default:
            return state
    }
};