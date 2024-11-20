import { useContext, useState } from "react";
import { AuthContext } from "./../Provider/AuthProvider";
import google from "../assets/Google.svg.png";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile, GoogleLogin } =
    useContext(AuthContext);

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    const terms = form.get("terms");

    setErr("");
    setSuccess(false);

    if (password.length <= 6) {
      setErr("Password must be more than 6 characters.");
      toast.warning("Password must be more than 6 characters.");
      return;
    }

    if (!terms) {
      setErr("Please Accept Terms & Condition");
      toast.warning("Please Accept Terms & Condition");
      return;
    }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!regex.test(password)) {
      setErr(
        "Password must contain more than six characters, one number, one uppercase letter, and one special character."
      );
      toast.warning(
        "Password must contain more than six characters, one number, one uppercase letter, and one special character."
      );
      return;
    }

    // Create new user
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setSuccess(true);
        toast.success("Sign up successfully.");

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
            console.log("Profile Update.");
          })
          .catch((error) => {
            console.log("ERROR IN PROFILE --", error);
          });
      })
      .catch((error) => {
        console.log("ERROR IN REGISTER --", error.message);
        toast.warning(`Error: ${error.message}`);
        setSuccess(false);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-blue-300 w-full max-w-sm shrink-0 shadow-2xl rounded-none p-3">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-xl font-semibold text-center">
            Register your account
          </h1>
          <hr />
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input rounded-none bg-[white]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="input rounded-none bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input rounded-none bg-[white]"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input rounded-none bg-[white]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-2xl absolute right-4 top-12"
            >
              {showPassword ? <IoMdEyeOff /> : <IoEyeSharp />}
            </button>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label justify-start">
              <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-success"
              />
              <span className="label-text ml-2 text-gray-400">
                Accept Terms & Conditions
              </span>
            </label>
          </div>

          <div className="flex justify-center gap-1 mt-3 items-center w-[60%] border-2 border-blue-500 rounded-full px-1">
            <img className="w-5 h-5 rounded-full" src={google} alt="img" />
            <button
              type="button"
              onClick={() => {
                GoogleLogin()
                  .then(() => {
                    toast.success("Google login successful");
                    navigate("/");
                  })
                  .catch((error) => {
                    toast.warning("Google login unsuccessful");
                  });
              }}
              className="text-sm"
            >
              Login with Google
            </button>
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-active bg-blue-800 text-white rounded-none"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-black font-thin text-center">
          Already have an Account?{" "}
          <Link
            className="text-blue-700 text-sm font-bold border-b-2 border-blue-700"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
