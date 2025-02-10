function time()
{
const date=new Date();
let hours=date.getHours();//0-23
let minutes=date.getMinutes();//0-59
let seconds=date.getSeconds();//0-59

const h=document.getElementById("hours");
const m=document.getElementById("minutes");
const s=document.getElementById("seconds");

h.innerText=hours;
m.innerText=minutes;
s.innerText=seconds;

setTimeout(time,1000);
}

time();