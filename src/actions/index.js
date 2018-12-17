const setPizzas = (data) => ({ type: 'SET_PIZZAS', payload: data });
const addPizza = (data) => ({ type: 'ADD_PIZZA', payload: data });

module.exports = {
  setPizzas,
  addPizza
};
