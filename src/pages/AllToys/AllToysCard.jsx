import React from "react";
import Swal from "sweetalert2";

const AllToysCard = ({ toy }) => {
  const { title, name, price, category, image, quantity } = toy;

  const handleDelete = (id) => {};

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={image} />
          </div>
        </div>
      </td>
      <td>
        <div>{title}</div>
        <div>
          <span>Category: </span>
          {category}
        </div>
      </td>
      <td>{name}</td>
      <td>
        <span>&euro;</span> {price}
      </td>
      <td>
        <span>Quantity: </span>
        {quantity}
      </td>
      <th>
        <button className="btn btn-xs mr-2">Edit</button>
      </th>
      <th>
        <button className="btn btn-ghost btn-xs">View Details</button>
      </th>
    </tr>
  );
};

export default AllToysCard;
