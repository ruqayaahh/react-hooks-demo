import React from "react";
import { State } from "./use-state-hook";
import { Welcome } from "./welcome";
import { Effect } from "./use-effect-hook";
import { Callback } from "./use-callback-hook";
import { Context } from "./use-context-hook";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="state" element={<State />} />
      <Route path="effect" element={<Effect />} />
      <Route path="callback" element={<Callback />} />
      <Route path="context" element={<Context />} />
    </Routes>
  );
}

export default App;
