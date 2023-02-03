import React from "react";
import { useState, useEffect } from "react";

export default function Painel({duration}){

    const [time,setTime] = useState(duration);
    const [isRunning,setIsRunning] = useState(false);
    const [intervalId,setIntervalId] = useState(null);

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    useEffect(() =>{
        if (isRunning) {
            const id = setInterval(() => {
              if(time===0){
                
                setTime(duration)
                setIsRunning(false)
                console.log("acabou")
                console.log(duration)
              }else{
                setTime(time-1)
              }
            }, 1000);
            setIntervalId(id);
          } else {
            clearInterval(intervalId);
          }
          return () => clearInterval(intervalId);
    },[isRunning,duration,time])
    

    return(
        <div>
            <div className="timer">
                {minutes < 10? "0" + minutes :  minutes}
                :
                {seconds < 10? "0" + seconds : seconds}</div>
            <button onClick={()=> setIsRunning(!isRunning)}>
                {isRunning? "Stop" : "Start" }
            </button>
        </div>
    )
}
