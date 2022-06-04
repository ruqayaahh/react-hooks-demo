import React, { useState } from "react";

function useStateSample() {
  const [variable, setVariable] = useState("sampleOfInitialState");
  return (
    <div>
      <h1>{variable}</h1>
      <button onClick={() => setVariable("updated")}>Update Variable</button>
    </div>
  );
}

export default useStateSample;
