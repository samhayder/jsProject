const calenderWrapper = document.querySelector('.calender_wrapper');
const monthPiker = document.querySelector('.month_piker');
const yearPiker = document.querySelector('.year_change');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const daysList = document.querySelector('.days_list');
const darkMode = document.querySelector('.dark_mode_wap');

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

function initCalender() {
   const date = new Date();
   const month = date.getMonth();
   const year = date.getFullYear();

   const firstDay = new Date(year, month, 1).getDay() - 6;
   const lastDay = new Date(year, month + 1, 0).getDate();

   monthPiker.innerText = months[month];
   yearPiker.innerText = year;

   let days = " ";

   //first day
   for (let i = firstDay; i > 0; i--) {
      days += `<div></div>`
   }

   //last day
   for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDay()) {
         days += `<div class="today">${i}</div>`
      } else {
         days += `<div>${i}</div>`
      }
   }

   daysList.innerHTML = days;
}

initCalender();

//Change Dark Mode setting
darkMode.addEventListener('click', () => {
   const changeMode = document.querySelector('.change_mode');

   calenderWrapper.classList.toggle('dark');
   changeMode.classList.toggle('change_mode_toggle');


})