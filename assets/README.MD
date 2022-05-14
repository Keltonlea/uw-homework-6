# 06 Server-Side APIs: Weather Dashboard



## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## About The Project

A web-based dashboard built to show the current weather in a city of choice and the upcoming five (5) day forecast for that city.

Enter in your city of choice and select search to view the current weather, temperature, humidity, wind speed, and UV Index for that city at the current time. Upon the search, the dashobard will also display the weather, temperature and hummidity forecast for the next five(5) days.

UV Index will be accompanied by a color indicating the severity of the index. Favorable is shown in green, Moderate is shown in yellow and severe is shown in red.

Previous searches are saved in localStorage and they are available as buttons in order for easy access and re-searching of weather and forecasts. Clear History will delete these buttons as well as local storage.

***

## Built With 
* JavaScript
* Bootstrap
* Jquery
* HTML
* CSS
* Open Weather APIs - Current Weather Data, UV Index and 5 day/ 3 Hour Forecast
* Google Fonts

***

##Website

https://keltonlea.github.io/uw-homework-6/

![Homework 1 Screenshot](./assets/homework-6-screenshot.png?raw=true "Weather Dashboard")