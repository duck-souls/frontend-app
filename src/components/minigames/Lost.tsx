const Lost = (props) => {
  const random = Math.random() >= 0.5;
  const left = random;
  const right = !left;

  console.log(left);
  console.log(right);

  const handleLeftClick = () => {
    if (left) {
      props.fine(true);
    } else {
      console.log("coglione");
    }
  };

  const handleRightClick = () => {
    if (right) {
      props.fine(true);
    } else {
      console.log("coglione");
    }
  };

  return (
    <div className="relative">
      <div
        className={`h-[310px] w-[310px] mx-auto mt-4 p-2 border-black ${
          left
            ? "bg-[url('../template/sfondo_minigioco_lost.png')] scale-x-[-1] bg-cover"
            : "bg-[url('../template/sfondo_minigioco_lost.png')] bg-cover"
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
