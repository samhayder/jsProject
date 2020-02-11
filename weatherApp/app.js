window.addEventListener('load', ()=>{
    let lat;
    let long;
    //Get DOM
    let timezone = document.querySelector('.timezone');
    let degree = document.querySelector('.degree');
    let description = document.querySelector('.temperature_description');
    let temperatureSection = document.querySelector('.temperature_degree_section');
    let symbol = document.querySelector('.symbol');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lat = position.coords.latitude;
            long = position.coords.longitude;
            //Set Proxy and API
            let proxy = "http://cors-anywhere.herokuapp.com/";
            let api = `${proxy}https://api.darksky.net/forecast/85bed7d6baeb2fc30b681a655fc6f34a/${lat},${long}`; 

            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data =>{
                    const {temperature, summary, icon} = data.currently;

                    timezone.textContent = data.timezone;
                    degree.textContent = temperature;
                    description.textContent = summary;
                    //Set Icon
                    setIcons(icon, document.querySelector('.icon'));
                    //Formula for Celsius
                    let celsius = (temperature - 32) * (5 / 9);
                    //Change Degree Symbol to Celsius/Fahrenheit
                    temperatureSection.addEventListener('click', ()=>{
                        if(symbol.textContent === "F"){
                            symbol.textContent = "C";
                            degree.textContent = Math.floor(celsius);
                        }else{
                            symbol.textContent = "F";
                            degree.textContent = temperature;
                        };
                    });
                });
        });
    };

    //Set Icon >> skycons.js
    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    };
});


/* let proxy = "http://cors-anywhere.herokuapp.com/";
let api = `${proxy}https://api.darksky.net/forecast/85bed7d6baeb2fc30b681a655fc6f34a/${lat},${long}`; */

//Icon
//https://darkskyapp.github.io/skycons/