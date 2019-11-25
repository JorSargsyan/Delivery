import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const ListItem = (props) => (
      <Card>
        <Card.Content>
          <Title>{props.title}</Title>
          <Paragraph>{props.price}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: props.image }} />
        <Card.Actions>
          <Button onPress={props.onPress}>Add to Cart</Button>
        </Card.Actions>
      </Card>
);

export default ListItem;