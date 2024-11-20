import { toast } from "react-toastify";
import { auth } from "../Provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // console.log("Password reset email sent!");
        toast.success("Password reset email sent. Check your email!");
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    console.log(email);
  };
  return (
    <div className=" flex justify-center items-center ">
      <div className="card bg-blue-300 w-full max-w-sm shrink-0 shadow-2xl rounded-none p-3 ">
        <form onSubmit={handleSubmit} className="card-body ">
          <h1 className="text-xl font-semibold text-center">
            Change your password
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

          {/* Google login */}

          <div className="form-control mt-6">
            <button className="btn btn-active bg-blue-800 text-white rounded-none">
              Reset password
            </button>
          </div>
          {/* {success && alert("User login successfully..!!!")} */}
          {/* {err && <p className="text-red-600">{err}</p>} */}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
