import React, { Fragment } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const Pizza = (props) => {
  console.log("props", props);
  const pizza = props.pizza;

  return (
    <Fragment>
      <Card className='column'>
        <Image src={pizza.URL} id='image' />
        <Card.Content>
          <Card.Header>{pizza.name}</Card.Header>
          <Card.Meta>
            <span>{pizza.creator}</span>
          </Card.Meta>
          <Card.Description>{`This is some super tasty pizza, especially since ${pizza.creator} made it.`}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {`Ingredients are: ${pizza.ingredients[0]}, ${pizza.ingredients[1]}`}
        </Card.Content>
        <Card.Content>
          <Button id='edit-button' color='red'>Edit</Button>
        </Card.Content>
      </Card>
    </Fragment>
  );
}

export default Pizza;
