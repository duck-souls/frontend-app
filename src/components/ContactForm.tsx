import { useState } from "react";

const ContactForm = ({setContactUs}) => {
  const [fulltName, setFulltName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
    return (
        <div
          className="bg-white mx-1.5 border border-black-700 p-5 rounded-lg shadow-[0_35px_60px_-10px_rgba(0,0,0,0.4)] ml-11 grid grid-cols-1 relative top-[-450px] right-[20px] w-11/12 h-full"
        >
          <div className="flex justify-between mb-2.5">
              <div>
            <p className="">Get in touch!</p>
            <p className="">We'd love to hear from you.</p>
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
    )
}

export default ContactForm