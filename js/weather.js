const API_KEY = "05800e7c45d4b6d3cc836d97f580dd4e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const lang = 'kr';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.getElementById("js-temp");
        const city = document.getElementById("js-place");
        const iconImg = document.querySelector("#weather img");
        const icon = data.weather[0].icon;
        const weatherIconAdrs = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        city.innerText = data.name;
        weather.innerText = `날씨는 ${data.weather[0].main} / 현재 온도는 ${data.main.temp}`;
        iconImg.setAttribute('src', weatherIconAdrs);

    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

