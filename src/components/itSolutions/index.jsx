import { Link } from "react-router-dom";
import longArrow from "../../assets/icons/white-arrow-icon.png";

const ItSolutions = () => {
  return (
    <div className="bg-darkBlue">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto   py-[10rem]">
        <h3 className="font-space-grotesk text-white text-5xl lg:text-7xl text-center leading-[5rem] lg:leading-[6rem] font-semibold">
          Need IT Solutions?
        </h3>
        <div className="flex items-center justify-center">
          <h3 className="font-space-grotesk text-white text-5xl lg:text-7xl leading-[5rem] lg:leading-[6rem] text-center  font-semibold">
            Let's&nbsp;
          <span className="font-poppins italic text-5xl lg:text-7xl text-white leading-[5rem] lg:leading-[6rem] font-light">
            start now.
          </span>
          </h3>
        </div>
        <div className="flex justify-center my-20">
          <Link to="/contact" className="border border-darktext-white text-white px-6 py-3 md:px-7 md:py-5 rounded-lg flex gap-3 md:gap-5 items-center">
            GET FREE CONSULTATION <img src={longArrow} alt="long arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItSolutions;
