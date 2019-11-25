import React from 'react';
import { List, View, Avatar} from 'react-native-paper';

const CartListItem = (props) => (
  <View>
    <Avatar source={{ uri: props.image }} />
    <List.Item
      title={props.name}
      description={props.description}
      left={props => <List.Icon {...props} icon="folder" />}
    />
  </View>
);

export default CartListItem;