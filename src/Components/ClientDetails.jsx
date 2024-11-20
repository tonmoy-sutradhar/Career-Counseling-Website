import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ClientDetails = () => {
  const detailsData = useLoaderData();
  console.log(detailsData);
  return (
    <div className="hero bg-blue-200 min-h-full py-6 rounded-xl">
      <div className="hero-content  text-justify">
        <div className="max-w-full">
          <h1 className="text-5xl font-bold">{detailsData.case_study_name}</h1>
          <p className="py-6">{detailsData.details}</p>
          <button className="btn btn-primary">Great</button>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
