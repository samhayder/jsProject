const containerEl = document.querySelector('.container');


window.addEventListener('mousemove', (event) => {
   containerEl.innerHTML = `
   <div class="mouse_event">
      <h4>Mouse X(Vertical) position(px)</h4>
      <p>${event.clientX}</p>
   </div>
   <div class="mouse_event">
      <h4>Mouse Y(Horizontal) position(px)</h4>
      <p>${event.clientY}</p>
   </div>`
})