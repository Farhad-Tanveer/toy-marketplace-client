import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import MyToys from "../pages/MyToys/MyToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-navy.vercel.app/allToys/${params.id}`
          ),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-navy.vercel.app/allToys/${params.id}`
          ),
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>,
      },
    ],
  },
]);

export default router;
