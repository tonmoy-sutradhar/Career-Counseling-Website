import React from "react";
import { toast } from "react-toastify";

const Modal = ({ addFeedback }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newFeedback = formData.get("address");

    if (newFeedback) {
      addFeedback(newFeedback);
      toast.success("Thank you for your feedback!");
    }
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box text-black">
        <form onSubmit={handleSubmit}>
          <h1>Give your feed-back in here.</h1>
          <label className="input input-bordered flex items-center gap-2 my-2">
            <input
              type="text"
              name="address"
              className="grow"
              placeholder="Write your feedback"
              required
            />
          </label>
          <div className="flex items-center justify-center">
            <div className="mt-6 mr-3">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
            <div className="modal-action items-center">
              <form method="dialog">
                <button className="btn btn-warning">Close</button>
              </form>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
