import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ContextProvider from "./context/ContextProvider";
import Items from "./components/Items";

const App: React.FC = () => {
  return (
    <ContextProvider>
      <div className="bg-gradient-to-t from-[#101820] to-black">
        <Navbar />
        <div className="pt-[120px]">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/items" element={<Items />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/game" element={<Game />} />
            <Route path="/mint" element={<Landing />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ContextProvider>
  );
};
export default App;
