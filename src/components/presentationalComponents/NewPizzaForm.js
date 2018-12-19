import React from 'react';
import { Form } from 'semantic-ui-react';

import FormBuilder from '../../utils/FormBuilder';

const WrappedComponent = () => (<Form.Button positive id='form-button'>Add Pizza</Form.Button>);

const NewPizzaForm = FormBuilder(WrappedComponent, 'POST');

export default NewPizzaForm;
