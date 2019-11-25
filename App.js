import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import ProductList from "./src/components/ProductList";
import Cart from "./src/components/Cart"

let AppContainer = createAppContainer(
  createStackNavigator({
    ProductListRoute: {
      screen: ProductList,
    },
    CartRoute : {
      screen : Cart
    }
  })
);


const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </Provider>
  );
};

export default App;
