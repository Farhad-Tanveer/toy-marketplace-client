import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaHamburger, FaHeart } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    _id,
    title,
    name,
    price,
    category,
    rating,
    image,
    quantity,
    description,
  } = toy;
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div>
            <img src={image} className="max-w-lg rounded-lg shadow-2xl" />
          </div>
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p>{category}</p>
            <div className="divider"></div>
            <p className=" text-6xl text-red-400">
              {" "}
              <span className=" mr-3">&euro;</span>
              {price}
            </p>
            <div className="divider"></div>
            <h1 className=" text-lg font-bold">DETAILS</h1>
            <p className="pt-2 pb-6">{description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
