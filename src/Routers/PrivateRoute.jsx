import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user, loading } = useContext(AuthContext);
  if (user && user?.email) {
    return children;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
