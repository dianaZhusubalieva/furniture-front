import React from "react";
import axios from "axios";
import { API } from "../helpers/const";
import { useState, useEffect } from 'react'
export const clientContext = React.createContext();

const INIT_STATE = {
  products: null,
  detailProduct: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload }
    case "GET_DETAILS":
      return { ...state, detailProduct: action.payload }
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
      resetCurrPage()
    } catch (e) {
      console.log(e);
    }
  };
  //! для страницы деталей

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
  // ! пагинация
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)
  useEffect(() => {
    if (state.products) {
      const data = state.products
      setPosts(data);
    }
  }, [state.products])

  const numberOfLastPost = currentPage * postsPerPage
  const numberOfFirstPost = numberOfLastPost - postsPerPage
  const currentPosts = posts.slice(numberOfFirstPost, numberOfLastPost)
  const totalPosts = posts.length

  const handlePage = (newPage) => {
    setCurrentPage(newPage)
  }
  function resetCurrPage() {
    setCurrentPage(1)
  }

  return (
    <clientContext.Provider
      value={{
        getProducts: getProducts,
        getDetails: getDetails,
        handlePage,
        totalPosts: totalPosts,
        currentPosts: currentPosts,
        postsPerPage: postsPerPage,
        currentPage,
        products: state.products,
        detailProduct: state.detailProduct,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContextProvider;
