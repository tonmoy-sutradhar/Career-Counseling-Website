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
          try {
            // Ensure the correct relative path to public/services.json
            const res = await fetch("/services.json");

            if (!res.ok) {
              throw new Error(
                `Failed to fetch services.json: ${res.statusText}`
              );
            }

            const data = await res.json();

            // Match the data with the `id` from params
            const singleData = data.find((f) => f.id == params.id);

            if (!singleData) {
              throw new Error(`No data found for ID: ${params.id}`);
            }

            return singleData;
          } catch (error) {
            console.error("Loader error:", error.message);
            throw error; // Propagate the error to show an error boundary or message
          }
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
        loader: async () => {
          try {
            const res = await fetch("/client.json"); // Ensure the correct path to the public folder

            if (!res.ok) {
              throw new Error(`Failed to fetch client.json: ${res.statusText}`);
            }

            const data = await res.json();
            return data;
          } catch (error) {
            console.error("Loader error:", error.message);
            throw error; // Propagate the error for error handling
          }
        },
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
          try {
            // Ensure the correct path to the JSON file
            const res = await fetch("/client.json");
            if (!res.ok) {
              throw new Error(`Failed to fetch client.json: ${res.statusText}`);
            }

            const data = await res.json();

            // Find the data that matches the ID from params
            const detailsData = data.find((f) => f.id == params.id);

            if (!detailsData) {
              throw new Error(`No data found for ID: ${params.id}`);
            }

            return detailsData;
          } catch (error) {
            console.error("Loader error:", error.message);
            throw error; // Propagate error for error handling
          }
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
