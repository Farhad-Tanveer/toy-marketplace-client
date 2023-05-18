import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      <h2 className=" text-center text-3xl font-bold mt-10">
        All Toys Section
      </h2>
      <div className="overflow-x-auto w-full mt-20">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
              <th>Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <AllToysCard key="_id" toy={toy}></AllToysCard>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
