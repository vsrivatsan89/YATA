export var todosReducer = (state =[], action) => {

    switch(action.type){
        case 'ADD_TODO':
        return [
            ...state,
            {
                description: action.description,
                completed: false
            }
        ];
    }


};