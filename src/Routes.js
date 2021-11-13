import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registerpage from "../src/pages/RegisterPage";
import LoginPage from "../src/pages/LoginPage.jsx";

import MyNavbar from "./components/MyNavbar";
import AdminContextProvider from "./contexts/AdminContext";
import AuthContextProvider from "./contexts/AuthContext";
import ClientContextProvider from "./contexts/ClientContext";
import AddPage from "./pages/AddPage";
import AdminPage from "./pages/AdminPage";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";
const MyRoutes = () => {
  return (
    <AuthContextProvider>
      <AdminContextProvider>
        <ClientContextProvider>
          <BrowserRouter>
            <MyNavbar />
            <Routes>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/add" element={<AddPage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/admin/edit/:id" element={<EditPage />} />
              <Route path="/register" element={<Registerpage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        </ClientContextProvider>
      </AdminContextProvider>
    </AuthContextProvider>
  );
};

export default MyRoutes;
