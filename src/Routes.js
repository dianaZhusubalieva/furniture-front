import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar'
import AdminContextProvider from './contexts/AdminContext';
import AddPage from './pages/AddPage';
import AdminPage from './pages/AdminPage';
const MyRoutes = () => {
    return (
        <AdminContextProvider>
            <BrowserRouter>
                <MyNavbar />
                <Routes>

                    <Route path='/admin' element={<AdminPage />} />
                    <Route path='/admin/add' element={<AddPage />} />

                </Routes>
            </BrowserRouter>
        </AdminContextProvider>
    );
};

export default MyRoutes;