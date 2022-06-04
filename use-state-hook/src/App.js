import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [variable, setVariable] = useState("sampleOfInitialState");

  let anotherVariable = "testing update without useState";
  const [variableSample2, setvariableSample2] = useState(anotherVariable);

  const updateWithoutUseStateFunction = () => {
    anotherVariable = "variableSample2 is updated but will not show on the UI";
    console.log(anotherVariable);
  };
  return (
    <div>
      <h1>
        {variable} {number} times
      </h1>
      <button
        onClick={() => {
          setVariable("updated");
          setNumber(number + 1);
        }}
      >
        Update Variable
      </button>

      <h1>{variableSample2}</h1>
      <button onClick={() => updateWithoutUseStateFunction()}>
        Update Variable Sample 2
      </button>
    </div>
  );
}

export default App;
