import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
// import Services from "./Services";
import Services from "./Services";
import ServiceCard from "./ServiceCard";
import SubBanner from "./SubBanner";

const Home = () => {
  const services = useLoaderData();
  return (
    <>
      <div className="-mt-3">
        <Banner></Banner>
      </div>

      <div>
        <SubBanner></SubBanner>
      </div>

      {/* services data */}
      <div className="my-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-[100%] gap-6">
          {services.slice(0, 5).map((services) => (
            <ServiceCard key={services.id} services={services}></ServiceCard>
          ))}
        </div>
        <div className="text-center mt-9">
          <NavLink
            to="/services"
            className="badge badge-outline px-5 py-4 bg-blue-900 text-white"
          >
            View More
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
