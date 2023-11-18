import React, { useState, useEffect } from "react";

import longArrow from "../../assets/icons/Arrow Icon.svg";
import WavingLine from "../curvelineAnimation/WavingLine";
import { Link } from "react-router-dom";
const Hero = () => {
  const text = "YOUR BEST IT PARTNERS";
  const textArray = text.split("");
  const intervalDuration = 200; // Adjust the interval duration as needed

  const getSpanClass = (index) => {
    const position = index % textArray.length;
    return position >= currentIndex && position < currentIndex + 3
      ? "water-animation text-blue"
      : "";
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);

  return (
    <div className="bg-darkBlue text-white w-full font-space-grotesk px-5">
      <div className="container mx-auto min-h-screen flex justify-center ">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center max-w-5xl z-40">
              <h1 className="text-[3rem] md:text-[6rem] lg:text-[10rem] leading-[3rem] md:leading-[6rem] lg:leading-[10rem] text-center font-bold">
                {textArray.map((char, index) => (
                  <span
                    key={index}
                    className={`transition-colors duration-500 ${getSpanClass(
                      index
                    )}`}
                  >
                    {char}
                  </span>
                ))}
              </h1>
              <p className="text-center leading-5 max-w-md md:max-w-xl lg:max-w-3xl font-light">
                From custom software development to DevOps, our team of
                experts is dedicated to delivering solutions that are tailored
                to your unique needs.
              </p>

              <Link to="/services" className="mt-12 bg-darkBlue border border-white px-6 py-3 md:px-10 md:py-5 rounded-lg flex gap-3 md:gap-5 items-center z-50">
                Explore Now <img src={longArrow} alt="long arrow" />
              </Link>
            </div>
            <WavingLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
