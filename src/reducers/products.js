import { GET_PRODUCTS, ADD_PRODUCT_TO_CARD } from "../actions/types";

const initialState = {
    productList: {
        data: null,
        loading: true
    },
    cartList: {
        data: [],
        loading: true
    }
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                productList: {
                    data: payload,
                    loading: false
                }
            }
        case ADD_PRODUCT_TO_CARD:
            const item = state.productList.data.filter(i=>i.id === payload)[0];
            return {
                ...state,
                cartList: {
                    data: [...state.cartList.data, {
                        ...item,
                        quantity : 1
                    }],
                    loading: false
                }
            }
        default : 
            return state;
    }
}