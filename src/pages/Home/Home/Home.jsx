import React from "react";
import Banner from "../Banner/Banner";
import CategoryTab from "../CategoryTab/CategoryTab";
import Gallery from "../Gallery/Gallery";
import OrderNow from "../OrderNow/OrderNow";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <CategoryTab></CategoryTab>
      <OrderNow></OrderNow>
    </div>
  );
};

export default Home;
