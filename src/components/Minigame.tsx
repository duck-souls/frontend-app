const Minigame = () => {
  const random = Math.random() >= 0.5;
  const left = random;
  const right = !left;

  console.log(left);
  console.log(right);

  const handleLeftClick = () => {
    if (left) {
      console.log("bravo");
    } else {
      console.log("coglione");
    }
  };

  const handleRightClick = () => {
    if (right) {
      console.log("bravo");
    } else {
      console.log("coglione");
    }
  };

  return (
    <div className=" relative">
      <div
        className={`${
          left
            ? "bg-[url('../template/choose.png')]"
            : "bg-[url('../template/choose.png')] scale-x-[-1]"
        } bg-no-repeat h-[205px] w-[205px] ml-9 mt-2 mb-4`}
      ></div>
      <div className="flex justify-between mx-5 text-white">
        <div
          onClick={handleLeftClick}
          className="cursor-pointer absolute top-1 left-9 h-[95px] w-[100px]"
        ></div>
        <div
          onClick={handleRightClick}
          className="cursor-pointer absolute top-1 right-9 h-[95px] w-[100px]"
        ></div>
      </div>
    </div>
  );
};
export default Minigame;
