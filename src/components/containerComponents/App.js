import React, { Component } from 'react';
import '../../assets/styleSheets/App.css';
import 'semantic-ui-css/semantic.min.css';

import Header from '../presentationalComponents/Header';
import NewPizzaForm from '../presentationalComponents/NewPizzaForm';
import PizzaList from '../presentationalComponents/PizzaList';
import { setPizzas } from '../../actions/index.js';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('http://localhost:4000/pizzas')
      .then(response => response.json())
        .then(data => this.props.setPizzas(data));
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <NewPizzaForm />
        <PizzaList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (data) => (dispatch(setPizzas(data)))
  };
}

export default connect(null, mapDispatchToProps)(App);
