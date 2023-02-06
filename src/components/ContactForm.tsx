import { useState } from "react";

const ContactForm = ({setContactUs}) => {
  const [fulltName, setFulltName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
    return (
        <div
          className="bg-white ml-20 border border-black-700 p-5 rounded-lg shadow-[0_35px_60px_-10px_rgba(0,0,0,0.4)] grid grid-cols-1 fixed top-[20%] w-9/12 h-fit md:w-5/12 md:left-[20%]"
        >
          <div className="flex justify-between mb-2.5">
              <div>
            <p className="font-Gothic">Get in touch!</p>
            <p className="font-Gothic">We'd love to hear from you.</p>
            </div>
            <div onClick={() => setContactUs(false)} className="bg-[#F4E9D9] w-5 h-6 text-center rounded hover:bg-[#AA895E] hover:text-[white] cursor-pointer">X</div>
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
            className="text-center border border-black-700 py-1.5 px-2.5 bg-[#F4E9D9] rounded hover:bg-[#AA895E] hover:text-white mb-4 mt-6 cursor-pointer font-Gothic"
          />
          <div className="text-center border-t-2"></div>
          <div className="text-center border border-black-700 py-1.5 px-2.5 bg-[#F4E9D9] rounded hover:bg-[#AA895E] hover:text-white mb-4 mt-6 cursor-pointer font-Gothic">
            <a href="#">Join Us On Discord</a>
          </div>
          <div>
            <input type="checkbox" className="mr-1 cursor-pointer" />
            <label htmlFor="checkbox" className="text-xs font-Gothic">
              You agree to our friendly{" "}
              <a href="#" className="underline cursor-pointer">
                privacy policy
              </a>
            </label>
          </div>
        </div>
    )
}

export default ContactForm