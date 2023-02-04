const Lost = ({ setGameEndProps }) => {
  const random = Math.random() >= 0.5;
  const left = random;
  const right = !left;

  console.log(left);
  console.log(right);

  const handleLeftClick = () => {
    if (left) {
      setGameEndProps(true);
    } else {
      console.log("wrong");
    }
  };

  const handleRightClick = () => {
    if (right) {
      setGameEndProps(true);
    } else {
      console.log("wrong");
    }
  };

  return (
    <div className="relative">
      <div
        className={`h-[310px] w-[310px] mx-auto mt-4 p-2 border-black ${
          left
            ? "bg-[url('../template/background_minigame_lost.png')] scale-x-[-1] bg-cover"
            : "bg-[url('../template/background_minigame_lost.png')] bg-cover"
        }`}
      ></div>
      <div className="flex justify-between text-white">
        <div
          onClick={handleLeftClick}
          className="cursor-pointer h-[315px] w-[158px] absolute top-0 left-16"
        ></div>
        <div
          onClick={handleRightClick}
          className="cursor-pointer h-[315px] w-[158px] absolute top-0 right-16"
        ></div>
      </div>
    </div>
  );
};
export default Lost;
