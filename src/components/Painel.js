import React, { useRef } from "react";
import { useState, useEffect } from "react";

export default function Painel({focusTime,breakTime}){

    const audioRef = useRef(null);

    const [time,setTime] = useState(focusTime);
    const [isRunning,setIsRunning] = useState(false);
    const [intervalId,setIntervalId] = useState(null);
    const [isFocus,setIsFocus] = useState(true) 

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    useEffect(()=>{
      if(isRunning){
        audioRef.current.play();
      }else{
        audioRef.current.pause();
      }
    },[isRunning])

    useEffect(() =>{
        if (isRunning) {
            const id = setInterval(() => {
              if(time===0){
                if(isFocus){
                  setIsFocus(false)
                  setTime(breakTime)
                }else{
                  setIsFocus(true)
                  setTime(focusTime)
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
    },[isRunning,time,isFocus,focusTime,breakTime])
    

    return(
      <div className="painel">
        <div className={isFocus? "focus":"break"}>
            <audio
              ref={audioRef}
              src="./assets/sounds/clock_tick.mp3"
              loop></audio>
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
