import React, { useState } from "react";
import claystonelogo from "../../assets/claystone-logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const arr = [
    { id: 1, name: "HOME", url: "/" },
    // { id: 2, name: "ABOUT US", url: "/about" },
    { id: 3, name: "SERVICES", url: "/services" },
    // { id: 4, name: "BLOG", url: "/blog" },
    { id: 4, name: "CONTACT", url: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false); // State for menu open/close

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-darkBlue flex justify-center z-30">
      <div className="w-[90%] lg:w-[95%] xl:w-[86%]  flex items-center  justify-between h-[87px] ">
        <div>
          <Link to="/">
            {" "}
            <img
              src={claystonelogo}
              className="w-60"
              alt="none"
            />
          </Link>
        </div>
        <div className="md:hidden w-full flex justify-end">
          <button className="text-white text-2xl " onClick={toggleMenu}>
            ☰
          </button>
        </div>

        {/* Menu for small screens */}
        <div
          className={`md:hidden ${
            menuOpen ? " fixed " : "hidden"
          }  top-0 right-0 h-screen z-50 w-full bg-darkBlue`}
        >
           <button className="absolute top-6 right-8 text-white text-xl" onClick={closeMenu}>
            ✕
          </button>
          <div className="flex flex-col h-full justify-center items-center gap-10 ">
            {arr.map((data) => (
              <Link
                to={data.url}
                key={data.id}
                onClick={toggleMenu} // Close menu when link is clicked
              >
                <p className="text-white text-xl">{data.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="items-center gap-6 lg:gap-14 xl:gap-16 hidden md:flex">
          {arr.map((data) => {
            return (
              <div className="text-white text-base" key={data.id}>
                <Link to={data.url}>
                  <p>{data.name}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
