import React from "react";
import { useState, useEffect } from "react";

export default function Painel({duration}){

    const [time,setTime] = useState(duration);
    const [isRunning,setIsRunning] = useState(false);
    const [intervalId,setIntervalId] = useState(null);
    const [isFocus,setIsFocus] = useState(true) 

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    useEffect(() =>{
        if (isRunning) {
            const id = setInterval(() => {
              if(time===0){
                if(isFocus){
                  setIsFocus(false)
                  setTime(5 * 60)
                }else{
                  setIsFocus(true)
                  setTime(25 * 60)
                }
                setIsRunning(false)
              }else{
                setTime(time-1)
              }
            }, 1000);
            setIntervalId(id);
          } else {
            clearInterval(intervalId);
          }
          return () => clearInterval(intervalId);
    },[isRunning,time,isFocus])
    

    return(
      <div className="painel">
        <div className={isFocus? "focus":"break"}>
            <h1>
              {isFocus? "Focus":"Break"}
            </h1>
            <div className="timer">
              {minutes < 10? "0" + minutes :  minutes}
              :
              {seconds < 10? "0" + seconds : seconds}</div>
            <button className={isFocus? "focusButton":"breakButton"} onClick={()=> setIsRunning(!isRunning)}>
              {isRunning? "Stop" : "Start" }
            </button>
        </div>
        </div>
    )
}
