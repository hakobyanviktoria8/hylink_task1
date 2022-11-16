const defaultState = {
    cash: 0,
  }
  
export const reducerCount = (state = defaultState, action) => {
    switch(action.type){
        case "Add":
        return {...state, cash: state.cash + action.payload}
        case "Get":
        return {...state, cash: state.cash - action.payload}
        default: 
        return state
    }
}
