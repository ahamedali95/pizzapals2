import React from 'react';
import Pizza from './Pizza';
import { connect } from 'react-redux';

const PizzaList = (props) => {
  return (
    <div id='pizza-list' className='ui three doubling stackable cards'>
      {
        props.pizzas.map((pizzaObj, idx) => {
          return <Pizza key={idx} pizza={pizzaObj} />
        })
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas
  };
}

export default connect(mapStateToProps)(PizzaList);
