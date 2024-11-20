import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import MyProfile from "../Components/MyProfile";
import About from "../Components/About";
import Services from "../Components/Services";
import Detail from "../Components/Detail";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../Pages/ForgotPassword";
import Client from "../Components/Client";
import ClientDetails from "../Components/ClientDetails";
import FeedBack from "../Components/FeedBack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Detail></Detail>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("services.json");
          const data = await res.json();

          const singleData = data.find((f) => f.id == params.id);

          return singleData;
        },
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
        path: "/forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/client",
        element: <Client></Client>,
        loader: () => fetch("client.json"),
      },
      {
        path: "/feedback",
        element: (
          <PrivateRoute>
            <FeedBack></FeedBack>
          </PrivateRoute>
        ),
      },
      {
        path: "/clientDetails/:id",
        element: (
          <PrivateRoute>
            <ClientDetails></ClientDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("client.json");
          const data = await res.json();

          const detailsData = data.find((f) => f.id == params.id);

          return detailsData;
        },
      },
      {
        path: "*",
        element: (
          <h1 className="text-center text-5xl text-red-500 mt-[180px]">
            PAGE NOT FOUND 404🎃
          </h1>
        ),
      },
    ],
  },
]);
export default router;
