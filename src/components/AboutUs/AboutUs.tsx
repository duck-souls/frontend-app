import { teamMembers } from "../../utils";

const AboutUs = () => {
  //contact us discord channel
  return (
    <div className="bg-black bg-no-repeat bg-cover">
      {teamMembers.map((element, index) => {
        const { name, role, description, img, contact } = element;
        return (
          <div
            key={index}
            className={`flex flex-1 my-10 mx-8 ${
              index === 0 || index === 2 ? "flex-row-reverse" : "flex"
            }`}
          >
            <div
              className={`text-center ${
                index === 0 || index === 2 ? "ml-4" : "ml-0"
              } w-48 h-48 border border-black-700 rounded-lg bg-white`}
            >
              <h3 className="font-bold text-cyan-600 text-2xl">{name}</h3>
              <h6 className="font-semibold text-cyan-600">{role}</h6>
              <p className="text-center text-cyan-900 text-sm">{description}</p>
              <a
                href={contact}
                target="_blank"
                className="text-blue-700 hover:text-blue-400 text-sm"
              >
                contact me...
              </a>
            </div>
            <img
              src={img}
              alt={name}
              className="ml-6 w-40 h-48 rounded-lg shadow-[0_35px_60px_-10px_rgba(0,0,0,0.4)]"
            />
          </div>
        );
      })}
      <div className="flex flex-1 justify-center">
        <h3 className="text-center text-2xl text-cyan-800">Questions?</h3>
        <button className="text-center border border-black-700 py-1.5 px-2.5 rounded-lg bg-cyan-800 text-white ml-2 hover:bg-sky-500">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
