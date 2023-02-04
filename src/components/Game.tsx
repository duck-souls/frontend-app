import { useState, useEffect } from "react";
import hearth_r from "../img/hearth_r.png";
import hearth_g from "../img/hearth_g.png";
import casse from "../img/casse.png";
import Minigame2 from "./minigames/Minigame2";
import Assaulted from "./minigames/Assaulted";
import Lost from "./minigames/Lost";
import Feed from "./minigames/Feed";
import DragDrop from "./minigames/DragDrop";

const Game = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hearth, setHearth] = useState<number[]>([]);
  const [minigameVisible, setMinigameVisible] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);

  const life = 3;

  useEffect(() => {
    if (life) {
      setHearth(() => {
        const arr: number[] = [];
        for (let i = 0; i < 5; i++) {
          if (i < life) {
            arr.push(1);
          } else {
            arr.push(0);
          }
        }
        return arr;
      });
    } else {
      setHearth(Array(5).fill(0));
    }
  }, [life]);

  const RandomGame = () => {
    const componentsArray = [
      <Assaulted fine={setGameEnd} />,
      <Feed fine={setGameEnd} />,
      <Lost fine={setGameEnd} />,
      <Minigame2 />
    ];
    const randomIndex = Math.floor(Math.random() * componentsArray.length);
    const randomChild = componentsArray[randomIndex];
    return <div>{randomChild}</div>;
  };

  useEffect(() => {
    if (gameEnd) {
      setMinigameVisible(false);
    }
  }, [gameEnd]);

  return (
    <div className="flex h-[calc(100vh-170px)] items-center justify-center min-h-[700px]">
      {!isOpen ? (
        <div className="lg:flex lg:h-[416px] lg:w-[900px] lg:bg-[url('../template/sfondo-app_desktop.png')] h-[900px] w-[416px] bg-[url('../template/sfondo-app.png')] bg-cover">
          <div className="w-[416px] h-[450px] lg:w-[450px] lg:h-[416px]">
            <div className="flex mt-1">
              <div className="text-2xl font-bold mt-3 ml-5 lg:ml-9">lvl1</div>

              <div className="mt-3 ml-3 mr-8 flex mt-3">
                {hearth.map((hearth, i) => (
                  <img
                    src={hearth === 1 ? hearth_r : hearth_g}
                    alt="hearth"
                    key={i}
                    className="mx-1 w-[45px] h-[35px]"
                  />
                ))}
              </div>
              <div>
                <button
                  className="fas fa-bars text-3xl font-bold mt-2 mr-4 hover:text-red-700"
                  onClick={() => setIsOpen(true)}
                ></button>
              </div>
            </div>
            <div className="mr-1 mb-4 ml-1 lg:ml-0">
              {!minigameVisible && (
                <div className="h-[310px] w-[310px] mx-auto mt-4 p-2">
                  <div className="text-white text-center text-4xl font-bold mt-24">
                    {!gameEnd ? "Click MINIGAME to START it" : "BRAVO"}
                  </div>
                </div>
              )}
              {minigameVisible && <RandomGame />}
              {/* 
              METTI IL COMPONENT DEL MINIGIOCO CHE VUOI VISUALIZZARE O RANDOM PER UNO A CASO
              <RandomGame/> <Assaulted /> <Lost /> <Feed /> <ProvaBirillo /> <DragDrop />*/}
            </div>
          </div>
          <div className="flex flex-col items-center lg:mt-0 mt-8 w-[416px] h-[450px] lg:w-[450px] lg:h-[416px]">
            <button
              disabled={gameEnd}
              onClick={() => setMinigameVisible(true)}
              className="mt-10 text-black text-3xl bg-[url('../template/button.png')] bg-no-repeat bg-cover w-4/5 hover:bg-[url('../template/button_hover.png')] 
            active:text-[#FFF068] active:bg-[url('../template/button_clicked.png')] hover:text-[#101820] mr-3 lg:py-6 py-5 px-10 font-bold"
            >
              {!gameEnd ? "MINIGAME" : "..."}
            </button>
            <img src={casse} alt="casse" className="h-70 w-80 mt-8" />
          </div>
        </div>
      ) : (
        <div className="lg:h-[416px] lg:w-[900px] lg:bg-[url('../template/sfondo-menu_desktop.png')] h-[900px] w-[416px] bg-[url('../template/sfondo-menu.png')] bg-cover">
          <div className="flex justify-end">
            <button
              className="fas fa-times fa-bars text-4xl font-bold mt-4 mr-6 hover:text-red-700"
              onClick={() => setIsOpen(false)}
            ></button>
          </div>
          <div className="flex flex-col items-center text-5xl font-bold mt-3">
            <div className="fa-sharp fa-solid fa-gear "></div>
            <div className="mt-5">Settings</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
