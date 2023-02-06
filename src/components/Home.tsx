import { useState } from "react";
import duck from "../img/duck_char.png";
import ItemsList from "../utils/ItemsList";

const Home = () => {
  const [displayHelm, setDisplayHelm] = useState(false);
  const [displayArmor, setDisplayArmor] = useState(false);
  const [displayRing, setDisplayRing] = useState(false);
  const [displayWeapon, setDisplayWeapon] = useState(false);

  const helmShow = () => {
    setDisplayHelm(!displayHelm);
    setDisplayArmor(false);
    setDisplayWeapon(false);
    setDisplayRing(false);
  };

  const armorShow = () => {
    setDisplayArmor(!displayArmor);
    setDisplayHelm(false);
    setDisplayWeapon(false);
    setDisplayRing(false);
  };

  const weaponShow = () => {
    setDisplayWeapon(!displayWeapon);
    setDisplayArmor(false);
    setDisplayHelm(false);
    setDisplayRing(false);
  };

  const ringShow = () => {
    setDisplayRing(!displayRing);
    setDisplayArmor(false);
    setDisplayWeapon(false);
    setDisplayHelm(false);
  };

  return (
    <div className="w-[310px] h-[310px] mx-auto mt-4 p-2 bg-[url('../template/background_home.png')] bg-cover">
      <div className="relative mt-14">
        <img
          src={duck}
          className="absolute -bottom-4 left-16 animate-[walk_11s_infinite]"
        ></img>
        <div className="flex justify-between">
          <div className="">
            <img
              className="hover:scale-125"
              src={ItemsList.mithril?.helm.tier1.image}
              onClick={helmShow}
            />
            <img
              className="mt-2 hover:scale-125"
              src={ItemsList.iron?.armor.tier2.image}
              onClick={armorShow}
            />
          </div>
          <div className="">
            <img
              className="hover:scale-125"
              src={ItemsList.mithril?.weapon.tier2.image}
              onClick={weaponShow}
            />
            <img
              className="mt-2 hover:scale-125"
              src={ItemsList.light?.ring.tier2.image}
              onClick={ringShow}
            />
          </div>
        </div>
      </div>
      <div className="w-[290px] h-[80px] bg-[url('../template/text_button.png')] mt-10">
        {/* <div className="text-center text-black text-3xl font-Modesto>Home sweet home</div> */}
        <div className="text-center text-black text-3xl font-Modesto">
          {displayHelm && (
            <div>
              <div>{ItemsList.mithril?.helm.tier1.name}</div>
              <div>{ItemsList.mithril?.helm.tier1.rarity}</div>
            </div>
          )}
          {displayArmor && (
            <div>
              <div>{ItemsList.iron?.armor.tier2.name}</div>
              <div>{ItemsList.iron?.armor.tier2.rarity}</div>
            </div>
          )}
          {displayWeapon && (
            <div>
              <div>{ItemsList.mithril?.weapon.tier2.name}</div>
              <div>{ItemsList.mithril?.weapon.tier2.rarity}</div>
            </div>
          )}
          {displayRing && (
            <div>
              <div>{ItemsList.light?.ring.tier2.name}</div>
              <div>{ItemsList.light?.ring.tier2.rarity}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className="w-[310px] h-[310px] mx-auto mt-4 p-2 bg-[url('../template/background_home.png')] bg-cover"> */
}
