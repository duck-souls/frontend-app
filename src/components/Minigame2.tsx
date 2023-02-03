import { useState } from "react";
import duck from "../img/ducksouls.jpg";
import duck2 from "../img/ducksouls1.png";


const Minigame2 = () => {
const [mode, setMode] = useState("start");
const [progressBarDuck, setProgressBarDuck] = useState(100)
const [progressBarArdv ,setProgressBarArdv] = useState(100)
const [completed, setCompleted] = useState(false)
const [attack, setAttack] = useState(false)
const [winner, setWinner] = useState("")

const playAgain = () => {
  setMode("start")
  setProgressBarArdv(100)
  setProgressBarDuck(100)
  setCompleted(false)
  setAttack(false)
  setWinner("")
}


const checkWinner = () => {
 
    if (progressBarDuck === 0) {
      setCompleted(!false)
      setWinner("Adversary")
    } 
    else if (progressBarArdv === 0) {
     setCompleted(!false)
      setWinner("Duck") 
    } 
  
}
const advPlay = () => {
  let percent = [75, 50, 25, 0]
  const random = Math.floor(Math.random() * percent.length)
  const total = percent[random]
  setTimeout(() => {
    if (winner) return
    setProgressBarDuck(prev => prev - total) 
    if (total > progressBarDuck) {
      setProgressBarDuck(0)
      setCompleted(!false)
      checkWinner()
      setMode("playAgain")
    }
  }, 2000)
}
      
const handleClick = (x:any) => {
  let percent = [75, 50, 25, 0]
const random = Math.floor(Math.random() * percent.length)
const total = percent[random]
  setAttack(!false)
  if (winner) return
   setProgressBarArdv(x - total)
  if (total > x) {
    setProgressBarArdv(0)
    setCompleted(!false)
    checkWinner()
    setMode("playAgain")
  }
  return advPlay()
}
  
const displayWinner = () => {
  if (completed && winner) {
    return `The winner is ${winner}!`
  } else {
    return "Game Over!!"
  }
}
//console.log(winner)
return (
<div className="w-[310px] h-[310px] mx-auto mt-4 p-2 border-2"> 
  {mode === "start" && <div
              className="block m-20 bg-[url('../template/button.png')] text-xl font-bold  bg-no-repeat bg-contain cursor-pointer hover:bg-[url('../template/button_hover.png')] 
              active:text-[#FFF068] active:bg-[url('../template/button_clicked.png')] hover:text-[#101820] lg:mr-auto py-1 px-2.5 mt-5 lg:w-fit font-Gothic h-[34px]"
            onClick={() => setMode("battle")}>
              Start Battle
            </div>}
  {mode === "battle" && 
     <div>
       <div onClick={() =>handleClick(progressBarArdv)} className="w-20 cursor-pointer mb-4 flex"><img src={duck} alt=""/></div>
       <div className={`rounded-full bg-[#AA895E]  h-5 text-white text-sm mb-7 ${progressBarDuck === 100 ? "w-full" : progressBarDuck === 75 ? "w-3/6" : progressBarDuck === 50 ? "w-1/3 bg-yellow-600" : progressBarDuck === 25 ? "w-1/5 bg-amber-700" : "w-2 bg-rose-700"} `}>{progressBarDuck}%</div>
       <div className="w-20 mb-4"><img src={duck2} alt="" /></div>
       <div className={`rounded-full bg-[#AA895E]  h-5 text-white text-sm ${progressBarArdv === 100 ? "w-full" : progressBarArdv === 75 ? "w-3/6" : progressBarArdv === 50 ? "w-1/3 bg-yellow-600" : progressBarArdv === 25 ? "w-1/5 bg-amber-700" : "w-2 bg-rose-700"}`}>{progressBarArdv}%</div>
     </div>
  }
  {mode === "playAgain" && 
  <div>
   <div className="text-white mt-10 ml-20">{displayWinner()}</div>
    <div onClick={playAgain} className="block m-20 bg-[url('../template/button.png')] text-xl font-bold  bg-no-repeat bg-contain cursor-pointer hover:bg-[url('../template/button_hover.png')] 
              active:text-[#FFF068] active:bg-[url('../template/button_clicked.png')] hover:text-[#101820] lg:mr-auto py-1 px-2.5 mt-5 lg:w-fit font-Gothic h-[34px]">Play Again</div>
  </div>
  }
</div>
)
};

export default Minigame2;
  


  












   
     
 
   
  





  






