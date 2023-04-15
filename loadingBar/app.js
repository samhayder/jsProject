const count = document.querySelector('.count');
const loadingBar = document.querySelector('.loading_bar_after');

let loadingStatus = 0;

function updateLoadingBar() {
   count.innerText = `${loadingStatus} %`;
   loadingBar.style.width = loadingStatus + '%'
   loadingStatus++;

   if (loadingStatus < 101) {
      setTimeout(updateLoadingBar, 300)
   }
}
updateLoadingBar();