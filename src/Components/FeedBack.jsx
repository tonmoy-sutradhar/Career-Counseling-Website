import React from "react";
import { useOutletContext } from "react-router-dom";

const FeedBack = () => {
  const { feedbacks } = useOutletContext();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        Feedback Details Here.
      </h1>
      <div className="text-xl font-sm mb-1 text-start bg-blue-200 p-4 rounded-lg">
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, index) => (
            <div key={index} className="mb-4">
              <p> * {feedback}</p>
            </div>
          ))
        ) : (
          <p>No feedback provided yet.</p>
        )}
      </div>
    </div>
  );
};

export default FeedBack;
