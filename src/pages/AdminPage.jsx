import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
    return (
        <div>
            <Link to='/admin/add' >
                <Button>Add Product</Button>
            </Link>
        </div>
    );
};

export default AdminPage;