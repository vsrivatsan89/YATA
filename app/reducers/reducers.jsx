

var uuid = require('uuid');
export var todosReducer = (state =[], action) => {

    switch(action.type){
        case 'ADD_TODO':
        return [
            ...state,
            {
                id: uuid(),
                description: action.description,
                completed: false
            }
        ];
        case 'TOGGLE_TODO':
        return state.map((todo) =>{
            if(todo.id === action.id){
                
                return {
                    ...todo,
                    completed: !todo.completed
                }

            }else
            {
                return todo;
            }

        })
        default:
        return state;

    }


};

export var filterReducer = (state =false, action) => {

    switch(action.type){
        case 'TOGGLE_FILTER':
        return !state;
        default:
        return state;
    }


};