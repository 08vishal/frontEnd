const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
var date = new Date();
   
    let hr=date.getHours();
    let min=date.getMinutes();
    
    let sec=date.getSeconds();


    let secPosition=sec*6;
    let minPosition=min*6+secPosition/60;
    let hrPosition=(hr*30)+(min/2);


function runClock(){

    hrPosition=hrPosition+(3/360);
    minPosition=minPosition+0.1;
    secPosition=secPosition+6;
    
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
 
}

var interval=setInterval(runClock,1000);