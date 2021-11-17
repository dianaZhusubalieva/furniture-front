import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registerpage from "../src/pages/RegisterPage";
import LoginPage from "../src/pages/LoginPage.jsx";

import AdminContextProvider from "./contexts/AdminContext";
import AuthContextProvider from "./contexts/AuthContext";
import ClientContextProvider from "./contexts/ClientContext";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import AllProducts from "./pages/AllProducts";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";

import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import CartPage from "./pages/CartPage";

import OrderPage from "./pages/OrderPage";


import PaymentPage from "./pages/PaymentPage";
import TransactionSuccess from "./pages/TransactionSuccess";
// import PaymentPage from "./pages/PaymentPage";

const MyRoutes = () => {
  return (
    <AuthContextProvider>
      <AdminContextProvider>
        <ClientContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/add" element={<AddPage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/admin/edit/:id" element={<EditPage />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/product/:id" element={<DetailPage />} />
              <Route path="/register" element={<Registerpage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgot" element={<ForgotPasswordPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/pay" element={<PaymentPage />} />
              <Route path="/transactionsuccess" element={<TransactionSuccess />} />

            </Routes>
          </BrowserRouter>
        </ClientContextProvider>
      </AdminContextProvider>
    </AuthContextProvider>
  );
};

export default MyRoutes;
