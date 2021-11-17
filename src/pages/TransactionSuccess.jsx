import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TransactionSuccess = () => {
    return (
        <div className='tr-succ'  >
            <div >
                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" />
                <h1>Транзакция прошла успешно!</h1>
                <h4>Спасибо за покупку</h4>
                <Link to='/products' >
                    <Button style={{ borderRadius: '20px', background: '#3CB371' }} variant='contained' >На страницу продуктов</Button>
                </Link>
            </div>
        </div>
    );
};

export default TransactionSuccess;