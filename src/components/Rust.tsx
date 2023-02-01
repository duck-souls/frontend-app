import { useState } from "react";

const Rust = () => {
  const [rust, setRust] = useState([0, 0, 0, 1, 1, 1, 1, 1, 1]);

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const handleClick = (i) => {
    const newRust = [...rust];
    if (newRust[i] === 0) {
      newRust[i] = 1;
      setRust(newRust);
    }
    if (!newRust.includes(0)) {
      console.log("BRAVO");
    }
  };

  return (
    <div className="w-[310px] h-[310px] bg-[url('../template/sfondo_minigioco_bandit.png')] bg-cover mx-auto mt-4 p-2">
      <div className="grid grid-cols-3 ml-2 mt-7">
        {shuffle(rust).map((value, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            disabled={value === 1}
            className={`m-1 border-2 border-black w-[82px] h-[82px] ${
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

export default Rust;

// active:bg-[url('bg-[url('../template/bandit_death.png')]
