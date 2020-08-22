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
    switch (action) {
        case 'ADD_TODO':
            return [
                ...state, 
                {list: action.payload, completed: false, id: Date.now() }
            ];
        default:
            return state
    }
};