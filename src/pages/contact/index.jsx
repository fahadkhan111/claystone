import React, { useState } from "react";
import bg from "../Images/service.png";
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import ContactForm from "../../components/forms/contact-form";
import LeadsForm from "../../components/forms/leads-form";
import contactImg from "../../assets/images/contact-us.jpeg";
import contactInfoImg from "../../assets/images/contact-details.jpg";
import leadsImg from "../../assets/images/leads-2.jpg";
import { motion } from "framer-motion";

const Contact = () => {
  const [openContactForm, setOpenContactForm] = useState(false);
  const [openLeadsForm, setOpenLeadsForm] = useState(false);

  const handleOpenForm = () => {
    setOpenContactForm(!openContactForm);
  };

  const handleOpenLeadsForm = () => {
    setOpenLeadsForm(!openLeadsForm);
  };

  return (
    <div className="bg-darkBlue text-black py-20">
      <div className=" max-w-[100%] md:max-w-6xl mx-auto ">
        <h1 className="text-4xl font-space-grotesk font-bold uppercase text-white text-center">
          Contact Us
        </h1>
        <div className=" px-10 py-20 w-full">
          <div className="flex flex-col md:flex-row w-full gap-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial animation state (starting from right)
              animate={{ opacity: 1, y: 0 }} // Animation on page load
              transition={{ duration: 0.5, delay: 0.4 }} // Animation duration
              className="w-full flex flex-col gap-3 py-10 px-6 shadow-lg bg-white text-darkBlue rounded-lg relative bottomBorder after:rounded-b-lg"
            >
              <img src={contactInfoImg} alt="" className="w-32" />

              <h1 className="text-2xl font-semibold text-blue">We're here</h1>
              <p>Our door is always open for a good cup of tea</p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <FiPhoneCall className="w-8 text-blue" />{" "}
                  <span className="w-full">+92-51-8737170</span>
                </div>
                <div className="flex items-center gap-3">
                  <BsEnvelope className="w-8 text-blue" />{" "}
                  <span className="w-full">info@claystone.pk</span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <MdOutlineLocationOn className="w-8 text-blue" />
                  <span className="w-full">
                    2nd floor, Sikandar Arcade near Meezan Bank, phase 7 Bahria
                    Town Rawalpindi, Pakistan
                  </span>
                </div> */}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial animation state (starting from right)
              animate={{ opacity: 1, y: 0 }} // Animation on page load
              transition={{ duration: 0.5, delay: 0.5 }} // Animation duration
              className="w-full flex flex-col gap-3 py-10 px-6 shadow-lg bg-white text-darkBlue rounded-lg relative bottomBorder after:rounded-b-lg"
            >
              <img src={contactImg} alt="" className="w-32 -mt-5" />
              <h1 className="text-xl font-semibold text-darkBlue">
                Contact Our Support
              </h1>
              <p>
                Our Support Team is just a phone call away, to answer your
                queries
              </p>
              <button
                className="border-2 border-blue px-10 py-1  text-darkBlue rounded-full"
                onClick={handleOpenForm}
              >
                Contact
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Initial animation state (starting from right)
              animate={{ opacity: 1, y: 0 }} // Animation on page load
              transition={{ duration: 0.5, delay: 0.6 }} // Animation duration
              className="w-full flex flex-col gap-3 py-10 px-6 shadow-lg bg-white text-darkBlue rounded-lg relative bottomBorder after:rounded-b-lg"
            >
              <img src={leadsImg} alt="" className="w-32" />
              <h1 className="text-xl font-semibold text-darkBlue">
                I'm Interested
              </h1>
              <p>
                Turning Your Ideas into Powerful Software Solutions – Let's
                Connect!
              </p>
              <button
                className="border-2 border-blue px-10 py-1  text-darkBlue rounded-full"
                onClick={handleOpenLeadsForm}
              >
                Let's Connect!
              </button>
            </motion.div>
          </div>
        </div>

        {/* <div className=" "> */}

        <LeadsForm
          setOpenLeadsForm={setOpenLeadsForm}
          openLeadsForm={openLeadsForm}
        />

        <ContactForm
          setOpenContactForm={setOpenContactForm}
          openContactForm={openContactForm}
        />
      </div>
    </div>
  );
};

export default Contact;
