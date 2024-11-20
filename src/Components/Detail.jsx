import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const Detail = () => {
  const singleData = useLoaderData();
  const {
    id,
    image,
    serviceName,
    category,
    description,
    pricing,
    duration,
    counselor,
    rating,
  } = singleData;
  return (
    <div
      className="hero w-[80%] mx-auto h-[500px]  mt-8 "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h2 className="text-2xl text-center">{serviceName}</h2>
          <h2 className="text-xl text-blue-400 text-center">{counselor}</h2>
          <p className=" text-center">{description}</p>
          <p className=" text-center">{duration}</p>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn btn-primary"
          >
            Feed Back
          </button>
          <Modal></Modal>
        </div>
      </div>
    </div>
  );
};

export default Detail;
// -mt-[266px]
