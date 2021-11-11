import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar'
import AdminContextProvider from './contexts/AdminContext';
import ClientContextProvider from './contexts/ClientContext';
import AddPage from './pages/AddPage';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';
const MyRoutes = () => {
    return (
        <AdminContextProvider>
            <ClientContextProvider>
                <BrowserRouter>
                    <MyNavbar />
                    <Routes>

                        <Route path='/admin' element={<AdminPage />} />
                        <Route path='/admin/add' element={<AddPage />} />
                        <Route path='/' element={<MainPage />} />

                    </Routes>
                </BrowserRouter>
            </ClientContextProvider>
        </AdminContextProvider>
    );
};

export default MyRoutes;