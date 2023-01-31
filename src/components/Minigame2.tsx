import { useState } from "react";
import duck from "../img/ducksouls.jpg";
import duck2 from "../img/ducksouls1.png";

const Minigame2 = () => {
  const [showImage, setShowImage] = useState<boolean | null>(true);

  const handleClick = () => {
    setShowImage(false);
    setTimeout(() => {
      setShowImage(null);
    }, 2000);
  };

  return showImage === null ? (
    <div className="h-[205px] w-[205px] ml-9 mt-2 mb-4"></div>
  ) : (
    <div className=" h-[205px] w-[205px] ml-9 mt-2 mb-4">
      {showImage ? (
        <img src={duck2} alt="invader dead" onClick={handleClick} />
      ) : (
        <img src={duck} alt="invader" onClick={handleClick} />
      )}
    </div>
  );
};

export default Minigame2;
