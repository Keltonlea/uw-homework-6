  
var cities = [];

var searchCityButton=document.querySelector("#city-search-form");
var cityInput=document.querySelector("#city-input");
var weatherContainer=document.querySelector("#current-weather-container");
var citySearchInput = document.querySelector("#past-searches");
var forecastTitle = document.querySelector("#forecast");
var forecastContainerEl = document.querySelector("#fiveday-container");



var enterCity = function(event){
    event.preventDefault();
    var city = cityInput.value.trim();
    if(city){
        getCityWeather(city);
        get5Day(city);
        cities.unshift({city});
        cityInput.value = "";
    } else{
        alert("Please enter a City");
    }
    saveSearch();
   
}


var getCityWeather = function(city){
    var apiKey = "7d715b654cef2b609d1bec94b45d2c07"
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayWeather(data, city);
        });
    });
};

var displayWeather = function(weather, searchCity){
    //clear old content
    weatherContainer.textContent= "";  
    citySearchInput.textContent=searchCity;
 
    console.log(weather);
 
    //create date element
    var currentDate = document.createElement("span")
    currentDate.textContent=" (" + moment(weather.dt.value).format("MMM D, YYYY") + ") ";
    citySearchInput.appendChild(currentDate);
 
    //create an image element
    var weatherIcon = document.createElement("img")
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    citySearchInput.appendChild(weatherIcon);
 
    //create a span element to hold temperature data
    var temperature = document.createElement("span");
    temperature.textContent = "Temperature: " + weather.main.temp + " °F";
    temperature.classList = "list-group-item"
   
    //create a span element to hold Humidity data
    var humidity = document.createElement("span");
    humidity.textContent = "Humidity: " + weather.main.humidity + " %";
    humidity.classList = "list-group-item"
 
    //create a span element to hold Wind data
    var windSpeed = document.createElement("span");
    windSpeed.textContent = "Wind Speed: " + weather.wind.speed + " MPH";
    windSpeed.classList = "list-group-item"
 
    //append to container
    weatherContainer.appendChild(temperature);
 
    //append to container
    weatherContainer.appendChild(humidity);
 
    //append to container
    weatherContainer.appendChild(windSpeed);
 
    var lat = weather.coord.lat;
    var lon = weather.coord.lon;
    getUvIndex(lat,lon)
 }

var saveSearch = function() {
    
}
 





searchCityButton.addEventListener("submit", enterCity);
