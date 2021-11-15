import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { clientContext } from '../contexts/ClientContext';
import { Button } from '@mui/material';

const CartPage = () => {
    const { getCart, cart, changeCountProduct, addAndDeleteProductInCart } = useContext(clientContext)
    useEffect(() => {
        getCart()
    }, [])
    return (
        <div>
            <h2>Корзина</h2>
            {
                cart ? (
                    cart.products.length > 0 ? (
                        <div>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Название</TableCell>
                                            <TableCell align="right">Фото</TableCell>
                                            <TableCell align="right">Кол-во</TableCell>
                                            <TableCell align="right">Сумма</TableCell>
                                            <TableCell align="right">#</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cart.products.map((item) => (
                                            <TableRow
                                                key={item.product1.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {item.product1.name}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <img width='50px' src={item.product1.image} alt="" />
                                                </TableCell>

                                                <TableCell align="right">
                                                    <input onChange={(e) => changeCountProduct(e.target.value, item.product1.id)} type="number" value={item.count} />
                                                </TableCell>

                                                <TableCell align="right">{item.subPrice} com </TableCell>
                                                <TableCell align="right"><Button
                                                    onClick={() => {
                                                        addAndDeleteProductInCart(item.product1)
                                                        getCart()
                                                    }} >Удалить из корзины</Button> </TableCell>

                                            </TableRow>
                                        ))}
                                        <TableRow>
                                            <TableCell colSpan={3} align='right' >Total:</TableCell>
                                            <TableCell colSpan={1} align='right' >{cart.totalPrice} com</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ) : (<h2>У вас нет товаров</h2>)

                ) : (
                    <h2>Loading...</h2>
                )
            }

        </div>

    );
};

export default CartPage;