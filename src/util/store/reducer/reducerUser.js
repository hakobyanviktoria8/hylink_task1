const defaultState = {
    users: [],
}
  
export const reducerUsers = (state = defaultState, action) => {
    switch(action.type){
        case "AddUsers":
            return {...state, users: [...state.users, action.payload]}
        case "GetUsers":
            return {...state, users: [...state.users]}
        case "DelUsers":
            return {...state, users: [state.users.filter(user => user.id !== action.payload)]}
        default: 
            return state
    }
}