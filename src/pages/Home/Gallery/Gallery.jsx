import React from "react";
import img1 from "../../../assets/images/gallery/g1.jpeg";
import img2 from "../../../assets/images/gallery/g2.jpeg";
import img3 from "../../../assets/images/gallery/g3.jpeg";

const Gallery = () => {
  return (
    <div>
      <div className=" text-center my-20">
        <h1 className=" text-3xl font-bold">Dinosaur</h1>
        <div className=" my-10 w-1/2 mx-auto h-8 bg-yellow-500"></div>
      </div>
      <div className=" grid grid-cols-3 gap-2 h-80">
        <img
          className="w-full h-80 object-cover  rounded-md"
          src={img1}
          alt=""
        />
        <img
          className="w-full h-80 object-cover rounded-md"
          src={img2}
          alt=""
        />
        <img
          className="w-full h-80 object-cover rounded-md"
          src={img3}
          alt=""
        />
        <img
          className="w-full h-80 object-cover rounded-md"
          src={img3}
          alt=""
        />
        <img
          className="w-full h-80 object-cover rounded-md"
          src={img1}
          alt=""
        />
        <img
          className="w-full h-80 object-cover rounded-md"
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
