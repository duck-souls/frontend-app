import { useState } from "react";
import { useEffect } from "react";
import { navLinks } from "../utils";
import { Link } from "react-router-dom";
import ghost from "../img/ghost.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleResize = () => {
    if (window.innerWidth > 640) {
      setClicked(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between bg-[#1b2430] p-5 ">
        <div className="flex text-white">
          <img src={ghost} alt="navbar ghost icon" className="w-20 h-20" />
          <h1 className="ml-1 text-3xl font-bold mt-6">Duck Souls</h1>
        </div>
        <div>
          <ul
            className={`${
              clicked
                ? "visible sm:hidden fixed top-32 right-0 -mt-4 pl-3 w-64 h-screen bg-[#1b2430] opacity-95"
                : "hidden sm:flex justify-between"
            }`}
          >
            {navLinks.map((link, i) => (
              <li key={i} className="px-4 sticky mb-4">
                <Link to={link.path}>
                  <div className="text-xl font-medium text-white mt-6 hover:text-[#00bcd4] hover:underline underline-offset-8 decoration-[#00bcd4] transition-all transition-duration-300 transition-timing-ease-in-out">
                    {link.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden" onClick={handleClick}>
          <i
            className={`text-white text-2xl cursor-pointer ${
              clicked ? "fas fa-times" : "fas fa-bars"
            }`}
          ></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
