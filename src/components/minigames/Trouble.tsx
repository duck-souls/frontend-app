import { useState } from "react";
import Timer2 from "../Timer2";
import Assoulted from "./Assaulted";

const Trouble = () => {
  const [accept, setAccept] = useState("not");
  const [gameEnd, setGameEnd] = useState(false);

  return (
 
    <div className="w-[310px] h-[310px] mx-auto mt-4 p-2 bg-[url('../template/death.png')] bg-cover">
       {/* {accept === "not" ? (
        <>
       <div className="text-2xl font-Modesto text-white mt-1 ml-6">
        <Timer2 />
      </div>
      <div className=" ml-44 -p-14 mt-36">
        <div
          className="bg-[url('../template/button_accept.png')] bg-cover h-[100px] w-[100px] cursor-pointer hover:scale-125"
          onClick={() => setAccept("accept")}
        >  
        </div>
      </div>
      </>
      ) : (
      <div className="-mt-8 -ml-4 p-2">
        <Assoulted setGameEndProps={setGameEnd} /> 
      </div>
      )}     */}
    </div>
  );
};

export default Trouble;
