import { useLoaderData } from "react-router-dom";
import ClientCard from "./ClientCard";
import imge from "../assets/client.jpg";

const Client = () => {
  const clientData = useLoaderData();
  return (
    <>
      <div className="card bg-white image-full w-full h-[300px] -mt-10">
        <figure>
          <img src={imge} alt="Shoes" />
        </figure>
        <div className="card-body  ">
          <h1>CLIENTS & CASE STUDIES</h1>
          <p className="text-center text-3xl font-thin pt-20 text-white">
            From students to CEOs, we've helped people at all stages of their
            careers to develop and find meaningful work.
          </p>
        </div>
      </div>
      {/* <div
        className="hero min-h-screen"
        style={{
          backgroundImage: { imge },
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
      <div>
        {clientData.map((client) => (
          <ClientCard key={client.id} client={client}></ClientCard>
        ))}
      </div>
    </>
  );
};

export default Client;
