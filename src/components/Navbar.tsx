import React from "react";
import "./Navbar.css";
import ghost from "../img/ghost.png";
import { navLinks } from "../utils";

const Navbar = () => {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-[#1b2430] p-5 ">
        <div className="flex text-white">
          <img
            src={ghost}
            alt="navbar ghost icon"
            className="w-[90px] w-[60px]"
          />
          <h1 className="ml-4 text-4xl font-bold mt-4">Duck Souls</h1>
        </div>
        <div>
          <ul
            className={`${
              clicked
                ? "hidden"
                : "fixed top-32 -right-80 w-64 h-screen bg-[1b2430f5] pt-40 pl-10 transition-all transition-duration-300 transition-timing-ease-in-out"
            } `}
          >
            {navLinks.map((link, i) => (
              <li key={i} className="px-4 sticky mb-4">
                <a
                  className="text-2xl font-medium text-white hover:text-[#00bcd4] hover:underline underline-offset-8 decoration-[#00bcd4] transition-all transition-duration-300 transition-timing-ease-in-out"
                  href={link.path}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <i
            className={`text-white text-3xl cursor-pointer ${
              clicked ? "fas fa-times" : "fas fa-bars"
            }`}
          ></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
