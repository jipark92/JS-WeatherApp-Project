(()=>{const e=document.querySelector(".search-location"),t=document.querySelector(".search-btn"),n=document.querySelector(".toggle-fahrenheit-btn"),o=document.querySelector(".location-name"),c=document.querySelector(".currently"),r=document.querySelector(".clouds"),l=document.querySelector(".feels-like"),a=document.querySelector(".humidity"),u=document.querySelector(".pressure"),i=document.querySelector(".wind"),d=document.querySelectorAll(".icons");t.addEventListener("click",(()=>{let t=e.value;""!==e.value&&null!==e&&(fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=88cfbde6ec14cc6b1ea870b1a0aaa9b5`,{mode:"cors"}).then((e=>e.json())).then((e=>{h(e),s(e)})).catch((()=>{alert("no location found")})),m())}));const m=()=>{d.forEach((e=>{e.style.visibility="visible"}))},s=e=>{let t=!0;n.addEventListener("click",(()=>{!0===t?(console.log(t),c.textContent=Math.round(e.main.temp-273)+"°C",l.textContent=Math.round(e.main.feels_like-273)+"°C",t=!1,console.log(t)):t||(h(e),t=!0)}))},h=e=>{let t=1*Math.round(e.main.temp-273)*1.8+32,n=1*Math.round(e.main.feels_like-273)*1.8+32;o.textContent=e.name+`, ${e.sys.country}`,c.textContent=Math.round(t)+"°F",r.textContent=e.weather[0].description,l.textContent=Math.round(n)+"°F",a.textContent=e.main.humidity+"%",u.textContent=e.main.pressure+"mb",i.textContent=e.wind.speed+"mph"}})();