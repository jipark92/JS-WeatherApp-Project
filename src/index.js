const weatherModule = (()=>{
    const searchBar = document.querySelector('.search-location');
    const searchBtns = document.querySelector('.search-btn');
    const toggleCelFahBtns = document.querySelector('.toggle-fahrenheit-btn');
    const locationName = document.querySelector('.location-name')
    const currently = document.querySelector('.currently');
    const clouds = document.querySelector('.clouds');
    const feelsLike = document.querySelector('.feels-like');
    const humidity = document.querySelector('.humidity');
    const pressure = document.querySelector('.pressure');
    const wind = document.querySelector('.wind');
    const icons = document.querySelectorAll('.icons');

    const getWeather = (location) =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=88cfbde6ec14cc6b1ea870b1a0aaa9b5`, {mode: 'cors'})
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            showInfo(response);
            defaultTemp(response);
            toggleFahrenheit(response);
        })
        .catch(()=>{
            alert("no location found");
        })
    };
    
    const searchButton = () => {
        searchBtns.addEventListener('click',()=>{
            let locations = searchBar.value;
            if (searchBar.value === "" || searchBar.value === null){
                return;
            } else {
                getWeather(locations);
                makeIconsVisible();
            }
        })
    };
    searchButton();

    const makeIconsVisible = () => {
        icons.forEach((icon)=>{
            icon.style.visibility = "visible";
        })
    };

    const toggleFahrenheit = (response) => {
        let toggle = true;
        toggleCelFahBtns.addEventListener('click',()=>{
            if (toggle) {
                currently.textContent = Math.round(response.main.temp - 273) + "°C";
                feelsLike.textContent = Math.round(response.main.feels_like - 273)  + "°C";
                toggle = false;
            } else if (!toggle){
                defaultTemp(response);
                toggle = true;
            }
        })
    };

    const defaultTemp = (response) => {
        let celCurrTemp = Math.round(response.main.temp - 273) * 1;
        let celFeelsLikeTemp = Math.round(response.main.feels_like - 273) * 1;
        let fahCurrTemp = celCurrTemp * (9/5) + 32;
        let fahFeelsLikeTemp = celFeelsLikeTemp * (9/5) + 32;

        currently.textContent = Math.round(fahCurrTemp) + "°F";
        feelsLike.textContent = Math.round(fahFeelsLikeTemp) + "°F";
    };

    const showInfo = (response) => {
        locationName.textContent = response.name + `, ${response.sys.country}`;
        clouds.textContent = response.weather[0].description;
        humidity.textContent = response.main.humidity + "%";
        pressure.textContent = response.main.pressure + "mb";
        wind.textContent = response.wind.speed + "mph";
    }

})();