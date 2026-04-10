import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import UseStateBeginner from "./Hooks/UseState/UseStateBeginner";
import UseStateIntermidiate from "./Hooks/UseState/UseStateIntermidiate";
import UseStateAdvance from "./Hooks/UseState/UseStateAdvance";
import UseEffectBeginner from "./Hooks/UseEffect/UseEffectBeginner";
import UseEffectAdvance from "./Hooks/UseEffect/UseEffectAdvance";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate/beginner" element={<UseStateBeginner />} />
        <Route path="/usestate/intermidiate" element={<UseStateIntermidiate />} />
        <Route path="/usestate/advance" element={<UseStateAdvance />} />
        <Route path="/useeffect/beginner" element={<UseEffectBeginner />} />
        <Route path="/useeffect/advance" element={<UseEffectAdvance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
