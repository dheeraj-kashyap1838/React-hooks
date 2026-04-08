import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import UseStateBeginner from "./Hooks/UseState/UseStateBeginner";
import UseStateIntermidiate from "./Hooks/UseState/UseStateIntermidiate";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate/beginner" element={<UseStateBeginner />} />
        <Route path="/usestate/Intermidiate" element={<UseStateIntermidiate />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
