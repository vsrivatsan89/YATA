export var addTodo =  (description) => {

    return {
        type : "ADD_TODO",
        description

    };
};

export var toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

export var toggleFilter = ()=>{

    return {
        type: "TOGGLE_FILTER"
    }


}