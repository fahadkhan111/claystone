import ExpertiseAnimation from "../animation/expertiseAnimation";
import ResultAnimation from "../animation/resultAnimation";
import SolutionAnimation from "../animation/solutionAnimation";
import TechnolgyAnimation from "../animation/technologyAnimation";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const WhyChooseUs = () => {
  const headingControls = useAnimation();
  const gridControls = useAnimation();
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const headingElement = headingRef.current;
    const gridElement = gridRef.current;

    const handleScroll = () => {
      const { top: headingTop } = headingElement.getBoundingClientRect();
      const { top: gridTop } = gridElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (headingTop < windowHeight * 0.8) {
        headingControls.start("visible");
      }

      if (gridTop < windowHeight * 0.8) {
        gridControls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headingControls, gridControls]);

  const headingVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const featuresData = [
    {
      img: <ExpertiseAnimation />,
      feature: "expertise",
      description:
        "Our adept team of experts possesses the requisite knowledge and skills to provide ingenious IT solutions tailored to your distinct requirements.",
    },
    {
      img: <TechnolgyAnimation />,
      feature: "technology",
      description:
        "We remain current with the latest IT industry trends and technologies, ensuring you access the most advanced solutions.",
    },
    {
      img: <SolutionAnimation />,
      feature: "solutions",
      description:
        "We adopt a personalized approach to each project, closely collaborating with you to comprehend your business and craft tailored solutions.",
    },
    {
      img: <ResultAnimation />,
      feature: "results",
      description:
        "Our proven track record speaks volumes – businesses across various sizes and industries have achieved their goals through our impactful IT solutions.",
    },
  ];


  return (
    <div className="bg-darkBlue text-white pb-[200px]">
      <div className="grid gap-[50px] lg:gap-[80px] w-[90%] lg:w-[95%] xl:w-[86%] mx-auto ">
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingControls}
          variants={headingVariants}
          className="text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-[#D9D9D9] leading-[60px] sm:leading-[70px] md:leading-[90px] lg:leading-[110px] font-bold"
        >
          <h3>
            Why <br />
            Choose Us?
          </h3>
        </motion.div>
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[68px]"
        >
          {featuresData.map((data, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={gridControls}
              variants={gridItemVariants}
            >
              <div>
                {data.img}
                <h6 className="text-[32px] leading-10 text font-semibold pt-16 uppercase">
                  {data.feature}
                </h6>
                <p className="text-[20] leading-[30px] pt-4 ">
                  {data.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

