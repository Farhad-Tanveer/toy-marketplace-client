import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import CategoryTab from "../CategoryTab/CategoryTab";
import Gallery from "../Gallery/Gallery";
import OrderNow from "../OrderNow/OrderNow";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DinoToy|Home</title>
      </Helmet>
      <Banner></Banner>
      <Gallery></Gallery>
      <CategoryTab></CategoryTab>
      <Brand></Brand>
      <OrderNow></OrderNow>
    </div>
  );
};

export default Home;
