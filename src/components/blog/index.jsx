import { useAnimation, motion } from "framer-motion";
import longArrow from "../../assets/icons/Arrow Icon.png";
import { useEffect, useRef } from "react";

const Blog = () => {
  const headingControls = useAnimation();
  const descControls = useAnimation();
  const contentControls = useAnimation();
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const headingElement = headingRef.current;
    const descElement = descRef.current;
    const contentElement = contentRef.current;
    const handleScroll = () => {
      const { top: headingTop } = headingElement.getBoundingClientRect();
      const { top: descTop } = descElement.getBoundingClientRect();
      const { top: contentTop } = contentElement.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      if (headingTop < windowHeight * 0.8) {
        headingControls.start("visible");
      }

      if (descTop < windowHeight * 0.8) {
        descControls.start("visible");
      }

      if (contentTop < windowHeight * 0.8) {
        contentControls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headingControls, descControls, contentControls]);

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
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
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

  const blogData = [
    {
      name: "tech",
      blog: "Why Machine Learning based UI is essential for your business in 2023",
      date: "19.08",
      unique: false,
    },
    {
      name: "TIPS",
      blog: "How to Protect your Online Footprint from data brokers",
      date: "18 October 2023",
      writer: "Claystone Tech",
      unique: true,
    },
    {
      name: "review",
      blog: "Ways, Software Developers can boost your business quicker than ever",
      date: "03:40 PM",
      unique: false,
    },
  ];

  return (
    <div className="bg-lightBlue pt-[160px] pb-[200px] flex justify-center w-full">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto">
        <div className="grid gap-20">
          <div className="grid gap-[20px]">
            <motion.h3
              ref={headingRef}
              initial="hidden"
              variants={headingVariants}
              animate={headingControls}
              className="font-space-grotesk text-darkBlue text-7xl text-center leading-[110px] font-bold"
            >
              Blog
            </motion.h3>
            <motion.p
              ref={descRef}
              initial="hidden"
              variants={descVariants}
              animate={descControls}
              className="font-poppins text-darkBlue text-[20px] text-center leading-[30px] lg:w-[896px] lg:mx-auto"
            >
              Stay current on technology's latest trends and insights through our informative blog. Covering industry news and expert tips, we're your source for staying informed.
            </motion.p>
          </div>

          <motion.div
            ref={contentRef}
            initial="hidden"
            variants={contentVariants}
            animate={contentControls}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto"
          >
            {blogData.map((data, index) => (
              <div key={index}>
                {data.unique ? (
                  <div className="w-full bg-darkBlue  shadow-xl py-[108px] text-center rounded-[25px]">
                    <p className="font-poppins text-white text-xl leading-[30px] tracking-widest">
                      {data.name}
                    </p>
                    <h6 className="px-3 pt-5 font-poppins text-white font-semibold text-2xl sm:text-xl 2xl:text-2xl leading-[40px] 2xl:w-[387px] lg:mx-auto">
                      {data.blog}
                    </h6>
                    <p className="pb-[48px] font-poppins  text-lightBlue leading-[26px] font-light text-sm">
                      {data.date} | {data.writer}
                    </p>
                    <button className="bg-orangePeel shadow-orangePeel shadow-md capitalize w-[214px] h-12 rounded-[10px]">
                      coming soon . . .
                    </button>
                  </div>
                ) : (
                  <div className="w-full flex items-center">
                    <div className="border-y-[1px] border-darkBlue py-[56px] h-[439px] grid-shrink-0 flex items-center">
                      <div>
                        <p className="font-poppins text-darborder-darkBlue uppercase text-xl leading-[30px] tracking-widest">
                          {data.name}
                        </p>
                        <h6 className="px-3 pt-5 font-poppins text-darkBlue font-semibold text-2xl sm:text-xl 2xl:text-2xl leading-[40px] 2xl:w-[387px] lg:mx-auto">
                          {data.blog}
                        </h6>
                        <h5 className="pt-16 font-space-grotesk font-bold text-darkBlue text-5xl leading-[60px] text-right">
                          {data.date}
                        </h5>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* <div className="flex justify-center">
            <button className="border border-darkBlue px-6 py-3 md:px-10 md:py-5 rounded-lg flex gap-3 md:gap-5 items-center">
              Explore Now <img src={longArrow} alt="long arrow" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
