import React from "react";
import img1 from "../../../assets/images/gallery/g1.jpeg";
import img2 from "../../../assets/images/gallery/g2.jpeg";
import img3 from "../../../assets/images/gallery/g3.jpeg";
import img4 from "../../../assets/images/gallery/g4.jpeg";
import img5 from "../../../assets/images/gallery/g5.jpeg";
import img6 from "../../../assets/images/gallery/g6.jpeg";

const Gallery = () => {
  return (
    <div>
      <div className=" text-center my-20">
        <h1 className=" text-6xl font-bold tracking-wide">Dinosaur</h1>
        <div className=" my-10 w-1/2 mx-auto h-8 bg-yellow-500"></div>
      </div>
      <div className=" grid lg:grid-cols-3 gap-2">
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
          src={img4}
          alt=""
        />
        <img
          className="w-full h-80 object-cover rounded-md"
          src={img5}
          alt=""
        />
        <img
          className="w-full h-80 object-cover rounded-md"
          src={img6}
          alt=""
        />
      </div>
      <h1 className=" text-center mt-10 text-gray-500">
        Step into a world of endless possibilities in our toy gallery, <br />{" "}
        where curiosity is rewarded with a kaleidoscope of playful wonders!
      </h1>
    </div>
  );
};

export default Gallery;
