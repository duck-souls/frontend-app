import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Wrapper from "./components/Wrapper";


const App: React.FC = () => { 
  return (
    <Wrapper> 
      <div className="bg-gradient-to-t from-[#101820] to-black">
        <Navbar />
        <div className="pt-[120px]">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/game" element={<Game />} />
          <Route path="/mint" element={<Landing />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </Wrapper>
  );
};
export default App;
