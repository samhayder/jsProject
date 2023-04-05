//Selecting DOM Element
const dateInfo = document.querySelector('.left_display p'),
   leftAngle = document.querySelector('.left_angle'),
   rightAngle = document.querySelector('.right_angle'),
   daysEl = document.querySelector('.days');

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

   let date = new Date();
   let month = date.getMonth();
   let year = date.getFullYear();

function initCalender () {
   const firstDay = new Date(year, month, 1);
   const lastDay = new Date(year, month + 1, 0);
   const day = firstDay.getDay();
   const nextDay = 7 - lastDay.getDay()  -1 ;

   const prevLastDay = new Date(year, month, 0);
   const prevDays = prevLastDay.getDate();

   let days = " ";

   //show left display
   dateInfo.innerText = months[month] + " " + year;

   //show first day
   for (let i = day; i > 0; i--) {
      days += `<div class="pre_date">${prevDays - i + 1}</div>`;
   }
   //show last day
   for (let i = 1; i <= prevDays; i++) {
      if (i === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
         days += `<div class="today">${i}</div>`
      } else {
         days += `<div>${i}</div>`
      }
   }
   //show next day
   for (let i = 1; i <= nextDay; i++) {
      days += `<div class="next_date">${i}</div>`
   }
   daysEl.innerHTML = days;
}

//Previous Month
function previousMonth () {
   month--
   if (month < 0) {
      month == 11;
      year--;
   }
   initCalender();
}

//Next Month
function nextMonth () {
   month++
   if (month > 11) {
      month == 0;
      year++
   }
   initCalender();
}

//set add-event listening on left and right angle
leftAngle.addEventListener('click', previousMonth);
rightAngle.addEventListener('click', nextMonth);

initCalender();