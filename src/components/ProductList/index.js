import React, { useEffect } from 'react';
import { List, Text, Title } from 'react-native-paper';
import ListItem from "./item";
import { getProducts, addProductToCard } from "../../actions/products";
import { connect } from "react-redux";
import { StyleSheet, FlatList, TouchableWithoutFeedback } from "react-native";
import Preloader from "../common/Preloader"

const ProductList = ({ getProducts,addProductToCard, productList, loading }) => {
    useEffect(() => {
        getProducts();
    }, [])

    const handlePress = (productId) => {
        addProductToCard(productId);
    }

    return (
        !loading && productList ?
            <FlatList
                data={productList}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.name}
                        price={item.price}
                        image={item.image}
                        onPress={() => handlePress(item.id)}
                    />
                )}
                keyExtractor={item => item.id}
            /> :
            <Preloader />
    )
};

ProductList.navigationOptions =  ({navigation}) => {
    return {
      headerTitle: 'Pizza',
      headerRight: (
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('CartRoute')}>
          <Title style={{paddingRight: 15}}>Cart</Title>
        </TouchableWithoutFeedback>
      ),
    };
 };

const mapStateToProps = (state) => ({
    productList: state.products.productList.data,
    loading: state.products.productList.loading
})

export default connect(mapStateToProps, { getProducts,addProductToCard })(ProductList);

const styles = StyleSheet.create({
    productListContainer: {

    }
})
