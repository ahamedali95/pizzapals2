const initialState = Object.freeze({
  pizzas: []
});

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SET_PIZZAS':
      return { ...state, pizzas: action.payload };
    case 'ADD_PIZZA':
      return {...state, pizzas: [...state.pizzas, action.payload]};
    default:
      return state
  }
}

export default reducer;
