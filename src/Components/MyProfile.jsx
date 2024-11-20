import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { updateUserProfile, user, setUser, loading } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [img, setImg] = useState(user?.photoURL || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateData = {
      displayName: name,
      photoURL: img,
    };

    updateUserProfile(updateData)
      .then(() => {
        setUser((prevUser) => ({
          ...prevUser,
          displayName: name,
          photoURL: img,
        }));
        // alert("Profile updated successfully!");
        toast.success("Profile update Successfully");
      })
      .catch((error) => {
        // console.error("Error updating profile:", error);
        toast.warning("Profile update not successful");
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-500 text-center">
        My Profile
      </h1>

      <div className="card bg-blue-100 w-[90%] md:w-[65%] shadow-xl mx-auto mt-5">
        <div className="avatar mt-4">
          <div className="mask mask-hexagon w-32 md:w-48 mx-auto">
            <img
              className="w-[100px] h-[100px]"
              src={user?.photoURL || ""}
              alt="profile-Img"
            />
          </div>
        </div>
        <div className="card-body text-start">
          <div className="flex flex-col md:flex-row justify-evenly items-center">
            {/* User Details Section */}
            <div className="w-full md:w-[50%] mb-5 md:mb-0">
              <h2 className="text-xl font-bold">
                My Name: {user?.displayName}
              </h2>
              <h2 className="text-xl font-bold py-3">
                My Email:{" "}
                <span className="text-blue-500 text-sm">{user?.email}</span>
              </h2>
              <h2 className="text-sm font-thin">
                <span className="text-xl font-bold">PhotoURL: </span>
                {user?.photoURL}
              </h2>
            </div>

            {/* Update Information Section */}
            <div className="w-full md:w-[50%]">
              <form onSubmit={handleSubmit}>
                <h1 className="text-xl font-bold text-purple-800 mb-3 underline">
                  Update Your Information
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="Enter your photo URL"
                    className="input rounded-none bg-[white]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-active mt-3 rounded-xl bg-blue-800 text-white mb-4"
                >
                  Save Change
                </button>
              </form>
              <Link
                title="Click here to change the password"
                to="/forgotPassword"
                className="text-red-600 text-xl"
              >
                Update Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
