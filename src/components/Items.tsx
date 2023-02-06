import ItemsList from "../utils/ItemsList";

const Items = () => {
  return (
    <div className="w-full text-white">
      <div>
        <div className="font-Modesto font-bold lg:text-8xl text-6xl mt-12 text-center">
          Items
        </div>
        <div className="flex flex-col">
          <div className="max-w-md lg:font-semibold font-Gothic mt-10 m-auto text-center">
            These items will be limited edition and will be managed in
            BLOCKCHAIN ​​as NFTs.
            <br />
            In addition to its real value in tFIL, the character will have a
            value defined by the market as a COLLECTIBLE given by the quantity
            and quality of the objects in its possession.
          </div>

          <ul className="max-w-md lg:font-semibold font-Gothic mt-10 m-auto text-center">
            ITEMS QUALITY
            <li>LIGHT - only 60 pieces available for each item</li>
            <li>IRON - only 40 pieces available for each item</li>
            <li>MITHRIL - only 10 pieces available for each item</li>
          </ul>
        </div>
        <div className="flex">
          <div className="w-1/4 flex justify-start flex-col items-center">
            {" "}
            {/*helm*/}
            <div className="font-Modesto lg:font-bold lg:text-4xl text-2xl mt-16 mb-16">
              Helmets
            </div>
            <div className="flex gap-3 flex-col">
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.light?.helm.tier1.image} />
                <div>Light Helm Tier 1</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.light?.helm.tier2.image} />
                <div>Light Helm Tier 2</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.iron?.helm.tier1.image} />
                <div>Iron Helm Tier 1</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.iron?.helm.tier2.image} />
                <div>Iron Helm Tier 2</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.mithril?.helm.tier1.image} />
                <div>Mithril Helm Tier 1</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.mithril?.helm.tier2.image} />
                <div>Mithril Helm Tier 2</div>
              </div>
            </div>
          </div>
          <div className="w-1/4 flex justify-start flex-col items-center">
            {" "}
            {/*armor*/}
            <div className="font-Modesto lg:font-bold lg:text-4xl text-2xl mt-16 mb-16">
              Armors
            </div>
            <div className="flex gap-3 flex-col">
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.light?.armor.tier1.image} />
                <div>Light Armor Tier 1</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.light?.armor.tier2.image} />
                <div>Light Armor Tier 2</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.iron?.armor.tier1.image} />
                <div>Iron Armor Tier 1</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.iron?.armor.tier2.image} />
                <div>Iron Armor Tier 2</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.mithril?.armor.tier1.image} />
                <div>Mithril Armor Tier 1</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.mithril?.armor.tier2.image} />
                <div>Mithril Armor Tier 2</div>
              </div>
            </div>
          </div>
          <div className="w-1/4 flex justify-start flex-col items-center">
            {" "}
            {/*weapon*/}
            <div className="font-Modesto lg:font-bold lg:text-4xl text-2xl mt-16 mb-16">
              Weapons
            </div>
            <div className="flex gap-3 flex-col">
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.light?.weapon.tier1.image} />
                <div>Light Weapon Tier 1</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.light?.weapon.tier2.image} />
                <div>Light Weapon Tier 2</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.iron?.weapon.tier1.image} />
                <div>Iron Weapon Tier 1</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.iron?.weapon.tier2.image} />
                <div>Iron Weapon Tier 2</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.mithril?.weapon.tier1.image} />
                <div>Mithril Weapon Tier 1</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.mithril?.weapon.tier2.image} />
                <div>Mithril Weapon Tier 2</div>
              </div>
            </div>
          </div>
          <div className="w-1/4 flex justify-start flex-col items-center">
            {" "}
            {/*ring*/}
            <div className="font-Modesto lg:font-bold lg:text-4xl text-2xl mt-16 mb-16">
              Rings
            </div>
            <div className="flex gap-3 flex-col">
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.light?.ring.tier1.image} />
                <div>Light Ring Tier 1</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.light?.ring.tier2.image} />
                <div>Light Ring Tier 2</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.iron?.ring.tier1.image} />
                <div>Iron Ring Tier 1</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.iron?.ring.tier2.image} />
                <div>Iron Ring Tier 2</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.mithril?.ring.tier1.image} />
                <div>Mithril Ring Tier 1</div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center justify-center lg:justify-start ">
                <img src={ItemsList.mithril?.ring.tier2.image} />
                <div>Mithril Ring Tier 2</div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md lg:font-semibold font-Gothic mt-10 m-auto text-center mb-14">
          If the character is not sold en bloc in the NFT market but only
          exchanged for its equivalent in tFIL, all limited-edition items in its
          possession will become available again within the game.
        </div>
      </div>
    </div>
  );
};

export default Items;
