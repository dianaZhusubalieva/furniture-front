import React from 'react';
import axios from 'axios'
import { API } from '../helpers/const'
export const clientContext = React.createContext()
const INIT_STATE = {
    products: null
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return { ...state, products: action.payload }
        default: return state
    }
}
const ClientContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, INIT_STATE)

    const getProduct = async () => {
        try {
            const { data } = await axios(API)
            dispatch({
                type: 'GET_PRODUCTS',
                payload: data
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <clientContext.Provider>
            {children}
        </clientContext.Provider>
    );
};

export default ClientContextProvider;