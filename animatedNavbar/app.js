let sections = document.querySelectorAll('section');
let bubble = document.querySelector('.bubble');
let gradients = [
    "linear-gradient(to right, #642b73, #c6426e)",
    "linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb)",
    "linear-gradient(to right, #ff5e62, #ff9966)"
];

const options = {
    threshold: 0.8
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            left: coords.left,
            top: coords.top
        };

        if(entry.isIntersecting){
            bubble.style.setProperty('height', `${directions.height}px`),
            bubble.style.setProperty('width', `${directions.width}px`),
            bubble.style.setProperty('left', `${directions.left}px`),
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.background = gradients[gradientIndex]
        }
        
    })
}

sections.forEach(section => {
    observer.observe(section)
})