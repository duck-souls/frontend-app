import { useContext, useState } from "react";
import { Context, contextType } from "../../context/ContextProvider";
import Timer2 from "../Timer2";
import Assoulted from "./Assaulted";

const Trouble = () => {
  const [accept, setAccept] = useState("not");
  const [gameEnd, setGameEnd] = useState(false);
  const { diamond } = useContext<contextType>(Context);

  const register = async () => {
    const tx = await diamond.startRegister();
    await tx.wait();
  };

  return (
    <div className="w-[310px] h-[310px] mx-auto mt-4 p-2 bg-[url('../template/background_trouble.png')] bg-cover">
      {accept === "not" ? (
        <>
          <div className="text-2xl font-Modesto text-white mt-1 ml-6">
            <Timer2 />
          </div>
          <div className=" ml-44 -p-14 mt-36">
            <div
              className="bg-[url('../template/button_accept.png')] bg-cover h-[100px] w-[100px] cursor-pointer hover:scale-125"
              onClick={() => {
                setAccept("accept");
                /* register(); */
              }}
            ></div>
          </div>
        </>
      ) : (
        <div className="-mt-8 -ml-4 p-2">
          <Assoulted setGameEndProps={setGameEnd} />
        </div>
      )}
    </div>
  );
};

export default Trouble;
