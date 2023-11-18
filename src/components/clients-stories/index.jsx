import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import person1 from "../../assets/images/hassan-qureshi.png";
import person2 from "../../assets/images/abdullah-ashvani.png";
import samsung from "../../assets/images/samsung.png";
import google from "../../assets/images/google.png";
import amazon from "../../assets/images/amazon.png";
import windows from "../../assets/images/windows.png";
import sony from "../../assets/images/sony.png";
import { useAnimation, motion } from "framer-motion";

const ClientsStories = () => {
  const headingControls = useAnimation();
  const contentControls = useAnimation();
  const featuredCompaniesControls = useAnimation();
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const featuredCompaniesRef = useRef(null);
  useEffect(() => {
    const headingElement = headingRef.current;
    const contentElement = contentRef.current;
    const featuredCompaniesElement = featuredCompaniesRef.current;
    const handleScroll = () => {
      const { top: headingTop } = headingElement.getBoundingClientRect();
      const { top: contentTop } = headingElement.getBoundingClientRect();
      const { top: featuredCompaniesTop } =
        featuredCompaniesElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (headingTop < windowHeight * 0.8) {
        headingControls.start("visible");
      }

      if (contentTop < windowHeight * 0.6) {
        contentControls.start("visible");
      }

      if (featuredCompaniesTop < windowHeight * 0.8) {
        featuredCompaniesControls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headingControls, contentControls, featuredCompaniesControls]);

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

  const featuredCompaniesVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const images = [
    { id: 1, src: samsung, alt: "none" },
    { id: 2, src: google, alt: "none" },
    { id: 3, src: amazon, alt: "none" },
    { id: 4, src: windows, alt: "none" },
    { id: 5, src: sony, alt: "none" },
  ];

  return (
    <div className="bg-darkBlue text-white py-20">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto ">
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingControls}
          variants={headingVariants}
          className="flex justify-between items-center pb-20"
        >
          <h3 className="font-space-grotesk text-[50px] sm:text-[60px] md:text-[80px] lg:text-[90px] text-[#fff] leading-[60px] sm:leading-[70px] md:leading-[90px] lg:leading-[110px]  font-semibold ">
            Client Stories
          </h3>
          <FaArrowRight className="text-[4rem]" />
        </motion.div>
        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={contentControls}
          variants={contentVariants}
          className="w-full flex flex-col  md:flex-row justify-between items-center"
        >
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl text-orangePeel font-space-grotesk font-semibold">
              Amazing Services
            </h1>
            <p>
              “Claystone Tech provided the assurance we required to concentrate on our core business. They meticulously grasped our distinct requirements, fashioning a safeguarding solution for our sensitive data while upholding industry regulatory compliance.”
            </p>
            <div className="flex justify-end items-center gap-5">
              <div className="flex flex-col justify-between text-right">
                <h3>Hassan Qureshi</h3>
                <p>HOD IT, Madina Mac</p>
              </div>
            <div className="w-16 h-16">
                            <img src={person1} alt="review" className="w-full h-full rounded-full" />
            </div>
            </div>
          </div>

          <div className="h-full w-1 bg-lightBlue my-10 md:mx-12 lg:mx-24"></div>

          <div className="flex flex-col gap-5">
            <h1 className="text-5xl text-orangePeel font-space-grotesk font-semibold">
              Best Customer Support
            </h1>
            <p>
"Claystone Tech's remarkable customer support and post-deployment assistance transformed our business. Their tailored software solution streamlined operations, boosting efficiency and saving us time and costs."            </p>
            <div className="flex justify-end items-center gap-5">
              <div className="flex flex-col justify-between text-right">
                <h3>Abdullah Ashvani</h3>
                <p>QA, Diamond Excellency</p>
              </div>
            <div className="w-16 h-16">
                            <img src={person2} alt="review" className="w-full h-full rounded-full" />
            </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={featuredCompaniesRef}
          initial="hidden"
          animate={featuredCompaniesControls}
          variants={featuredCompaniesVariants}
          className=""
        >
          <div className="flex justify-center ">
            <div className=" w-full max-w-screen-xl flex justify-between  bg-opacity-70 py-20 ">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                autoplay={{
                  delay: 2000,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },

                  640: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                  },
                  1289: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                {images.map((image) => {
                  return (
                    <SwiperSlide
                      className="w-full flex justify-between"
                      key={image.id}
                    >
                      <img src={image.src} alt="" className="mx-auto h-full" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientsStories;
