import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TransactionSuccess = () => {
    return (
        <div className='tr-succ'  >
            <div >
                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" />
                <h1>Transaction Successfuly!</h1>
                <h4>Thank's for your billing</h4>
                <Link to='/products' >
                    <Button style={{ borderRadius: '20px', background: '#3CB371' }} variant='contained' >To products page</Button>
                </Link>
            </div>
        </div>
    );
};

export default TransactionSuccess;