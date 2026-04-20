import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import UseStateBeginner from "./Hooks/UseState/UseStateBeginner";
import UseStateIntermidiate from "./Hooks/UseState/UseStateIntermidiate";
import UseStateAdvance from "./Hooks/UseState/UseStateAdvance";
import UseEffectBeginner from "./Hooks/UseEffect/UseEffectBeginner";
import UseEffectIntermidiate from "./Hooks/UseEffect/UseEffectIntermidiate";
import UseEffectAdvance from "./Hooks/UseEffect/UseEffectAdvance";
import UseContextBeginner from "./Hooks/UseContext/UseContextBeginner";
import UseContextIntermidiate from "./Hooks/UseContext/UseContextIntermidiate";
import UseContextAdvance from "./Hooks/UseContext/UseContextAdvance";
import UseRefBeginner from "./Hooks/UseRef/UseRefBeginner";
import UseRefIntermidiate from "./Hooks/UseRef/UseRefIntermidiate";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate/beginner" element={<UseStateBeginner />} />
        <Route
          path="/usestate/intermidiate"
          element={<UseStateIntermidiate />}
        />
        <Route path="/usestate/advance" element={<UseStateAdvance />} />
        <Route path="/useeffect/beginner" element={<UseEffectBeginner />} />
        <Route path="/useeffect/advance" element={<UseEffectAdvance />} />
        <Route path="/useeffect/intermidiate" element={<UseEffectIntermidiate />}/>
        <Route path="/usecontext/beginner" element={<UseContextBeginner />}/>
        <Route path="/usecontext/intermidiate" element={<UseContextIntermidiate />}/>
        <Route path="/usecontext/advance" element={<UseContextAdvance />}/>
        <Route path="/useref/beginner" element={<UseRefBeginner />}/>
        <Route path="/useref/intermidiate" element={<UseRefIntermidiate />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
