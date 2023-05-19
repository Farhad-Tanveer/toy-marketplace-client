import React from "react";
import img from "../../../assets/images/img1.png";

const OrderNow = () => {
  return (
    <div>
      <div className=" min-h-screen ">
        <div className=" hero-content flex flex-col justify-between items-center lg:flex-row">
          <img src={img} className=" scale-150" />
          <div className=" mt-64">
            <h1 className=" text-8xl font-bold">Dinosaur Toys</h1>
            <p className="py-12 text-3xl text-gray-500">
              We Dino are ready to deliver orders <br /> to your doorstep.
            </p>
            <button className="btn btn-accent rounded-full">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
