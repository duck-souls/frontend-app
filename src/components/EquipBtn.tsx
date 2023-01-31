import { useState } from "react";
import duck from "../img/duck_icon.png";

export interface Props {
  onClick: () => void;
  zoomable?: boolean;
  height?: string;
  width?: string;
}

const EquipBtn = ({ onClick, zoomable }: Props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={`${clicked && zoomable ? "transform scale-150" : ""}
        cursor-pointer border-2 border-[#FFF068] p-2 rounded-lg bg-gray-300 hover:bg-gray-400`}
      onClick={() => {
        if (zoomable) {
          setClicked(!clicked);
        }
      }}
    >
      <img src={duck} className="w-5 h-5" />
    </div>
  );
};
export default EquipBtn;
