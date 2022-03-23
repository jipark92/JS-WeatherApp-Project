const weatherModule = (()=>{
    const searchBar = document.querySelector('.search-location');
    const searchBtns = document.querySelector('.search-btn');
    
    const locationName = document.querySelector('.location-name')
    const currently = document.querySelector('.currently');
    const clouds = document.querySelector('.clouds');
    const feelsLike = document.querySelector('.feels-like');
    const humidity = document.querySelector('.humidity');
    const pressure = document.querySelector('.pressure');
    const minTemp = document.querySelector('.min-temp');
    const maxTemp = document.querySelector('.max-temp');

    const getWeather = (location) =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=88cfbde6ec14cc6b1ea870b1a0aaa9b5`, {mode: 'cors'})
        .then((response)=>{
            return response.json()
        })
        .then((response)=>{
            locationName.textContent = response.name;
            currently.textContent = response.main.temp;
            clouds.textContent = response.weather[0].description;
            feelsLike.textContent = response.main.feels_like;
            humidity.textContent = response.main.humidity;
            pressure.textContent = response.main.pressure;
            minTemp.textContent = response.main.temp_min;
            maxTemp.textContent = response.main.temp_max;
            console.log('clicked')
        })
    };
    
    const searchButton = () => {
        searchBtns.addEventListener('click',()=>{
            let locations = searchBar.value;
            getWeather(locations);
        })
    }
    searchButton();

    return {};
})();
