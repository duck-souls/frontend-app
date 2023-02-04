import { useState } from "react";
import duck from "../img/duck_char.png";
import ItemsList from "../utils/ItemsList";

const Home = () => {
  return (
    <div className="w-[310px] h-[310px] mx-auto mt-4 p-2 bg-[url('../template/background_home.png')] bg-cover">
      <div className="relative mt-14">
        <img
          src={duck}
          className="absolute bottom-0 left-16 animate-[walk_11s_infinite]"
        ></img>
        <div className="flex justify-between border-4">
          <div className="">
            <img
              className="hover:scale-125"
              src={ItemsList.mithril?.helm.tier2.image}
            />

            <img
              className="mt-2 hover:scale-125"
              src={ItemsList.mithril?.armor.tier2.image}
            />
          </div>
          <div className="">
            <img
              className="hover:scale-125"
              src={ItemsList.mithril?.weapon.tier2.image}
            />
            <img
              className="mt-2 hover:scale-125"
              src={ItemsList.mithril?.ring.tier2.image}
            />
          </div>
        </div>
      </div>
      <div className="w-[290px] h-[80px] bg-[url('../template/text_button.png')] mt-8">
        <div className="text-white text-center text-2xl font-bold"></div>
      </div>
    </div>
  );
};

export default Home;
