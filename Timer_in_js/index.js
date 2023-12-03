
let paused = false
let IntervalTimer;
// console.log(TargetDate, currentDate, gap)


const startTimer = ()=>{
   
let TargetDate = new Date("December 31, 2023 00:00:00").getTime()
let currentDate = new Date().getTime()
const gap = TargetDate - currentDate
const converted = gap / 1000;

let seconds = 1;
let minutes = seconds * 60;
let hours = minutes * 60;
let days = hours * 24;

    let myDays = Math.floor(converted/days)
    let myHr = Math.floor(converted / hours);
    let myMinute =  Math.floor((converted % hours) / minutes);
    let mySecond =  Math.floor(converted % minutes);

console.log(Math.floor(gap%days) / hours)
    document.querySelector(".day span").innerHTML = myDays
    document.querySelector(".hours span").innerHTML = myHr 
    document.querySelector(".min span").innerHTML =  myMinute
    document.querySelector(".seconds span").innerHTML = mySecond 

}


document.querySelector(".start button").addEventListener("click", ()=>{
IntervalTimer = setInterval(startTimer, 1000)
})

document.querySelector(".pause button").addEventListener("click", ()=>{
    paused = true
    clearInterval(IntervalTimer)
})

