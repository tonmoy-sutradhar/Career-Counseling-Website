import { NavLink } from "react-router-dom";

const ServiceCard = ({ services }) => {
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
  } = services;
  // console.log(services);
  return (
    <>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img className="w-full h-[300px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {serviceName}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <h1 className="text-xl font-bold">
            counselor: <span className="text-blue-400">{counselor}</span>
          </h1>
          <p>price: $ {pricing}</p>
          <p className="text-gray-500">{description}</p>
          <div className="card-actions justify-end">
            <NavLink
              to={`/details/${id}`}
              className="badge badge-outline px-5 py-4 bg-blue-500 text-white"
            >
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
// "id":
// "image"
// "serviceName":
// "category":
// "description":
// "pricing":
// "duration":
// "counselor":
// "rating:
