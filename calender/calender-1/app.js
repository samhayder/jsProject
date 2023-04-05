const monthEl = document.querySelector('.info h2');
const fullDateEl = document.querySelector('.info p');
const daysEl = document.querySelector('.days');

const months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December"
]


function calender () {
   const monthIndex = new Date().getMonth();

   //info part change dynamically content
   monthEl.innerText = months[monthIndex];
   fullDateEl.innerText = new Date().toDateString();

   //include days dynamically 
   const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 6;
   const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();

   let days = " ";

   //show Empty days box
   for (let i = firstDay; i > 0; i--) {
      days += `<div class="empty"></div>`
   }

   //show days number list
   for (let i = 1; i <= lastDay; i++){
      if (i === new Date().getDate()) {
         days += `<div class="today">${i}</div>`
      } else {
         days += `<div>${i}</div>`
      }
   }

   daysEl.innerHTML = days;
}
calender();