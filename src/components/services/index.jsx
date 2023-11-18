import React, { useEffect, useRef, useState } from "react";
import arrowicon from "../../assets/icons/Arrow Icon-2.png";
import shortArrowIcon from "../../assets/icons/Arrow Icon short.png";
import { MdArrowUpward } from "react-icons/md";
import cyberpic from "../../assets/cyber.jpg";
import { useAnimation, motion } from "framer-motion";
import webDev from "../../assets/images/web-dev.png";
import mobDev from "../../assets/images/mobile-dev.jpg";
import devOps from "../../assets/images/devops.jpg";
import desktopDev from "../../assets/images/desktop-app.webp";
import digitalMarketing from "../../assets/images/digital-marketing.png";
import { Link } from "react-router-dom";
import longArrow from "../../assets/icons/Arrow Icon.svg";

const Services = () => {
  const headingControls = useAnimation();
  const contentControls = useAnimation();
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    const headingElement = headingRef.current;
    const contentElement = contentRef.current;
    const handleScroll = () => {
      const { top: headingTop } = headingElement.getBoundingClientRect();
      const { top: contentTop } = headingElement.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      if (headingTop < windowHeight * 0.8) {
        headingControls.start("visible");
      }

      if (contentTop < windowHeight * 0.6) {
        contentControls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headingControls, contentControls]);
  const headingVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const arr = [
    {
      id: 1,
      services: "Web Development",
      content:
        "Claystone Tech offers comprehensive web development services, crafting dynamic and responsive online solutions that cater to diverse business needs, from e-commerce platforms to interactive web applications, ensuring a seamless and engaging digital presence.",
      imgUrl: webDev,
    },
    {
      id: 2,
      services: "Mobile Development",
      content:
        "Claystone Tech delivers comprehensive mobile application development services, creating intuitive and high-performance apps across iOS and Android platforms, tailored to various business requirements, and ensuring optimal user experiences and functionality.",
      imgUrl: mobDev,
    },
    {
      id: 3,
      services: "DevOps",
      content:
        "Claystone Tech provides end-to-end DevOps services, streamlining software development and IT operations to enhance collaboration, automate processes, and accelerate delivery, resulting in efficient, continuous, and high-quality software deployment and management.",
      imgUrl: devOps,
    },
    {
      id: 4,
      services: "Desktop Application",
      content:
        "Claystone Tech specializes in desktop application development, creating robust and user-friendly software solutions tailored to specific business needs, ensuring seamless performance and functionality across various desktop platforms for enhanced user experiences.",
      imgUrl: desktopDev,
    },
    {
      id: 5,
      services: "Digital Marketing",
      content:
        "Claystone Tech excels in digital marketing services, strategically leveraging online channels to amplify brand visibility, engage target audiences, and drive measurable results, encompassing SEO, social media, content, and analytics for an impactful and data-driven online presence.",
      imgUrl: digitalMarketing,
    },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const handleArrowClick = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="bg-lightBlue flex justify-center">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto my-40">
        <motion.div
          ref={headingRef}
          initial="hidden"
          variants={headingVariants}
          animate={headingControls}
          className="flex justify-center mb-28"
        >
          <p className="text-darkBlue text-[70px] font-bold">Services</p>
        </motion.div>
        {arr.map((data) => (
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentControls}
            variants={contentVariants}
            key={data.id}
          >
            <div
              className="flex justify-between items-center mt-8 cursor-pointer"
              onClick={() => handleArrowClick(data.id)}
            >
              {expandedId === data.id ? null : (
                <h1 className="text-darkBlue sm:text-4xl text-2xl font-light italic">
                  {data.services}
                </h1>
              )}
              {expandedId === data.id ? null : (
                <img
                  src={arrowicon}
                  alt="none"
                  className="text-darkBlue w-20"
                />
              )}
            </div>

            {expandedId === data.id && (
              <div
                className="flex flex-col items-center  md:flex md:flex-row md:justify-between  cursor-pointer  "
                onClick={() => handleArrowClick(data.id)}
              >
                <div className="w-[100%] md:w-[50%]">
                  <h1 className="text-darkBlue lg:text-5xl text-3xl font-semibold font-space-grotesk">
                    {data.services}
                  </h1>
                  <p className="text-darkBlue mt-4 font-medium">
                    {data.content}
                  </p>
                  {/* <img src={shortArrowIcon} className="mt-5 w-16"></img> */}
                  <MdArrowUpward className="text-5xl" />
                </div>
                <div className="  h-52 w-[100%] md:w-[45%] flex justify-center items-center">
                  <div className="w-[200px]  h-[200px] rounded-full ">
                    <img
                      src={data.imgUrl}
                      className="w-full h-full  bg-contain  rounded-full"
                    ></img>
                  </div>
                </div>
              </div>
            )}
            <hr className="text-darkBlue mt-12" />
          </motion.div>
        ))}
        <div className="w-full flex  justify-center">
          <Link
            to="/services"
            className="mt-12 bg-darkBlue text-white border border-white px-6 py-3 md:px-10 md:py-5 rounded-lg flex gap-3 md:gap-5 items-center z-50"
          >
            Learn More <img src={longArrow} alt="long arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
