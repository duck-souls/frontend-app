import duck from "../img/ducksouls.jpg"
import duck2 from "../img/ducksouls1.png"
const Landing = () => {
    return (
      <div>
        <div className="bg-gradient-to-b from-[#FFF068] to-[#FEE715] flex items-center">
            <div className="ml-10 max-w-fit text-[#101820]">
                <h1 className="text-5xl mb-5 font-bold">
                    Lorem ipsum dolor sit amet
                </h1>
                <p className="font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras fermentum sapien at sapien elementum, nec imperdiet odio semper.
                    In pellentesque, neque vitae efficitur pulvinar, enim libero viverra est, id convallis lectus justo id purus.
                    Donec porta ac nisi vitae vestibulum. Suspendisse nec accumsan nisi. Morbi nulla ex, sodales eu elementum at, sollicitudin ut eros.
                    Vivamus non cursus enim, sit amet finibus erat. Nullam commodo fermentum augue sit amet volutpat.
                </p>
                <button className="bg-[#807426] hover:bg-[#101820] hover:text-[#fff] rounded-md py-1 px-2.5 mt-5 font-bold w-32">Click me</button>
            </div>
            <img 
                src={duck} 
                alt="cazzutissima anatra"
                className="max-w-lg m-10 rounded-3xl"
            />
        </div>
        <div className="bg-gradient-to-b from-[#0A0C0F] to-[#101820] flex items-center">
            <img 
                src={duck2} 
                alt="cazzutissima anatra"
                className="max-w-lg m-10 rounded-3xl"
            />
            <div className="mr-10 text-[#fff] max-w-fit">
                <h1 className="text-5xl mb-5 font-bold">
                    Lorem ipsum dolor sit amet
                </h1>
                <p className="font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras fermentum sapien at sapien elementum, nec imperdiet odio semper.
                    In pellentesque, neque vitae efficitur pulvinar, enim libero viverra est, id convallis lectus justo id purus.
                    Donec porta ac nisi vitae vestibulum. Suspendisse nec accumsan nisi. Morbi nulla ex, sodales eu elementum at, sollicitudin ut eros.
                    Vivamus non cursus enim, sit amet finibus erat. Nullam commodo fermentum augue sit amet volutpat.
                </p>
                <button className="bg-[#CD7F32] hover:bg-[#fff] hover:text-[#101820] rounded-md py-1 px-2.5 mt-5 font-bold w-32">Click me</button>
            </div>
             
            
        </div>
      </div>
    );
  };
  
  export default Landing;