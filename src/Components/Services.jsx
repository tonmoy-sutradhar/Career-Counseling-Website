import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useLoaderData();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-[100%] gap-6">
        {services.map((services) => (
          <ServiceCard key={services.id} services={services}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default Services;
// .slice(0, 5)
