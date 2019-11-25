import React from 'react';
import {Text,FlatList,StyleSheet,View} from "react-native";
import {connect} from "react-redux";
import CartListItem from "./item"; 

const Cart = ({cartList}) => {
    alert(JSON.stringify(cartList));
    return (
        cartList.length ? 
        <FlatList
            data={cartList}
            renderItem={({ item }) => (
                <CartListItem
                    title={item.name}
                    price={item.price}
                    image={item.image}
                />
            )}
            keyExtractor={item => item.id}
        /> :
        <View style={styles.emptyTextContent}>
            <Text style={styles.emptyText}>Cart is empty</Text>
        </View>
        
    )
}

const mapStateToProps = (state) => ({
    cartList : state.products.cartList.data
})

const styles = StyleSheet.create({
    emptyTextContent : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    emptyText : {
        fontSize : 25,
        textAlign : "center",
        padding : 15
    }
})

export default connect(mapStateToProps,{})(Cart)
