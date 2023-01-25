import { useState } from "react";
import { teamMembers } from "../../utils";

const AboutUs = () => {
  const [fulltName, setFulltName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contactUs, setContactUs] = useState(false);

  const contactBtn = document.getElementById("contact-btn");
  const handleClick = () => {
    setContactUs((prev) => !prev);
  };
  contactBtn?.addEventListener("click", handleClick);

  return (
    <div
      id="about-us-section"
      className="bg-[white] bg-no-repeat bg-cover z-[1]"
    >
      <h1 className="text-center text-2xl font-black shadow-xl p-2 text-[#AA895E]">
        Our Team Members
      </h1>
      {teamMembers.map((element, index) => {
        const { name, role, description, img, contact } = element;
        return (
          <div
            key={index}
            className={`flex flex-1 my-10 mx-8 ${
              index === 0 || index === 2 ? "justify-start" : "justify-end"
            } mobile:grid grid-cols-1 mt-3 mb-3 justify-items-center`}
          >
            <img
              src={img}
              alt={name}
              className="ml-6 w-60 h-56 rounded-lg shadow-[0_35px_60px_-10px_rgba(0,0,0,0.4)] hover:scale-110 mobile:mb-3 mt-5 "
            />
            <div
              className={`text-center ${
                index === 0 || index === 2 ? "ml-4" : "ml-4"
              } w-60 h-56 p-6 border border-black-700 rounded-lg bg-white shadow-[0_35px_60px_-10px_rgba(0,0,0,0.4)] ml-6 hover:scale-110`}
            >
              <h3 className="font-bold text-2xl">{name}</h3>
              <h6 className="font-semibold">{role}</h6>
              <p className="text-center text-sm">{description}</p>
              <a
                href={contact}
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:text-blue-400 text-sm"
              >
                contact me...
              </a>
            </div>
          </div>
        );
      })}
      <div className=""></div>
      <div className="flex flex-1 justify-center">
        <h3 className="text-center text-2xl mb-3 mt-5 font-semibold text-[#AA895E]">
          Questions?
        </h3>
        <button
          onClick={handleClick}
          id="contact-btn"
          className="text-center border border-black-700 py-1.5 px-2.5 bg-[#F4E9D9] rounded-lg  ml-2 hover:bg-[#AA895E] hover:text-white mb-4 mt-5 cursor-pointer"
        >
          {contactUs ? "Close" : "Contact Us"}
        </button>
      </div>
      {contactUs ? (
        <div
          id="contact"
          className="bg-white h-1/4 w-9/12 m-4 border border-black-700 p-5 rounded-lg shadow-[0_35px_60px_-10px_rgba(0,0,0,0.4)] ml-11 desktop:w-fit grid grid-cols-1 w-"
        >
          <div>
            <p className="">Get in touch!</p>
            <p className="">We'd love to hear from you.</p>
          </div>
          <input
            className="border border-black-700 mt-1 p-1"
            type="text"
            value={fulltName}
            onChange={(e) => setFulltName(e.target.value)}
            placeholder="Full Name"
            required
          />

          <input
            className="border border-black-700 mt-1 p-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Contact"
            required
          />
          <input
            className="border border-black-700 mt-1 p-1"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Contact"
          />
          <textarea
            className="border border-black-700 mt-1 p-1"
            placeholder="Leave us a message"
          ></textarea>

          <input
            type="submit"
            className=" m-4 text-center border border-black-700 py-1 px-2 bg-[#F4E9D9] rounded hover:bg-[#AA895E] hover:text-white cursor-pointer"
          />
          <div className="text-center border-t-2"></div>
          <div className="text-center border border-black-700 py-1.5 px-2.5 bg-[#F4E9D9] rounded-lg hover:bg-[#AA895E] hover:text-white mb-4 mt-6 cursor-pointer">
            <a href="#">Join Us On Discord</a>
          </div>
          <div>
            <input type="checkbox" className="mr-1 cursor-pointer" />
            <label htmlFor="checkbox" className="text-xs">
              You agree to our friendly{" "}
              <a href="#" className="underline cursor-pointer">
                privacy policy
              </a>
            </label>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AboutUs;
