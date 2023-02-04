import ItemsList from "../utils/ItemsList";

const Items = () => {
  return (
    <div className="h-screen w-full text-white">
      <div>
        <div className="font-Modesto font-bold lg:text-8xl text-6xl mt-12 text-center">
          Items
        </div>
        <div className="max-w-md lg:font-semibold font-Gothic mt-10 m-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          fermentum sapien at sapien elementum, nec imperdiet odio semper. In
          pellentesque, neque vitae efficitur pulvinar, enim libero viverra est,
          id convallis lectus justo id purus.
        </div>
        <div className="flex">
          <div className="w-1/4 flex justify-start flex-col items-center border-4">
            {" "}
            {/*helm*/}
            <div className="font-Modesto lg:font-bold lg:text-4xl text-2xl mt-16 mb-16 border-4">
              Helmets
            </div>
            <div className="grid gap-3 lg:grid-cols-2 border-4">
              <img src={ItemsList.iron?.helm.tier1.image} />
              <img src={ItemsList.iron?.helm.tier2.image} />
              <img src={ItemsList.light?.helm.tier1.image} />
              <img src={ItemsList.light?.helm.tier2.image} />
              <img src={ItemsList.mithril?.helm.tier1.image} />
              <img src={ItemsList.mithril?.helm.tier2.image} />
            </div>
          </div>
          <div className="w-1/4 flex justify-start flex-col items-center">
            {" "}
            {/*armor*/}
            <div className="font-Modesto lg:font-bold lg:text-4xl text-2xl mt-16 mb-16">
              Armors
            </div>


                <div className="grid gap-3 lg:grid-cols-2">
                  <img src={ItemsList.iron?.armor.tier1.image} />
                  <img src={ItemsList.iron?.armor.tier2.image} />
                  <img src={ItemsList.light?.armor.tier1.image} />
                  <img src={ItemsList.light?.armor.tier2.image} />
                  <img src={ItemsList.mithril?.armor.tier1.image} />
                  <img src={ItemsList.mithril?.armor.tier2.image} />
                </div>
        
          </div>
          <div className="w-1/4 flex justify-start flex-col items-center">
            {" "}
            {/*weapon*/}
            <div className="font-Modesto lg:font-bold lg:text-4xl text-2xl mt-16 mb-16">
              Weapons
            </div>
          
                <div className="grid gap-3 lg:grid-cols-2">
                  <img src={ItemsList.iron?.weapon.tier1.image} />
                  <img src={ItemsList.iron?.weapon.tier2.image} />
                  <img src={ItemsList.light?.weapon.tier1.image} />
                  <img src={ItemsList.light?.weapon.tier2.image} />
                  <img src={ItemsList.mithril?.weapon.tier1.image} />
                  <img src={ItemsList.mithril?.weapon.tier2.image} />
                </div>
           
          </div>
          <div className="w-1/4 flex justify-start flex-col items-center">
            {" "}
            {/*ring*/}
            <div className="font-Modesto lg:font-bold lg:text-4xl text-2xl mt-16 mb-16">
              Rings
            </div>
           
                <div className="grid gap-3 lg:grid-cols-2">
                  <img src={ItemsList.iron?.ring.tier1.image} />
                  <img src={ItemsList.iron?.ring.tier2.image} />
                  <img src={ItemsList.light?.ring.tier1.image} />
                  <img src={ItemsList.light?.ring.tier2.image} />
                  <img src={ItemsList.mithril?.ring.tier1.image} />
                  <img src={ItemsList.mithril?.ring.tier2.image} />
                </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
