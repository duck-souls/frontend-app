import { useCallback, useEffect, useState } from "react";
import duck from "../../img/duck_char.png";
import boss from "../../img/bat_idle.gif";
/* import bossDeath from "../../img/bat_death.gif"; */
import Home from "../Home";
import chest from "../../img/dungeon_chest.png";

const Dungeon = () => {
  const [mode, setMode] = useState("start");
  const [progressBarDuck, setProgressBarDuck] = useState(100);
  const [progressBarArdv, setProgressBarArdv] = useState(100);
  const [completed, setCompleted] = useState(false);
  const [attack, setAttack] = useState(true);
  const [winner, setWinner] = useState("");
  const [chestDrop, setChestDrop] = useState(Math.random() >= 0.5);

  const percent = [75, 50, 25, 0];

  const displayWinner = useCallback(() => {
    if (completed) {
      return `${winner} win!`;
    }
  }, [completed, winner]);

  const checkWinner = useCallback(() => {
    if (progressBarDuck === 0) {
      setProgressBarDuck(0);
      setWinner("Enemy");
      setCompleted(!false);
      setTimeout(() => setMode("playAgain"), 1500);
    } else if (progressBarArdv === 0) {
      setProgressBarArdv(0);
      setWinner("You");
      setCompleted(!false);
      setTimeout(() => setMode("playAgain"), 1500);
    }
  }, [progressBarArdv, progressBarDuck]);

  useEffect(() => {
    if (attack === false) {
      const random = Math.floor(Math.random() * percent.length);
      const total = percent[random];
      setTimeout(() => {
        if (total > progressBarDuck) {
          setProgressBarDuck(0);
          setCompleted(!false);
        } else {
          setProgressBarDuck((prev) => prev - total);
          setAttack(true);
        }
      }, 2000);
    }
  }, [attack]);

  const handleClick = useCallback(
    (x: any) => {
      if (!attack) return;
      const random = Math.floor(Math.random() * percent.length);
      const total = percent[random];

      if (total > x) {
        setProgressBarArdv(0);
        setCompleted(!false);
        setMode("playAgain");
      } else {
        setProgressBarArdv(x - total);
        setAttack(false);
      }
    },
    [percent]
  );

  useEffect(() => {
    if (winner) return;
    checkWinner();
  }, [progressBarDuck, progressBarArdv]);

  return (
    <div
      className={`w-[310px] h-[310px] mx-auto mt-4 p-2 bg-cover ${
        mode === "start"
          ? "bg-[url('../template/background_minigame_dungeon.png')]"
          : "bg-[url('../template/background_minigame_dungeon_fight.png')]"
      }`}
    >
      {mode === "start" && (
        <div className="mt-8">
          <div className="text-white text-center font-Modesto text-4xl font-bold">
            Dungeon level EASY
          </div>
          <div className="text-white text-center font-Modesto text-4xl font-bold mt-2">
            Are you sure?
          </div>
          <div className="flex justify-between p-6">
            <div
              className="bg-[url('../template/button_accept.png')] bg-cover h-[100px] w-[100px] cursor-pointer hover:scale-125"
              onClick={() => setMode("battle")}
            ></div>
            <div
              className="bg-[url('../template/button_deny.png')] bg-cover h-[100px] w-[100px] cursor-pointer hover:scale-125"
              onClick={() => setMode("home")}
            ></div>
          </div>
        </div>
      )}
      {mode === "home" && (
        <div className="-mt-8 -ml-4 p-2">
          <Home />
        </div>
      )}
      {mode === "battle" && (
        <div className="flex flex-col justify-between p-1 items-center h-[310px] w-[310px] -mt-2 -ml-2">
          <div
            className={`rounded-md border-2 p-3 font-Gothic font-bold border h-5 flex justify-center text-[#f4f4f4] items-center text-sm ${
              progressBarArdv === 100
                ? "w-full bg-green-600"
                : progressBarArdv === 75
                ? "w-3/6 bg-green-900"
                : progressBarArdv === 50
                ? "w-1/3 bg-yellow-600"
                : progressBarArdv === 25
                ? "w-1/5 bg-amber-700"
                : "w-2 bg-rose-700"
            }`}
          >
            {progressBarArdv}%
          </div>
          <div
            onClick={() => handleClick(progressBarArdv)}
            className={`flex cursor-pointer mt-14 ${
              attack ? "cursor-pointer" : "opacity-60 cursor-none"
            }`}
          >
            <img className="scale-[2]" src={boss} alt="" />
          </div>

          <div className="flex mt-6">
            <img src={duck} alt="" />
          </div>
          <div
            className={`rounded-md border-2 p-3 font-Gothic font-bold border h-5 flex justify-center text-[#f4f4f4] items-center text-sm mt-1 ${
              progressBarDuck === 100
                ? "w-full bg-green-600"
                : progressBarDuck === 75
                ? "w-3/6 bg-green-900"
                : progressBarDuck === 50
                ? "w-1/3 bg-yellow-600"
                : progressBarDuck === 25
                ? "w-1/5 bg-amber-700"
                : "w-2 bg-rose-700"
            } `}
          >
            {progressBarDuck}%
          </div>
        </div>
      )}
      {/*  {mode === "Enemy" ? <div className="relative bg-[url('../template/background_minigame_feed.png')] mx-auto -mt-2 -ml-2 p-2 bg-cover h-[310px] w-[310px]"></div> :
      } */}
      {mode === "playAgain" && (
        <div className="relative bg-[url('../template/background_minigame_dungeon_chest.png')] mx-auto -mt-2 -ml-2 p-2 bg-cover h-[310px] w-[310px]">
          <div className="text-white text-center mt-6 font-Modesto text-4xl font-bold">
            {displayWinner()}
          </div>
          <div className="">
            {chestDrop && (
              <div>
                <img
                  className="absolute bottom-14 left-36 cursor-pointer"
                  src={chest}
                />
                <img
                  onClick={() => setMode("home")}
                  className="absolute bottom-14 left-36 animate-ping cursor-pointer"
                  src={chest}
                />
              </div>
            )}
            <img
              src={duck}
              className={`absolute w-[80px] h-[110px] bottom-5 left-16 ${
                chestDrop ? "animate-bounce" : "animate-[walk_11s_infinite]"
              }`}
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dungeon;
