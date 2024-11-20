import img from "../assets/about.jpg";
import img2 from "../assets/about2.jpg";
const About = () => {
  return (
    <>
      {" "}
      <div>
        <h1 className="text-3xl font-bold text-blue-500 text-center">
          Career Counseling
        </h1>
        <p className="text-gray-500 ">
          Career consulting is a professional service that guides individuals in
          making informed career choices. It involves exploring skills,
          interests, and goals to align with suitable career paths or
          educational opportunities. Career consultants also assist with resume
          building, job search strategies, and interview preparation to enhance
          success in the job market.By offering tailored solutions and
          actionable insights, career consulting empowers individuals to build
          fulfilling and sustainable careers.
        </p>
      </div>
      {/* <div className="avatar flex justify-center">
        <div className="mask mask-squircle w-48 ">
          <img src={img} />
        </div>
      </div> */}
      <div className="flex justify-center">
        <img className="" src={img2} alt="" />
      </div>
      <div className="text-center mt-8">
        <h1>
          Company:
          <span className=" text-blue-500">Career Hub Ltd</span>
        </h1>
        <h1>
          Location:
          <span className=" text-blue-500">Mirpur, Dhaka-1214, Bangladesh</span>
        </h1>
        <p>
          Email:
          <span className=" text-blue-500">careerhubinfo1220@gmail.com</span>
        </p>
        <p>
          Phone:
          <span className=" text-blue-500"> +880 017791-48550</span>
        </p>
      </div>
    </>
  );
};

export default About;
