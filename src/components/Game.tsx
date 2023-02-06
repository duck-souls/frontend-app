import { useState, useEffect } from "react";
import hearth_r from "../img/hearth_r.png";
import hearth_g from "../img/hearth_g.png";
import chest from "../img/chest.png";
import Dungeon from "./minigames/Dungeon";
import Assaulted from "./minigames/Assaulted";
import Lost from "./minigames/Lost";
import Feed from "./minigames/Feed";
import Home from "./Home";
import Trouble from "./minigames/Trouble";
import Timer from "./Timer";
import chestCd from "../img/chest_cd.png";
import chestLocked from "../img/chest_locked.png";
import chestAllGray from "../img/chest_all_gray.png";

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
      <Assaulted setGameEndProps={setGameEnd} />,
      <Feed setGameEndProps={setGameEnd} />,
      <Lost setGameEndProps={setGameEnd} />,
      <Home />,
      <Dungeon />,
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
        <div className="lg:flex lg:h-[416px] lg:w-[900px] lg:bg-[url('../template/background_app_desktop.png')] h-[900px] w-[416px] bg-[url('../template/background_app_mobile.png')] bg-cover">
          <div className="w-[416px] h-[450px] lg:w-[450px] lg:h-[416px]">
            <div className="flex items-center mt-1">
              <div className="text-2xl font-bold mt-3 ml-5 lg:ml-9 ">lvl1</div>

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
                <div className="flex h-[310px] w-[310px] mx-auto mt-4 p-2">
                  <div className="text-white text-center my-auto text-4xl font-Gothic mr-1">
                    {!gameEnd ? (
                      "Click MINIGAME to START it"
                    ) : (
                      <div className="-mt-8 -ml-4 p-2">
                        <Home />
                      </div>
                    )}
                  </div>
                </div>
              )}
              {minigameVisible &&  <Trouble /> }
              {/* 
              METTI IL COMPONENT DEL MINIGIOCO CHE VUOI VISUALIZZARE O RANDOM PER UNO A CASO
              <RandomGame/> <Assaulted /> <Lost /> <Feed /> <DragDrop /> <Home /> <Dungeon /> <Trouble />*/}
            </div>
          </div>
          <div className="flex flex-col items-center lg:mt-0 mt-8 w-[416px] h-[450px] lg:w-[450px] lg:h-[416px]">
            <button
              disabled={gameEnd}
              onClick={() => setMinigameVisible(true)}
              className="mt-10 text-black text-3xl bg-[url('../template/button.png')] bg-no-repeat bg-cover w-4/5 hover:bg-[url('../template/button_hover.png')] 
            active:text-[#FFF068] active:bg-[url('../template/button_clicked.png')] hover:text-[#101820] mr-3 lg:py-6 py-5 px-10 font-bold font-Modesto"
            >
             {!gameEnd ? "Looking for TROUBLE - 3 / 5" : "Looking for TROUBLE - 3 / 5"} 
            </button>
           <div className="font-bold font-Modesto text-3xl mt-6">Here's a TROUBLE! tap or die..</div>
           {/* <div className="font-bold font-Modesto text-3xl mt-6">Defeat the bandits!</div> */}
           {/* <div className="font-bold font-Modesto text-3xl mt-6">Feed the duck</div> */}
           {/* <div className="font-bold font-Modesto text-3xl mt-6">Choose your way home</div> */}
           {/* <div className="font-bold font-Modesto text-3xl mt-6">Your duck value: 0.008 Eth</div> */}
           {/*  <img src={chestAllGray} alt="casse" className="mt-24 w-80"/> */}
           <div className="flex">
            <img src={chestCd} alt="casse" className="mt-8 h-32 w-36 mt-3 mr-2 -ml-3 animate-[beat_1s_infinite] cursor-pointer"/>
            <img src={chestLocked} alt="casse" className="mt-14 h-20 w-50" />
    
            </div>
            <div className="text-2xl font-Modesto mr-52">
            <Timer />  {/* <div>Open it!</div> */}
            </div> 
            
          </div>
        </div>
      ) : (
        <div className="lg:h-[416px] lg:w-[900px] lg:bg-[url('../template/background_settings_desktop.png')] h-[900px] w-[416px] bg-[url('../template/background_settings_mobile.png')] bg-cover">
          <div className="flex justify-end">
            <button
              className="fas fa-times fa-bars text-4xl font-bold mt-4 mr-6 hover:text-red-700"
              onClick={() => setIsOpen(false)}
            ></button>
          </div>
          <div className="flex flex-col items-center text-5xl font-bold mt-3">
            <div className="fa-sharp fa-solid fa-gear"></div>
            <div className="mt-5 font-Gothic">Settings</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
