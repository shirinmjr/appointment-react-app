import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  useEffect(() => {
    // console.log(`It's ${emotion} around here`);
  }, [emotion]);
  useEffect(() => {
    // console.log(`it's ${secondary} around here`);
  }, [secondary]);

  //--------Checkbox
  const [checked, setChecked] = useState(false);

  return (
    <div className='App'>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>
      <h2>Current secondary emtion is {secondary}</h2>
      <button onClick={() => setSecondary("greatful")}>Greatful</button>
      <p>
        <input
          type='checkbox'
          value={checked}
          onChange={() => setChecked((checked) => !checked)}></input>
        <label>{checked ? "checked" : "not checked"}</label>
      </p>
    </div>
  );
}

export default App;
