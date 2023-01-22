import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Game from "./components/Game/Game";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
};
export default App;
