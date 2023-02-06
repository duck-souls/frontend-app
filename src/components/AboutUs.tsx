import { useState } from "react";
import { teamMembers } from "../utils/index";
import ContactForm from "./ContactForm";
const AboutUs = () => {
  const [contactUs, setContactUs] = useState(false);
  
  return (
    <div
      id="about-us-section"
      className="bg-gradient-to-r from-[#F4E9D9] to-[#AA895E] bg-no-repeat bg-cover z-[1]"
    >
      <h1 className="text-center text-3xl font-black shadow-xl p-2 text-[black] font-Modesto">
        Our Team Members
      </h1>
      {teamMembers.map((element, index) => {
        const { name, role, description, img, contact } = element;
        return (
          <div
            key={index}
            className={`md:flex flex-2 my-10 mx-8 mt-7 ${
              index === 0 || index === 2 ? "justify-start" : "justify-end"
            } grid grid-cols-1 mt-3 mb-3 justify-items-center ${contactUs ? "opacity-5" : null}`}
          >
            <img
              src={img}
              alt={name}
              className="ml-6 w-60 h-56 rounded-lg shadow-[0_35px_60px_-10px_rgba(0,0,0,0.4)] hover:scale-110 mb-3 mt-5 md:w-4/12 md:h-1/6"
            />
            <div
              className={`text-center ${
                index === 0 || index === 2
                  ? "ml-4 mt-5 md:w-4/12 md:h-fit"
                  : "ml-4 mt-5 md:w-4/12 md:h-fit"
              }md:w-6/12 w-60 h-fit p-6 border border-black-700 rounded-lg bg-white shadow-[0_35px_60px_-10px_rgba(0,0,0,0.4)] ml-6 hover:scale-110 `}
            >
              <h3 className="font-bold text-2xl font-Modesto">{name}</h3>
              <h6 className="font-black text-lg font-Modesto">{role}</h6>
              <a
                href={contact}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:text-blue-400 text-sm font-Gothic"
              >
                contact me...
              </a>
            </div>
          </div>
        );
      })}
      <div className=""></div>
      <div className={`flex flex-1 justify-center ${contactUs ? "opacity-5" : null}`}>
        <h3 className="text-center text-2xl mb-3 mt-5 font-semibold text-[white] font-Modesto">
          Questions?
        </h3>
        <div
          onClick={() => setContactUs(true)}
          className="bg-[url('../template/text_button.png')] bg-contain bg-no-repeat text-xl ml-2.5 text-white mt-6 w-28 text-center  hover:text-black hover:w-32 hover:bg-[url('../template/button_hover.png')] h-9 px-3 cursor-pointer font-Modesto"
        >
         Contact Us
        </div>
      </div>
   {contactUs ? <ContactForm setContactUs={setContactUs} /> : null}
    </div>
  );
};

export default AboutUs;
