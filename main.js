//cursor code starts here
const dot = document.querySelector("[data-cursor-dot]");
const outline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", (e)=> {
     const posX = e.clientX;
     const posY = e.clientY;
     dot.style.left = `${posX}px`;
     dot.style.top = `${posY}px`;
     outline.animate({top:`${posY}px`, left:`${posX}px`}, {duration: 200, fill: "forwards"});
});

//clock
let clock = document.querySelector("p");
setInterval( function() {
     let time = new Date();
     clock.innerHTML = time.toLocaleTimeString();
}, 1000);

//stopwatch
let milisecondsPassed = 0;
let interval = null;
let time = document.querySelector(".time");

function padstart(value){
     return String(value).padStart(2, "0");
};

function setTime(){
     let hour = Math.floor(milisecondsPassed / 3600000);
     let minutes = Math.floor(milisecondsPassed % 3600000 / 60000);
     let seconds = Math.floor(milisecondsPassed % 60000 / 1000);
     let miliseconds = milisecondsPassed % 1000;
     time.innerHTML = `${hour}:${padstart(minutes)}:${padstart(seconds)}:${String(miliseconds).padStart(3, "0")}`;
};

function timer(){
     milisecondsPassed+=10;
     setTime();
};

function startclock(){
     if (interval) {
          pauseclock();
     }
     else {
          document.querySelector(".stopwatch-btn1").style.display = "none";
          document.querySelector(".stopwatch-btn12").style.display = "flex";
          interval = setInterval(timer, 10);
     }
};

function pauseclock(){
     clearInterval(interval);
     interval = null;
     document.querySelector(".stopwatch-btn12").style.display = "none";
     document.querySelector(".stopwatch-btn1").style.display = "flex";
};

function restartclock(){
     pauseclock();
     milisecondsPassed = 0;
     setTime();
};

let stopwatch = document.querySelector(".stopwatch");
let first = "true";
stopwatch.addEventListener("click", () => {

     if(first === "true"){
     document.querySelector(".h1").style.display = "none";
     document.querySelector(".h2").style.display = "block";
     document.querySelector(".container1").style.display = "none";
     document.querySelector(".container2").style.display = "flex";
     stopwatch.innerHTML = "CLOCK";
     first = "false";
     }

     else if (first === "false"){
     document.querySelector(".h1").style.display = "block";
     document.querySelector(".h2").style.display = "none";
     document.querySelector(".container1").style.display = "flex";
     document.querySelector(".container2").style.display = "none";
     stopwatch.innerHTML = "STOPWATCH";
     first = "true";
     };
});