import React from 'react';
import MyHeader from '../components/MainPageContent/MyHeader';
import MyContent1 from '../components/MainPageContent/MyContent1';
import MyContent2 from '../components/MainPageContent/MyContent2';
import MyFooter from '../components/MainPageContent/MyFooter';
import MyContent3 from '../components/MainPageContent/MyContent3';
import MyContent4 from '../components/MainPageContent/MyContent4';


const MainPage = () => {
    return (
        <>
            <MyHeader />
            <MyContent1 />
            <MyContent2 />
            <MyContent3 />
            <MyContent4 />
            <MyFooter />
        </>
    );
};

export default MainPage;