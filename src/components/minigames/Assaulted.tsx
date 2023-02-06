import { useContext, useState } from "react";
import { Context, contextType } from "../../context/ContextProvider";

const Assaulted = ({ setGameEndProps }) => {
  const [assaulted, setAssaulted] = useState([0, 0, 0, 1, 1, 1, 1, 1, 1]);
  const { diamond } = useContext<contextType>(Context);

  const register = async () => {
    const tx = await diamond.startRegister();
    await tx.wait();
  };

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const handleClick = (i) => {
    const newAssaulted = [...assaulted];
    if (newAssaulted[i] === 0) {
      newAssaulted[i] = 1;
      setAssaulted(newAssaulted);
    }
    if (!newAssaulted.includes(0)) {
      setGameEndProps(true);
      register();
    }
  };

  return (
    <div className="w-[310px] h-[310px] mx-auto mt-4 p-2 bg-[url('../template/background_minigame_bandit.png')] bg-cover">
      <div className="grid grid-cols-3 ml-2 mt-7">
        {shuffle(assaulted).map((value, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            disabled={value === 1}
            className={`m-1 w-[82px] h-[82px] ${
              !value
                ? "bg-[url('../template/bandit.png')] active:bg-[url('../template/bandit_death.png')]"
                : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Assaulted;
