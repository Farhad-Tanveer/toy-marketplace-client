import React from "react";
import banner from "../../../assets/images/banner.jpeg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-center bg-cover"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Dinosaur Toys</h1>
            <p className="mb-5">
              Let's enjoy new Dinosaur Toys collection, a love and cute
              collection.
            </p>
            <button className="btn btn-accent">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
