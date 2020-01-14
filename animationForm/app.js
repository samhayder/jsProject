function animationForm(){
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', ()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;
            
            //Check user validation
            if(input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            }else if(input.type === "email" && validateEmail(input)){
                nextSlide(parent, nextForm)
            }else if(input.type === "password" && validateUser(input)){
                nextSlide(parent, nextForm)
            }else{
                parent.style.animation = "shake 0.5s ease";
            }
            //get rid of animation
            parent.addEventListener('animationend', () =>{
                parent.style.animation = ""
            })

        });
    });

};

//User Validation
function validateUser(user){
    if(user.value.length < 6){
        error('#c90707')
        console.log('Not enough characters!')
    }else{
        error("rgb(87, 189,130)")
        return true;
    }
}

// Email Validation
function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error("rgb(87, 189,130)")
        return true;
    }else{
        error('red')
    }
}

// Password Validation
function validatePassword(Password){

}

// Next Slide
function nextSlide(parent, nextForm){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

// Error 
function error(color){
    document.body.style.backgroundColor = color;
}



animationForm();