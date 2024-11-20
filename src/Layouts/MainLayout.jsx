import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Modal from "../Components/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (newFeedback) => {
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, newFeedback]);
  };

  return (
    <>
      <div className="bg-white">
        <Navbar />

        <Modal addFeedback={addFeedback} />

        <div className="min-h-[calc(100vh-288px)] py-12 container mx-auto px-11">
          <Outlet context={{ feedbacks }} />
        </div>

        <Footer></Footer>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default MainLayout;
