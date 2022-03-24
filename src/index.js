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
    const minTemp = document.querySelector('.min-temp');
    const maxTemp = document.querySelector('.max-temp');
    const icons = document.querySelectorAll('.icons');

    const getWeather = (location) =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=88cfbde6ec14cc6b1ea870b1a0aaa9b5`, {mode: 'cors'})
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{

            locationName.textContent = response.name
            currently.textContent = Math.round(response.main.temp - 273) / 1 + "C";
            clouds.textContent = response.weather[0].description;
            feelsLike.textContent = Math.round(response.main.feels_like - 273) / 1 + "C";
            humidity.textContent = response.main.humidity;
            pressure.textContent = response.main.pressure + "mb";
            minTemp.textContent = Math.round(response.main.temp_min - 273) *  1 + "C";
            maxTemp.textContent = Math.round(response.main.temp_max - 273) * 1 + "C";

        })
        .catch(()=>{
            alert("no location found");
        })
    };
    
    const searchButton = () => {
        searchBtns.addEventListener('click',()=>{
            let locations = searchBar.value;
            if (searchBar.value === "" || searchBar === null){
                return
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
        toggleCelFahBtns.addEventListener('click',()=>{
            currently.textContent = Math.round(response.main.temp - 273) * 1 
            feelsLike.textContent = Math.round(response.main.feels_like - 273) * 1 
            minTemp.textContent = Math.round(response.main.temp_min - 273) *  1  
            maxTemp.textContent = Math.round(response.main.temp_max - 273) * 1 
        })
    }


})();
