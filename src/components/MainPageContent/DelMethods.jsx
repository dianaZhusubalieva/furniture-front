import { Container } from '@mui/material';
import React from 'react';

const DelMethods = () => {
    return (
        <div className='del-m' >
            <Container fixed >
                <h2>
                    Продаем элитную современную мебель для современного дома.</h2>
                <div className='del-block' >
                    <div className='del-items'  >
                        <img src="https://s3-us-west-2.amazonaws.com/media.modloft.com/pages/home/benefits/pricing.svg" />
                        <p>Высококачественный дизайн без
                            высоких цен.</p>
                    </div>
                    <div className='del-items' >
                        <img src="https://s3-us-west-2.amazonaws.com/media.modloft.com/pages/home/benefits/home-trial.svg" />
                        <p>Попробуйте дома
                            30 дней без риска.</p>
                    </div>
                    <div className='del-items' >
                        <img src="https://s3-us-west-2.amazonaws.com/media.modloft.com/pages/home/benefits/shipping.svg" />
                        <p>Быстрая и бесплатная доставка
                            к вам домой или в офис.</p>
                    </div>
                    <div className='del-items' >
                        <img src="https://s3-us-west-2.amazonaws.com/media.modloft.com/pages/home/benefits/swatches.svg" />
                        <p>Бесплатные образцы делают
                            решения проще.</p>
                    </div>
                    <div className='del-items' >
                        <img src="https://s3-us-west-2.amazonaws.com/media.modloft.com/pages/home/benefits/chat.svg" />
                        <p>Бесплатный профессионал
                            планировка помещения.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DelMethods;