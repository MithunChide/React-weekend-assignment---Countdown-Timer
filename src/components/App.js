import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 


const [inputTime,setInputTime] = useState(0);
const[timerId,setTimerId]= useState(0);

const countDownTimer = (e)=>{
  if(e.which !== 13)
  return ;
  clearInterval(timerId);
  setInputTime(0);
  let input = document.getElementById("timerCount").value;
  input = Number(input);
  input = Math.floor(input)
  if(input === "0" || input === "" || input <=0 || isNaN(input))
  return;
  setInputTime(input);
  setTimerId(setInterval(()=>{
    setInputTime((prev) => prev-1);
  },1000));

};
useEffect (()=>{
  if(inputTime<0){
    clearInterval(timerId);
    setInputTime(0);
  }
},[inputTime]);

useEffect(()=>{
  return ()=>{
    clearInterval(timerId);
  }
},[]);


  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={(e)=>{countDownTimer(e)}} />{""} sec.
        </h1>
      </div>
      <div id="current-time">{/* remaining time */ inputTime}</div>
    </div>
  )
}


export default App;
