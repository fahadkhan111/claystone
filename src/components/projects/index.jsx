import React, { useEffect, useRef, useState } from "react";
import eCommerce from "../../assets/images/E-commerce.png";
import vehicleTracking from "../../assets/images/vehicle-tracking.png";
import complainManagement from "../../assets/images/complain.png";
import buildingControl from "../../assets/images/building-control.png";
import smartCities from "../../assets/images/smart-city.png";
import constructionManagment from "../../assets/images/Construction.png";
import ticketing from "../../assets/images/ticketing.png";
import crm from "../../assets/images/crm.png";
// import { MdSpatialTracking } from "react-icons/md";
import { useAnimation, motion } from "framer-motion";

const Projects = () => {
  const headingControls = useAnimation();
  const descControls = useAnimation();
  const projectControls = useAnimation();
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const projectRef = useRef(null);

  const cardData = [
    { id: 1, title: "Vehicle Tracking System", imgUrl: vehicleTracking},
    { id: 2, title: "e-Commerce Eco System", imgUrl: eCommerce},
    { id: 3, title: "Complain Management System ", imgUrl: complainManagement },
    { id: 4, title: "Building Control Systems" , imgUrl: buildingControl},
    { id: 5, title: "Smart Cities", imgUrl: smartCities },
    { id: 6, title: "Construction Management Systems" , imgUrl: constructionManagment},
    { id: 7, title: "Ticketing Systems", imgUrl: ticketing},
    { id: 8, title: "CRM  Solutions", imgUrl: crm },
  ];

  useEffect(() => {
    const headingElement = headingRef.current;
    const descElement = descRef.current;
    const projectElement = projectRef.current;
    const handleScroll = () => {
      const { top: headingTop } = headingElement.getBoundingClientRect();
      const { top: descTop } = descElement.getBoundingClientRect();
      const { top: projectTop } = projectElement.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      if (headingTop < windowHeight * 0.8) {
        headingControls.start("visible");
      }

      if (descTop < windowHeight * 0.8) {
        descControls.start("visible");
      }

      if (projectTop < windowHeight * 0.8) {
        projectControls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headingControls, descControls, projectControls]);
  const headingVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const descVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  const projectVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const [showShadow, setShowShadow] = useState(true);

  useEffect(() => {
    // Toggle the shadow after every 3 seconds
    const toggleShadowInterval = setInterval(() => {
      setShowShadow((prevShowShadow) => !prevShowShadow);
    }, 1000);

    return () => clearInterval(toggleShadowInterval);
  }, []);

  return (
    <div className="bg-darkBlue text-white pt-40 pb-16">
      <div className="grid gap-[50px] lg:gap-[80px] w-[90%] lg:w-[95%] xl:w-[86%] mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.h3
            ref={headingRef}
            initial="hidden"
            variants={headingVariants}
            animate={headingControls}
            className="w-full md:w-1/2 font-space-grotesk text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-[#fff] leading-[60px] sm:leading-[70px] md:leading-[90px] lg:leading-[110px] font-semibold "
          >
            Projects
          </motion.h3>
          <motion.p
            ref={descRef}
            initial="hidden"
            variants={descVariants}
            animate={descControls}
            className="w-full md:w-1/2"
          >
            As an IT company, we pride ourselves on delivering customized
            solutions that meet our clients' unique needs. Our projects
            highlight our expertise in web & mobile development, desktop
            application, DevOps, and digital marketing.
          </motion.p>
        </div>

        <motion.div
          ref={projectRef}
          initial="hidden"
          variants={projectVariants}
          animate={projectControls}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 h-full"
        >
          {cardData.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`w-full  flex-grow rounded-3xl ${
                  index % 2 === 0 ? "bg-gradientStart" : "bg-orangePeel"
                } p-4  text-center flex flex-col gap-8 container-shadow ${
                  showShadow && index % 2 === 0
                    ? "shadow-visible"
                    : showShadow && index % 2 === 1
                    ? "shadow-visible-orange"
                    : "shadow-hidden"
                }`}
              >
                <div className="flex flex-col gap-5  items-center">
                  <div>
                    {/* <MdSpatialTracking className="text-6xl" /> */}
                    <img src={item.imgUrl} alt={item.title} className="w-20"/>
                    {/* <img src={project1} alt="" /> */}
                  </div>
                  <h3 className="text-2xl font-space-grotesk font-normal">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
