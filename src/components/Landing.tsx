import duck from "../img/ducksouls.jpg";
import duck2 from "../img/ducksouls1.png";

import border from "../img/border.png";

const Landing = (props) => {
  const randomCibo = () => {
    const cibo = ["asd", "lol", "rofl"];
    const ciboRandomizer = Math.floor(Math.random() * cibo.length);
    console.log(cibo[ciboRandomizer]);
  };
  /* 
  const updates = [
    {
      version: "Version: 1.1",
      feature: ["Rankings", "More troubles", "More items"],
    },
  ]; */
  return (
    <div>
      <div className="bg-gradient-to-b p-10 from-[#FFF068] to-[#FEE715] flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:px-24">
        <div className="max-w-fit text-[#101820] flex flex-col items-center lg:w-1/2">
          <h1 className="lg:text-7xl mb-5 font-bold text-5xl lg:mr-auto font-Modesto">
            DUCK SOULS
          </h1>
          <p className="lg:font-semibold font-Gothic">
            Duck Souls is a blockchain-based game where players can purchase and
            control a duck character.<br />The objective of the player is to keep
            their character alive accepting daily mini-games known as
            "troubles."<br />The character is based on a smart contract with a base
            value in ETH that can be increased by accpeting these troubles.<br />The
            character has five hearts and when all hearts are lost, the
            character dies and becomes a ghost losing half of its value when it
            was alive.<br />The player can resurrect the character by paying its base
            value, which increases its value to the original value plus the ghost value.
            The user has two hours to accept the trouble, otherwise a heart is lost.<br />
            The character's value can be sold at any time for ETH.<br />
            A fee is taken from transactions to create loot, which is
            used to increase monthly the value of characters alive at that time
            and add a random bonus to the dungeon entrance.<br />Active players can
            earn extra income by taking the dungeon challenge, but there is a
            chance of losing a heart or dying.<br />Chests can be obtained from
            dungeons and they occupy one of the three available slots which take
            time to open.<br />The character's value also includes its rarity and
            limited-edition NFT items it possesses.
          </p>
          {/* <button
            onClick={randomCibo}
            className="bg-[url('../template/button.png')] bg-no-repeat bg-cover hover:bg-[url('../template/button_hover.png')] 
            active:text-[#FFF068] active:bg-[url('../template/button_clicked.png')] hover:text-[white] lg:mr-auto py-1 px-2.5 mt-5 font-Gothic lg:w-fit h-[34px]"
          >
            COMING SOON
          </button> */}
        </div>
        <img
          src={duck}
          alt="cazzutissima anatra"
          className="lg:max-w-lg lg:w-max w-96 m-10 rounded-3xl lg:w1/2"
        />
      </div>
      {/* <div className="bg-gradient-to-b p-10 from-[#0As0C0F] to-[#101820] flex flex-col items-center text-[#fff]">
        <h1 className="font-bold lg:text-7xl text-5xl font-Modesto">Loot</h1>
        <p className="lg:my-16 lg:text-xl my-10 font-Gothic">
          Loot is a part of the game where every transaction made contributes to
          a monthly reward. The 30% of the loot is used to increase the value of all
          characters still alive at the end of the month. The remaining 70% is
          added as a random percentage to the basic purchase value of the
          dungeon entrance, effectively generating an extra reward. The monthly
          reward serves to favor two different styles of play: passive players
          receive an increase in the passive value of their character, while
          active players have the possibility of earning extra income through
          the dungeon challenge. Active players can earn more by accepting the
          dungeon, but they also have the possibility of losing a heart or
          dying. The value of the skipped dungeon is returned to the loot.
        </p>
    
        <img src={border} alt="quest" className="lg:w-1/4 w-1/2" />
        <button
          className="bg-[url('../template/button.png')] bg-no-repeat bg-cover  hover:bg-[url('../template/button_hover.png')] 
            active:text-[#FFF068] active:bg-[url('../template/button_clicked.png')] hover:text-[#101820] rounded-md py-1 px-2.5 mt-5 font-Gothic lg:w-fit h-[34px]"
        >
          COMING SOON
        </button> 
      </div>
     <div className="bg-gradient-to-b p-10 from-[#FFF068] to-[#FEE715]">
        <h1 className="text-center font-bold lg:text-8xl lg:mt-28 lg:mb-40 mb-20 text-5xl font-Modesto">
          ROADMAP
        </h1>
        <div className="lg:grid lg:grid-cols-3 lg:gap-20 lg:h-[645px] flex flex-col ">
          {updates.map((data) => (
            <div className="bg-[url('../template/frame.png')]  lg:max-h-[555px] mb-10 bg-center bg-no-repeat bg-contain flex flex-col items-center">
              <h1 className="font-bold lg:text-6xl text-3xl lg:my-20 my-10 font-Modesto">
                {data.version}
              </h1>
              {data.feature.map((feature) => (
                <li>
                  <ul>
                    <p className="lg:text-4xl text-2xl my-5 font-Gothic">
                      {feature}
                    </p>
                  </ul>
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-b p-10 from-[#FFF068] to-[#FEE715] flex flex-col items-center">
        <h1 className="font-bold lg:text-7xl text-5xl font-Modesto">
          Troubles
        </h1>
        <p className="lg:my-16 lg:text-xl my-10 font-Gothic">
          Troubles are mini-games in Duck Souls where the player has to keep
          their character alive by completing daily challenges. There are
          several types of troubles that can happen during the day, such as
          hunger, encountering some bandits, getting lost or entering a dungeon.
        </p>
      </div> */}
      <div className="bg-gradient-to-b p-10 from-[#0A0C0F] to-[#101820] flex flex-col-reverse lg:flex-row-reverse items-center lg:justify-between lg:px-24">
        <div className="text-[#fff] flex flex-col items-center lg:w-1/2">
          <h1 className="lg:text-5xl mb-5 font-bold text-3xl lg:mr-auto font-Modesto">
            Troubles & Loot
          </h1>
          <p className="lg:font-semibold font-Gothic">
          Troubles are mini-games in Duck Souls where the player has to keep
          their character alive by completing daily challenges.<br />There are
          several types of troubles that can happen during the day, such as
          hunger, encountering some bandits, getting lost or entering a dungeon.
          Loot is a part of the game where every transaction made contributes to
          a monthly reward.<br />The 30% of the loot is used to increase the value of all
          characters still alive at the end of the month.<br />The remaining 70% is
          added as a random percentage to the basic purchase value of the
          dungeon entrance, effectively generating an extra reward.<br />The monthly
          reward serves to favor two different styles of play:<br />- Passive players
          receive an increase in the passive value of their character, while
          active players have the possibility of earning extra income through
          the dungeon challenge.<br />- Active players can earn more by accepting the
          dungeon, but they also have the possibility of losing a heart or
          dying.<br />The value of the skipped dungeon is returned to the loot.
          </p>
          {/*           <button
            className="bg-[url('../template/button.png')] bg-no-repeat bg-cover hover:bg-[url('../template/button_hover.png')] 
            active:text-[#FFF068] active:bg-[url('../template/button_clicked.png')] hover:text-[#101820] lg:mr-auto py-1 px-2.5 mt-5 lg:w-fit font-Gothic h-[34px]"
          >
            COMING SOON
          </button> */}
        </div>
        <img
          src={duck2}
          alt="cazzutissima anatra"
          className="lg:max-w-lg lg:w-max w-96 m-10 rounded-3xl lg:w-1/2"
        />
      </div>
    </div>
  );
};

export default Landing;
