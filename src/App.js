import React from "react";
import Painel from "./components/Painel"

function App() {

  return(
    <div>
      <h1 className="titleName">Pomodoro</h1>
      <Painel duration={5}/>
    </div>
  )
}

export default App;
