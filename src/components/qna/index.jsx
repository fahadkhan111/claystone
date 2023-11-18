import React, { useEffect, useRef, useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import longArrow from "../../assets/icons/Arrow Icon.svg";
import { motion, useAnimation } from "framer-motion";

const AskQuestions = () => {
  const headingControls = useAnimation();
  const contentControls = useAnimation();
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const headingElement = headingRef.current;
    const contentElement = contentRef.current;
    const handleScroll = () => {
      const { top: headingTop } = headingElement.getBoundingClientRect();
      const { top: contentTop } = contentElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (headingTop < windowHeight * 0.8) {
        headingControls.start("visible");
      }
      if (contentTop < windowHeight * 0.8) {
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
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const faqList = [
    {
      id: 1,
      title: "What services does Claystone offer?",
      description:
        "Claystone Tech offers a comprehensive range of services including web development, mobile application development, DevOps, desktop application development, and digital marketing. With expertise across these domains, Claystone Tech enables businesses to harness cutting-edge technologies for enhanced online presence, seamless operations, and effective customer engagement.",
    },
    {
      id: 2,
      title: "Which IT solution is for my business?",
      description:
        "Our team at Claystone specializes in crafting tailor-made IT solutions that align with your business needs and goals. Let's discuss your requirements to determine the ideal solution for your specific industry and objectives.",
    },
    {
      id: 3,
      title: "How much do the services cost?",
      description:
        "At Claystone, our pricing varies based on the specific services and solutions tailored to your business needs. Let's connect to discuss your requirements and provide you with an accurate cost estimate.",
    },
    {
      id: 4,
      title: "How do I get started with the IT solutions?",
      description:
        "Starting with our IT solutions at Claystone is simple. Reach out to us, and we'll engage in a discussion to understand your business requirements. From there, we'll outline a customized plan to implement the right solutions that align with your objectives.",
    },
  ];

  const [expandedFAQIndex, setExpandedFAQIndex] = useState(null);

  return (
    <div className="bg-darkBlue text-white py-20">
      <div className=" w-[90%] lg:w-[95%] xl:w-[86%] mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between gap-10 h-full">
          <motion.div
            ref={headingRef}
            initial="hidden"
            animate={headingControls}
            variants={headingVariants}
            className=" h-full  lg:w-1/2 flex-grow rounded-3xl  px-10  flex flex-row md:flex-col "
          >
            <div className="w-full flex flex-col md:flex-row lg:flex-col justify-between gap-5 py-5 md:h-[20rem] xl:h-[25rem]">
              <h3 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#fff]  font-semibold ">
                Got Any Questions?
              </h3>

              <div>
                <button className="border border-white px-6 py-3 md:px-10 md:py-5 rounded-lg flex gap-3 md:gap-5 items-center">
                  Explore Now <img src={longArrow} alt="long arrow" />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={contentRef}
            initial="hidden"
            variants={contentVariants}
            animate={contentControls}
            className="  h-full lg:w-1/2  flex-grow rounded-3xl  flex flex-col gap-8"
          >
            <div className="flex flex-col items-center ">
              {faqList.map((listItem, index) => (
                <div
                  id="accordion-collapse"
                  data-accordion="collapse"
                  className="w-[100%] border-b border-b-light-blue"
                  key={index}
                >
                  <h2 id="accordion-collapse-heading-1">
                    <button
                      type="button"
                      className="flex items-center  w-full md:text-lg py-8  font-normal justify-between text-gray-500 "
                      data-accordion-target="#accordion-collapse-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-collapse-body-1"
                      onClick={() =>
                        setExpandedFAQIndex(
                          expandedFAQIndex === index ? null : index
                        )
                      }
                    >
                      <span
                        className={`text-2xl font-normal ${
                          expandedFAQIndex === index
                            ? "text-linkBlue"
                            : "text-white"
                        }`}
                      >
                        {listItem.title}
                      </span>
                      <div className="px-1 md:px-4">
                        {expandedFAQIndex === index ? (
                          <HiMinus className="w-8 text-light-blue " />
                        ) : (
                          <HiPlus className="w-8 text-light-blue  " />
                        )}
                      </div>
                    </button>
                  </h2>
                  {expandedFAQIndex === index && (
                    <div
                      id="accordion-collapse-body-1"
                      className=""
                      aria-labelledby="accordion-collapse-heading-1"
                    >
                      <div className=" font-normal border-b-1 ">
                        <p className="mb-2  md:text-lg">
                          {listItem.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestions;
