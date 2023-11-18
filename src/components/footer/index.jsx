import claystonetextLogo from "../../assets/claystone-logo.png";
import instagramIcon from "../../assets/icons/instagram-icon.png";
import facebookIcon from "../../assets/icons/facebook-icon.png";
import twitterIcon from "../../assets/icons/twitter-icon.png";
import arrowIcon from "../../assets/icons/arrow-icon.png";
import ItSolutions from "../itSolutions";
import { BsLinkedin } from "react-icons/bs"
import { toast } from "react-toastify";
import { useState } from "react";

const Footer = () => {
  const [newsletterInput, setNewsletterInput] = useState("")
  const socialIcons = [
    {
      icon: <BsLinkedin
        className="w-[32px] h-[32px] object-contain text-white"
      />,
      href: "https://www.linkedin.com/in/clay-stone-287797264/",
      alt: "Linkedin icon",
    },
    {
      iconLogo: facebookIcon,
      href: "https://www.facebook.com/profile.php?id=100089568476616",
      alt: "facebook icon",
    },
    {
      iconLogo: twitterIcon,
      href: "https://twitter.com/ClayStonePK",
      alt: "twitter icon",
    },
  ];

  const exploreData = [
    {
      link: "about us",
      href: "",
    },
    {
      link: "services",
      href: "/services",
    },

    {
      link: "contact",
      href: "/contact",
    },
  ];


  const handleNewsletterSubmit = () => {
    // Get the email input value from your state or wherever it's stored
    const email = newsletterInput;
  
    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (email === "") {
      toast.error("Please enter an email address.");
    } else if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
    } else {
      setNewsletterInput("")
      toast.success("You Have Successfully Subscribed!");
    }
  }

  return (
    <div className="bg-darkBlue">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%] mx-auto py-20">
        <div className="grid gap-20">
          <div className="grid grid-cols-12 gap-y-8 lg:gap-4">
            <div className="col-span-12 lg:col-span-5">
              <div className="grid gap-10">
                <img
                  src={claystonetextLogo}
                  className="w-80 xs:w-[449px] h-[64px] object-contain"
                  alt="claystone text logo"
                />
                <div className="flex space-x-[64px]">
                  {socialIcons.map((icon, index) => (
                    <a key={index} href={icon.href} target="_blank">
                      {icon.icon ? icon.icon : <img
                        src={icon.iconLogo}
                        className="w-[32px] h-[32px] object-contain"
                        alt={icon.alt}
                      />}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-4 lg:col-span-3">
              <div>
                <div className="grid gap-4">
                  <h6 className="font-poppins font-semibold text-[20px] text-white leading-[30px]">
                    Explore
                  </h6>
                  <ul className="grid gap-3">
                    {exploreData.map((explore, index) => (
                      <li key={index}>
                        <a
                          href={explore.href}
                          className="font-poppins md:text-base text-lightBlue capitalize"
                        >
                          {explore.link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <h6 className="font-poppins font-semibold text-[20px] text-white leading-[30px]">
                Newsletter
              </h6>
              <p className="font-poppins md:text-base text-lightBlue pt-6">
                Subscribe to our newsletter to stay informed about our latest
                products, services, and promotions. Feel free to unsubscribe
                anytime!
              </p>
              <div className="relative pt-[43px]">
                <div className="bg-darkBlue border border-lightBlue rounded-[5px] w-full pl-5 h-12 flex items-center">
                  <div className="absolute inset-y-0 right-4 top-7 flex items-center h-20">
                    <button onClick={handleNewsletterSubmit}><img src={arrowIcon} className="w-6" /></button>
                  </div>
                  <input
                    type="email"
                    className="text-[16px] xs:text-[20px] text-white leading-[30px] bg-darkBlue focus:outline-none w-full"
                    name="subscriptionEmail"
                    value={newsletterInput}
                    onChange={(e) => setNewsletterInput(e.target.value)}
                    placeholder="Enter Your Email Address ..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <hr className=" border-white " />
            <div className="md:flex md:justify-between space-y-4 md:space-y-0">
              <p className="font-poppins text-[16px] leading-[26px] text-white">
                Copyright © 2023 for Claystone Tech. All rights reserved.
              </p>
              <div className="flex">
                <p className="font-poppins text-[16px] leading-[26px] text-white">
                  Terms & Condition&nbsp;&nbsp;
                </p>
                <p className="font-poppins text-[16px] leading-[26px] text-white">
                  |&nbsp;&nbsp;
                </p>
                <p className="font-poppins text-[16px] leading-[26px] text-white">
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
