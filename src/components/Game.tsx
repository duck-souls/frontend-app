import { useState } from "react";
import duck from "../img/duck_icon.png";
import hearth_r from "../img/hearth_r.png";

const Game = () => {
  const [mouseOver, setMouseOver] = useState(false);
  const [hearth, setHearth] = useState([1, 1, 1]);
  const [duckVisible, setDuckVisible] = useState(false);
  const [heartAdded, setHeartAdded] = useState(false);

  return (
    <>
      <div className="mx-auto my-20 bg-[#cbd5e1] border-4 h-[896px] w-[414px] border-lime-500">
        
        <div className="bg-[#dc2626] flex justify-between h-20">
          <h1 className="text-2xl font-bold mt-2 ml-4">lvl1</h1>

          {hearth.map((heart, i) => (
            <img
              key={i}
              src={hearth_r}
              alt="red hearth"
              className="w-9 h-9 mt-5"
            />
          ))}
          <button className="fas fa-bars w-10 h-10 text-2xl font-bold ml-4"></button>
        </div>
        <div className=" h-80 ml-11 my-12">
          <div className=" border-4 border-[#64748b] ring-4 ring-black h-80 w-80">
            {duckVisible ? (
              <img
                src={duck}
                alt="anatra_captcha"
                onMouseOver={() => {
                  setMouseOver(true);
                  if (!heartAdded && hearth.length < 5) {
                    setHearth([...hearth, 1]);
                    setHeartAdded(true);
                  }
                }}
                className="w-30 h-30 ml-12 mt-7"
              />
            ) : (
              <p className="text-3xl text-center font-semibold pt-20">
                PREMI MINIGIOCO "tocca l'anatra per guadagnare un cuore EXTRA"
              </p>
            )}
            {mouseOver ? (
              <p className="text-3xl text-center font-semibold pt-4">BRAVO!</p>
            ) : null}
          </div>
        </div>
        <div className="grid bg-[#dc2626] place-content-center h-80">
          <button
            className="text-black text-3xl font-semibold p-2 border-4 border-[#64748b] ring-4 ring-black"
            onClick={() => setDuckVisible(true)}
          >
            MINIGIOCO
          </button>
        </div>
        <div className="bg-white">
          <h1 className="text-2xl text-center mt-6 bg-[#dc2626] p-10 -mt-10">
            CASSE / FOOTER
          </h1>
        </div>
      </div>
    </>
  );
};

export default Game;
