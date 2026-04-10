import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import UseStateBeginner from "./Hooks/UseState/UseStateBeginner";
import UseStateIntermidiate from "./Hooks/UseState/UseStateIntermidiate";
import UseStateAdvance from "./Hooks/UseState/UseStateAdvance";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate/beginner" element={<UseStateBeginner />} />
        <Route path="/usestate/intermidiate" element={<UseStateIntermidiate />} />
        <Route path="/usestate/advance" element={<UseStateAdvance />} />
        <Route path="/usestate/:id" element={<UseStateAdvance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
