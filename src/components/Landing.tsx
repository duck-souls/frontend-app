import duck from "../img/ducksouls.jpg";
import duck2 from "../img/ducksouls1.png";
import Context, {contextType}  from "../components/Context"
import border from "../img/border.png"
import { useContext } from "react";


const Landing: React.FC = () => {
  const contextValue = useContext<contextType>(Context)
  const updates = [{
    version:"Version: 1.0",
    feature:["lorem", "ipsum", "dolor"]
  },
  {
    version:"Version: 1.1",
    feature:["sit", "amet", "consectetur"]
  },
  {
    version:"Version: 1.2",
    feature:["adipiscing", "elit", "tuzia"]
  }]
  return (
    <div>
      <div className="bg-gradient-to-b p-10 from-[#FFF068] to-[#FEE715] flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:px-24">
        <div className="max-w-fit text-[#101820] flex flex-col items-center lg:w-1/2">
          <h1 className="lg:text-5xl mb-5 font-bold text-3xl lg:mr-auto font-Modesto">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="lg:font-semibold font-Gothic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            fermentum sapien at sapien elementum, nec imperdiet odio semper. In
            pellentesque, neque vitae efficitur pulvinar, enim libero viverra
            est, id convallis lectus justo id purus. Donec porta ac nisi vitae
            vestibulum. Suspendisse nec accumsan nisi. Morbi nulla ex, sodales
            eu elementum at, sollicitudin ut eros. Vivamus non cursus enim, sit
            amet finibus erat. Nullam commodo fermentum augue sit amet volutpat.
          </p>
          <button onClick={contextValue.toggle} className="bg-[url('../template/button.png')] bg-no-repeat bg-cover hover:bg-[url('../template/button_hover.png')] 
            active:text-[#FFF068] active:bg-[url('../template/button_clicked.png')] hover:text-[white] lg:mr-auto py-1 px-2.5 mt-5 font-Gothic lg:w-fit h-[34px]">
            flippalo:{contextValue.state ? "True" : "False"}
          </button>
        </div>
        <img
          src={duck}
          alt="cazzutissima anatra"
          className="lg:max-w-lg lg:w-max w-96 m-10 rounded-3xl lg:w1/2"
        />
      </div>
      <div className="bg-gradient-to-b p-10 from-[#0As0C0F] to-[#101820] flex flex-col items-center text-[#fff]">
        <h1 className="font-bold lg:text-7xl text-5xl font-Modesto">Quests</h1>
        <p className="lg:my-16 lg:text-xl my-10 font-Gothic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            fermentum sapien at sapien elementum, nec imperdiet odio semper.</p>
            <img 
                src={border}
                alt="quest"
                className="lg:w-1/4 w-1/2"
            />           
            <button className="bg-[url('../template/button.png')] bg-no-repeat bg-cover  hover:bg-[url('../template/button_hover.png')] 
            active:text-[#FFF068] active:bg-[url('../template/button_clicked.png')] hover:text-[#101820] rounded-md py-1 px-2.5 mt-5 font-Gothic lg:w-fit h-[34px]">
              COMING SOON
            </button>
      </div>
      <div className="bg-gradient-to-b p-10 from-[#FFF068] to-[#FEE715]">
      <h1 className="text-center font-bold lg:text-8xl lg:mt-28 lg:mb-40 mb-20 text-5xl font-Modesto">ROADMAP</h1>
        <div className="lg:grid lg:grid-cols-3 lg:gap-20 lg:h-[645px] flex flex-col ">
          {updates.map(data =>(
            <div className="bg-[url('../template/frame.png')] lg:h-full h-[415px] mb-10 bg-no-repeat bg-cover flex flex-col items-center">
              <h1 className="font-bold lg:text-6xl text-3xl lg:my-20 my-10 font-Modesto">{data.version}</h1>
              {data.feature.map(feature=>(
                <li>
                  <ul><p className="lg:text-4xl text-2xl my-5 font-Gothic">{feature}</p></ul>
                </li>
              ))}
            </div>
          ))}
        </div>

      </div>
      <div className="bg-gradient-to-b p-10 from-[#0A0C0F] to-[#101820] flex flex-col-reverse lg:flex-row-reverse items-center lg:justify-between lg:px-24">
        <div className="text-[#fff] flex flex-col items-center lg:w-1/2">
          <h1 className="lg:text-5xl mb-5 font-bold text-3xl lg:mr-auto font-Modesto">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="lg:font-semibold font-Gothic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            fermentum sapien at sapien elementum, nec imperdiet odio semper. In
            pellentesque, neque vitae efficitur pulvinar, enim libero viverra
            est, id convallis lectus justo id purus. Donec porta ac nisi vitae
            vestibulum. Suspendisse nec accumsan nisi. Morbi nulla ex, sodales
            eu elementum at, sollicitudin ut eros. Vivamus non cursus enim, sit
            amet finibus erat. Nullam commodo fermentum augue sit amet volutpat.
          </p>
          <button className="bg-[url('../template/button.png')] bg-no-repeat bg-cover hover:bg-[url('../template/button_hover.png')] 
            active:text-[#FFF068] active:bg-[url('../template/button_clicked.png')] hover:text-[#101820] lg:mr-auto py-1 px-2.5 mt-5 lg:w-fit font-Gothic h-[34px]">
            COMING SOON
          </button>
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
