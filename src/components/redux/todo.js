//Actions 
const ADD_TODO = "ADD_TODO"

export const addToDoAction = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }

}
const REMOVE_TODO = "REMOVE_TODO"
export const deleteToDoAction = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
}

//state
const initialState = {
    todos: [{
        title: "TODO 1 ",
        content: "FIRST TODO"
    }]
}

//Reducer
export const toDoReducer = (state = initialState, action) => {
    // console.log(state);
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload] }
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter((ele, i) => i !== action.payload) }
        default:
            return state

    }
}