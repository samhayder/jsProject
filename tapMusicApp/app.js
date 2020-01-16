window.addEventListener('load', ()=>{
    //DOM
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#1cbb87",
        "#f700ff",
        "#738c17",
        "#403535",
        "#59e6b7",
        "#3535ee"
    ]

    //Lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index)
        })
    })

    //Create Bubbles
    const createBubble = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.background = colors[index];
        bubble.style.animation = "jump 1s ease";
        //Stop animation for visual div
        bubble.addEventListener('animationend', function(){
            visual.removeChild(bubble);
        });
    }
})