import { NavLink } from "react-router-dom";

const ClientCard = ({ client }) => {
  const { id, img, case_study_name, description } = client;

  return (
    <>
      <div className="hero bg-white h-[201px] w-full">
        <div className="w-full bg-blue-100 flex p-9 justify-center items-center rounded-lg">
          <div>
            <img src={img} className="w-[100px] rounded-lg" />
          </div>
          <div className="ml-4">
            <h1 className="text-4xl font-bold">{case_study_name}</h1>
            <p className="">{description}</p>
          </div>
          <NavLink to={`/clientDetails/${id}`} className="btn btn-primary">
            Learn More
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ClientCard;
