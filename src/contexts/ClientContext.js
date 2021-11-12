import React from "react";
import axios from "axios";
import { API } from "../helpers/const";
export const clientContext = React.createContext();

const INIT_STATE = {
  products: null,
  detailProduct: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    //   case "GET_DETAILS":
    //       return{...state. detailProduct: action.payload}
    default:
      return state;
  }
};
const ClientContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      let filter = window.location.search;
      const response = await axios(`${API}${filter}`);
      dispatch({
        type: "GET_PRODUCTS",
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
  //! для страницы деталей телефона

  const getDetails = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      dispatch({
        type: "GET_DETAILS",
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <clientContext.Provider
      value={{
        getProducts: getProducts,
        getDetails: getDetails,

        products: state.products,
        detailProduct: state.detailProduct,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContextProvider;
