import React, { useState } from "react";
import "./App.css"
import Painel from "./components/Painel"

function App() {
  const [focusTime,setFocusTime] = useState(25 * 60)
  const [breakTime,setBreakTime] = useState(5 * 60)

  function handleSubmit(){
    let focusTime = parseInt(document.getElementById("focusTime").value);
    let breakTime = parseInt(document.getElementById("breakTime").value);
    setFocusTime(focusTime);
    setBreakTime(breakTime)
  }

  return(
    <div>
      <h1 className="titleName">Pomodoro</h1>
      <Painel focusTime={focusTime}/>
      <div className="slider">
        <h2>Custom timer</h2>
        <input
          id="focusTime"
          type="range"
          min={1500}
          max={2700}
          step={60}
          value={focusTime}
          onChange={(event) => setFocusTime(event.target.value)}
        />
        <p>Focus:{focusTime/60}</p>
        <input
          id="breakTime"
          type="range"
          min={300}
          max={900}
          step={60}
          value={breakTime}
          onChange={(event) => setBreakTime(event.target.value)}
        />
        <p>Break:{breakTime/60}</p>
        <button className="sliderButton" onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  )
}

export default App;
