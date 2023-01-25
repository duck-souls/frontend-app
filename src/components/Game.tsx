import { useState } from "react";
import duck from "../img/duck_icon.png";
import hearth_r from "../img/hearth_r.png";
import casse from "../img/casse.png";

const Game = () => {
  const [mouseOver, setMouseOver] = useState(false);
  const [hearth, setHearth] = useState([1, 1, 1]);
  const [duckVisible, setDuckVisible] = useState(false);
  const [heartAdded, setHeartAdded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-[calc(100vh-170px)] items-center justify-center min-h-[700px]">
      {!isOpen ? (
        <div className="bg-[url('../template/sfondo-app.png')] bg-no-repeat h-[600px] w-[277px]">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mt-3 ml-5">lvl1</h1>
            <button
              className="fas fa-bars text-3xl font-bold mt-2 mr-4 hover:text-red-700"
              onClick={() => setIsOpen(true)}
            ></button>
          </div>
          <div className="flex justify-center">
            {hearth.map((heart, i) => (
              <img
                key={i}
                src={hearth_r}
                alt="red hearth"
                className="h-1/6 w-1/6"
              />
            ))}
          </div>
          <div className="flex flex-col justify-center mx-auto text-white h-56 w-56">
            {duckVisible ? (
              <img
                src={duck}
                alt="anatra_captcha"
                className="mx-auto h-3/5 w-3/5 mb-4"
                onMouseOver={() => {
                  setMouseOver(true);
                  if (!heartAdded && hearth.length < 5) {
                    setHearth([...hearth, 1]);
                    setHeartAdded(true);
                  }
                }}
              />
            ) : (
              <p className="text-1xl text-center font-semibold">
                PREMI MINIGIOCO "tocca l'anatra per guadagnare un cuore EXTRA"
              </p>
            )}
            {mouseOver ? (
              <p className="text-black text-2xl text-center font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/6">
                BRAVO!
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-center mt-5">
            <button
              className="text-black text-3xl bg-[url('../template/button.png')] bg-no-repeat bg-cover w-4/5 hover:bg-[url('../template/button_hover.png')] 
            active:text-[#FFF068] active:bg-[url('../template/button_clicked.png')] hover:text-[#101820] rounded-md py-1 px-2.5 mt-5 font-bold lg:w-fit"
              onClick={() => setDuckVisible(true)}
            >
              MINIGIOCO
            </button>
            <img src={casse} alt="casse" className="h-5/6 w-5/6 mt-16" />
          </div>
        </div>
      ) : (
        <div className="h-[600px] w-[277px] bg-[url('../template/sfondo-menu.png')] bg-cover">
          <div className="flex justify-end">
            <button
              className="fas fa-times fa-bars text-4xl font-bold mt-1 mr-4 hover:text-red-700"
              onClick={() => setIsOpen(false)}
            ></button>
          </div>
          <div className="flex flex-col items-center text-5xl font-bold mt-20">
            <div className="fa-sharp fa-solid fa-gear "></div>
            <h1 className="mt-5">Settings</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
