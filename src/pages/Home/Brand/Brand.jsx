import React from "react";
import brand1 from "../../../assets/images/brand1.svg";
import brand2 from "../../../assets/images/brand2.svg";
import brand3 from "../../../assets/images/brand3.svg";
import brand4 from "../../../assets/images/brand4.svg";

const Brand = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 bg-gray-400 mt-20">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
      </div>
    </div>
  );
};

export default Brand;
