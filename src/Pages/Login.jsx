import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import google from "../assets/Google.svg.png";
import { toast } from "react-toastify";
const Login = () => {
  const { userLogin, setUser, GoogleLogin } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    setSuccess(false);
    setErr("");

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setSuccess(true);
        toast.success("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("ERROR IN LOGIN --", error.message);
        toast.warning("Error in Login..!!");
        setSuccess(false);
        setErr(error.message);
      });

    // console.log(email, password);
  };
  // min-h-screen
  return (
    <div className=" flex justify-center items-center ">
      <div className="card bg-blue-300 w-full max-w-sm shrink-0 shadow-2xl rounded-none p-3 ">
        <form onSubmit={handleSubmit} className="card-body ">
          <h1 className="text-xl font-semibold text-center">
            Login your account
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input rounded-none  bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input rounded-none bg-[#F3F3F3]"
              required
            />
            <label className="label">
              <Link
                to="/forgotPassword"
                className="label-text-alt link link-hover text-red-500"
              >
                Forgot password?
              </Link>
            </label>
            {/* {<label className="label text-sm text-red-600">{err}</label>} */}
          </div>
          {/* Google login */}
          <div className="flex justify-center gap-1 mt-3 items-center w-[60%] border-2 border-blue-500 rounded-full px-1">
            <img className="w-5 h-5 rounded-full" src={google} alt="img" />
            <button
              onClick={() => {
                GoogleLogin()
                  .then(() => {
                    toast.success("Google login successful");
                    navigate("/");
                  })
                  .catch((error) => {
                    toast.warning("Google login don't succesful");
                  });
              }}
              className="text-sm"
            >
              Login with Google
            </button>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-active bg-blue-800 text-white rounded-none">
              Login
            </button>
          </div>
          {/* {success && toast.success("Login successful")}
          {err && toast.warning("Error in Login..!!")} */}
        </form>
        <p className="text-sm text-center text-gray-500 mt-2">
          Don’t Have An Account ?{" "}
          <Link to="/register" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
