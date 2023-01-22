import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import Game from "./components/Game/Game";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
