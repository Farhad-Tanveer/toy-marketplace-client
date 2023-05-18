import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:3000/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((error) => console.log(error));

    console.log(data);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <div className=" grid grid-cols-2 gap-5 p-10">
              <div>
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <input
                  className=" input input-bordered w-full max-w-xs"
                  {...register("title")}
                  placeholder="title"
                  defaultValue="Dino"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  {...register("price", { required: true })}
                  placeholder="price"
                  defaultValue="10"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  {...register("rating", { required: true })}
                  placeholder="rating"
                  defaultValue="good"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  {...register("quantity", { required: true })}
                  placeholder="quantity"
                  defaultValue="30"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  className="input input-bordered w-full max-w-xs"
                  {...register("category")}
                >
                  <option value="T-Rex">T-Rex</option>
                  <option value="Daspletosaurus">Daspletosaurus</option>
                  <option value="Armored Triceratops">
                    Armored Triceratops
                  </option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  {...register("image")}
                  placeholder="image link"
                  type="url"
                  defaultValue="https://images.unsplash.com/photo-1584844115436-473887b1e327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  value={user?.email}
                  {...register("email")}
                  placeholder="your email"
                  type="email"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  value={user?.displayName}
                  {...register("name")}
                  placeholder="Your Name"
                  type="text"
                />
              </div>

              <input
                className="input input-bordered w-full max-w-xs"
                {...register("description")}
                placeholder="description"
              />
            </div>
            <input className="btn w-full" value="Add Toy" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
