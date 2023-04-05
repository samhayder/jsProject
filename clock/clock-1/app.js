const secondEl = document.getElementById('second');
const minuteEl = document.getElementById('minute');
const hourEl = document.getElementById('hour');
const hourDigital = document.querySelector('.hourDigital');
const minuteDigital = document.querySelector('.minuteDigital');
const secondDigital = document.querySelector('.secondDigital');
const ampmDigital = document.querySelector('.ampmDigital');

//updating Analog Clock
function updateAnalogClock () {
   const currentDate = new Date();

   const second = currentDate.getSeconds() * 6;
   const minute = currentDate.getMinutes() * 6;
   const hour = currentDate.getHours() * 30;

   secondEl.style.transform = `rotateZ(${second}deg)`;
   minuteEl.style.transform = `rotateZ(${minute}deg)`;
   hourEl.style.transform = `rotateZ(${hour}deg)`;
}
setInterval(updateAnalogClock);
      
// Digital Clock
function digitalClock () {
   let hour = new Date().getHours();
   let minute = new Date().getMinutes();
   let second = new Date().getSeconds();
   let am = (hour >= 12) ? "PM" : "AM";

   //convert 24hr clock to 12hr clock
   if (hour >= 12) {
      hour = hour - 12;
   }

   //add Zero before single digit number
   hour = (hour < 10) ? "0" + hour : hour;
   minute = (minute < 10) ? "0" + minute : minute;
   second = (second < 10) ? "0" + second : second;

   hourDigital.innerHTML = hour;
   minuteDigital.innerHTML = minute;
   secondDigital.innerHTML = second;
   ampmDigital.innerHTML = am;
}
digitalClock();