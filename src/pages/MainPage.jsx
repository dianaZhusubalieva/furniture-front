import React from "react";
import MyHeader from "../components/MainPageContent/MyHeader";
import MyContent1 from "../components/MainPageContent/MyContent1";
import MyContent2 from "../components/MainPageContent/MyContent2";
import MyFooter from "../components/MainPageContent/MyFooter";

import MyContent4 from "../components/MainPageContent/MyContent4";

import MainPageNavbar from "../components/MainPageNavbar";
import DelMethods from "../components/MainPageContent/DelMethods";

const MainPage = () => {
  return (
    <>
      <MainPageNavbar />
      <MyHeader />
      <MyContent1 />
      <MyContent2 />

      <MyContent4 />
      <DelMethods />
      <MyFooter />
    </>
  );
};

export default MainPage;
