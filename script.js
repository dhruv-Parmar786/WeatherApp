const apiKey = "06610b254af35ceb90e4a427d676846c"; //863242cfb2b1d357e6093d9a4df19a4b
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".wheather-icon");


async function cheakWheather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error p").style.display = "block"
        document.querySelector(".wheather").style.display = "none";
    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "./images/snow.png"
        }

        document.querySelector(".wheather").style.display = "block";
        document.querySelector(".error p").style.display = "none"
    }
}

searchBtn.addEventListener("click", () => {
    cheakWheather(searchBox.value);
})