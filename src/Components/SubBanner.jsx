import img1 from "../assets/sub1.jpg";
import img2 from "../assets/sub2.png";
import img3 from "../assets/sub4.png";
import img4 from "../assets/career.png";
import img5 from "../assets/banner.png";
const SubBanner = () => {
  return (
    <div className="h-[155px] bg-blue-800 mt-8 flex justify-around item rounded-lg">
      <div>
        <img className="w-28 h-28 rounded-full mt-3" src={img1} alt="" />
        <h1 className="text-xl text-orange-100 mt-1 ml-5">Career</h1>
      </div>
      <div>
        <img className="w-28 h-28 rounded-full mt-3" src={img2} alt="" />
        <h1 className="text-xl text-white mt-1 ml-6">Focus</h1>
      </div>
      <div>
        <img className="w-28 h-28 rounded-full mt-3" src={img5} alt="" />
        <h1 className="text-xl text-white mt-1 ml-5">Consult</h1>
      </div>
      <div>
        <img className="w-28 h-28 rounded-full mt-3" src={img3} alt="" />
        <h1 className="text-xl text-white mt-1 ml-5">Success</h1>
      </div>
    </div>
  );
};

export default SubBanner;
