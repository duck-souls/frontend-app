import React from "react";
import "./Navbar.css";
import ghost from "./ghost.png";

export default function Navbar() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  console.log(clicked);

  return (
    <>
      <nav className="flex items-center justify-between bg-[#1b2430] p-5 ">
        <div className="flex text-[#fff]">
          <img src={ghost} alt="navbar ghost icon" width="90" height="60" />
          <h1 className="ml-4 text-4xl font-bold mt-4">Duck Souls</h1>
        </div>
        <div>
          <ul
            id="navbar"
            className={
              clicked ? "#navbar active" : "flex items-center justify-center"
            }
          >
            <li className="px-4 sticky mb-4">
              <a
                className="text-lg font-medium text-white transition-colors duration-300 ease-in-out hover:text-[#00bcd4] active:text-[#00bcd4]"
                href="index.html"
              >
                Home
              </a>
            </li>
            <li className="px-4 sticky mb-4">
              <a
                href="index.html"
                className="text-lg font-medium text-white transition-colors duration-300 ease-in-out hover:text-[#00bcd4] active:text-[#00bcd4]"
              >
                About
              </a>
            </li>
            <li className="px-4 sticky mb-4">
              <a
                href="index.html"
                className="text-lg font-medium text-white transition-colors duration-300 ease-in-out hover:text-[#00bcd4] active:text-[#00bcd4]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}
