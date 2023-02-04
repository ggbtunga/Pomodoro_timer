import React from "react";
import "./App.css"
import Painel from "./components/Painel"

function App() {

  return(
    <div>
      <h1 className="titleName">Pomodoro</h1>
      <Painel duration={25 * 60}/>
    </div>
  )
}

export default App;
