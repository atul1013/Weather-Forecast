
const apiKey = "1cac0a16ecca8a9a4fd1e2bf3ae4d0df";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

        const searchBox = document.querySelector(".container .searchBox input");
        const searchBtn = document.querySelector(".container .searchBox button");

        async function checkWeather(city){
        const response = await fetch(apiUrl + city + '&appid=1cac0a16ecca8a9a4fd1e2bf3ae4d0df');
        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".weather").innerHTML = data.weather[0].main;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
        }

        searchBtn.addEventListener("click", ()=>{
        checkWeather(city = searchBox.value);
        })
