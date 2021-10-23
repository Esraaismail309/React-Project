//Actions
const ICREASE_COUNT = "ICREASE_COUNT"
export const incrementCount = (payload) => {
    return {
        type: ICREASE_COUNT,
        payload
    }
}
const DECREASE_COUNT = "DECREASE_COUNT"
export const decrementCount = (payload) => {
    return {
        type: DECREASE_COUNT,
        payload
    }
}

//state
const initialState = {
    count: 0
}

//reducer
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ICREASE_COUNT:
            return {...state, count: state.count + action.payload }
        case DECREASE_COUNT:
            return {...state, count: state.count - action.payload }
        default:
            return state
    }

}