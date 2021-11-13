import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { clientContext } from '../contexts/ClientContext';
import MyNavbar from "../components/MyNavbar";

const DetailPage = () => {
    const { getDetails, detailProduct } = useContext(clientContext)
    const params = useParams()
    useEffect(() => {
        getDetails(params.id)
    }, [])
    return (
        <>
            <MyNavbar />
            <div className='detail-page'>
                {
                    detailProduct ? (

                        <div className="details" key={detailProduct.id}>
                            <div className="big-img">
                                <img src={detailProduct.image} alt="" />
                            </div>

                            <div className="box">
                                <div className="row">
                                    <h2>{detailProduct.name}</h2>
                                    <span>${detailProduct.price}</span>
                                </div>
                                <p><strong>Модель : </strong>{detailProduct.model}</p>
                                <p><strong>Описание : </strong>{detailProduct.description}</p>


                                <button className="cart">Add to cart</button>

                            </div>
                        </div>
                    ) : (
                        <h2>Loading...</h2>
                    )
                }

            </div>
        </>
    );
};

export default DetailPage;