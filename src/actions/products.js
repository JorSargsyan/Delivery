import { GET_PRODUCTS, ADD_PRODUCT_TO_CARD } from "./types"
import {data} from "../data/products";

export const getProducts = () => {
    return async dispatch => {
        const result = data;
        setTimeout(() => {
            dispatch({
                type: GET_PRODUCTS,
                payload: result
            })
        },3000)
    };
};

export const addProductToCard = (productId) => {
    return async dispatch => {
        dispatch({
            type: ADD_PRODUCT_TO_CARD,
            payload: productId
        })
    };
};