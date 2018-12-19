import React from 'react';
import { Form } from 'semantic-ui-react';
import autoBind from 'react-autobind';

import { addPizza } from '../../actions/index.js';

import { connect } from 'react-redux';

class NewPizzaForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredient1: '',
      ingredient2: '',
      name: '',
      style: '',
      creator: '',
      URL: ''
    }

    autoBind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state));
  }

  onSubmit(event) {
    event.preventDefault();

    const data = { name: this.state.name, style: this.state.style, creator: this.state.creator, URL: this.state.URL, ingredients: [this.state.ingredient1, this.state.ingredient2] };
    fetch('http://localhost:4000/pizzas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
     .then(response => response.json())
      .then(data => {
        this.props.addPizza(data);
        this.clearForm();
      });
  }

  clearForm() {
    this.setState({
      ingredient1: '',
      ingredient2: '',
      name: '',
      style: '',
      creator: '',
      URL: ''
    });
  }

  render() {
    return (
      <Form id='form' onSubmit={this.onSubmit}>
        <Form.Group inline>
          <label id='form-title'><strong>Create a Pizza</strong></label>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Ingredient Name' placeholder='First Ingredient' name='ingredient1' value={this.state.ingredient1} onChange={this.onChange} />
          <Form.Input fluid label='Ingredient Name' placeholder='Second Ingredient' name='ingredient2' value={this.state.ingredient2} onChange={this.onChange} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input placeholder='Name' name='name' value={this.state.name} onChange={this.onChange} />
          <Form.Input placeholder='Style' name='style' value={this.state.style} onChange={this.onChange} />
          <Form.Input placeholder='Creator' name='creator' value={this.state.creator} onChange={this.onChange} />
          <Form.Input placeholder='Image URL' name='URL' value={this.state.URL} onChange={this.onChange} />
        </Form.Group>
        <Form.Button positive id='form-button'>Add Pizza</Form.Button>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPizza: (data) => (dispatch(addPizza(data)))
  };
}

export default connect(null, mapDispatchToProps)(NewPizzaForm);
