import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 h-28">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                classN
                a
                me="h-5 w-5"
                fill="non
              e"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2
                  "
                  d="M4 6h16M4 1
                  2h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/alltoys">All Toys</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-28 h-16" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alltoys">All Toys</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="tooltip tooltip-left" data-tip={user.displayName}>
              <img
                src={user.photoURL}
                className="w-10 h-10 rounded-full border border-black "
              ></img>
            </div>
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-accent text-black ml-5"
              variant="dark"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn text-white" variant="dark">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
