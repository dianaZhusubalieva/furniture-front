import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminContextProvider from "./contexts/AdminContext";
import ClientContextProvider from "./contexts/ClientContext";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import AllProducts from "./pages/AllProducts";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";
const MyRoutes = () => {
  return (
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

          </Routes>
        </BrowserRouter>
      </ClientContextProvider>
    </AdminContextProvider>
  );
};

export default MyRoutes;
