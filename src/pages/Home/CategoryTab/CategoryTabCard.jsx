import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";

const CategoryTabCard = ({ toy }) => {
  const { _id, image, title, price, rating } = toy;

  return (
    <div>
      <div className="card card-compact w-full h-full bg-base-100 shadow-xl mt-10 mb-10">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{title}</h2>
          <p className=" text-xl font-bold text-accent">
            <span className="mr-1">&euro;</span>
            {price}
          </p>
          <div className=" flex justify-between">
            <div className="card-actions flex justify-between">
              <div className="flex justify-center items-center gap-2 border border-black rounded p-3">
                <FaHeart color="tomato"></FaHeart>
                <p>{rating}</p>
              </div>
            </div>
            <div>
              <Link to={`/toyDetails/${_id}`}>
                <button className="btn btn-accent">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabCard;
