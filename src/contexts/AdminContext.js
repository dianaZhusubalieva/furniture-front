import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { API } from "../helpers/const";

export const adminContext = React.createContext();
const INIT_STATE = {
  products: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
const AdminContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! CREATE

  const addProduct = async (product) => {
    console.log(product);
    try {
      const { data } = await axios.post(API, product);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };

  //! READ. get from json
  const getProducts = async () => {
    try {
      const response = await axios(API);
      let action = {
        type: "GET_PRODUCTS",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  //! UPDATE

  const getProductToEdit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCT_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  //! DELETE
  const deleteProduct = async (id) => {
    try {
      axios.delete(`${API}/${id}`);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <adminContext.Provider
      value={{
        addProduct: addProduct,
        getProducts: getProducts,
        products: state.products,
        getProductToEdit: getProductToEdit,
        deleteProduct: deleteProduct,
      }}
    >
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminContextProvider;
