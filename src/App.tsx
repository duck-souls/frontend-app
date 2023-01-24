import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

const App = () => {
  return (
    <div className="pt-[120px] bg-gradient-to-t from-[#101820] to-black">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
export default App;
