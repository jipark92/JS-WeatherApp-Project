(()=>{document.querySelector(".search-location"),document.querySelector(".search-btn");const e=document.querySelector(".location-name"),t=document.querySelector(".currently"),n=document.querySelector(".clouds"),o=document.querySelector(".feels-like"),c=document.querySelector(".humidity"),r=document.querySelector(".pressure"),m=document.querySelector(".min-temp"),a=document.querySelector(".max-temp");fetch("https://api.openweathermap.org/data/2.5/weather?q=washington&appid=88cfbde6ec14cc6b1ea870b1a0aaa9b5",{mode:"cors"}).then((e=>e.json())).then((u=>{console.log(u),e.textContent=u.name,t.textContent=u.main.temp,n.textContent=u.weather[0].description,o.textContent=u.main.feels_like,c.textContent=u.main.humidity,r.textContent=u.main.pressure,m.textContent=u.main.temp_min,a.textContent=u.main.temp_max}))})();