import { useState } from "react";
import duck from "../img/duck_char.png";
import ItemsList from "../utils/ItemsList";

const Home = () => {
  return (
    <div className="w-[310px] h-[310px] mx-auto mt-4 p-2 bg-[url('../template/background_home.png')] bg-cover">
      <div className="relative mt-8">
        <img
          src={duck}
          className="absolute bottom-0 left-16 animate-[walk_11s_infinite]"
        ></img>
        {ItemsList.map((item) => {
          return (
            <div className="flex justify-between">
              <div className="p-1">
                <img
                  className="hover:scale-125"
                  src={item.mithril?.helm.tier2.image}
                />

                <img
                  className="mt-2 hover:scale-125"
                  src={item.mithril?.armor.tier2.image}
                />
              </div>
              <div className="p-1">
                <img
                  className="hover:scale-125"
                  src={item.mithril?.weapon.tier2.image}
                />
                <img
                  className="mt-2 hover:scale-125"
                  src={item.mithril?.ring.tier2.image}
                />
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-[290px] h-[80px] bg-[url('../template/text_button.png')] mt-5">
        <div className="text-white text-center text-2xl font-bold"></div>
      </button>
    </div>
  );
};

export default Home;
