let weather = {
    apiKey: '6f1cd7092bd891624ef8cd58c8386af2',
    getWeather: function(weatherDestination) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${weatherDestination}&units=metric&appid=${this.apiKey}`
        )

        .then((response) => response.json())
        .then((weatherData) => this.displayWeather(weatherData));
        // .then((weatherData) => console.log(weatherData));
    }, 

// 6f1cd7092bd891624ef8cd58c8386af2 (I need to wait until the key is activated)
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// http://api.openweathermap.org/data/2.5/weather?q=Edinburgh&appid=6f1cd7092bd891624ef8cd58c8386af2
// http://api.openweathermap.org/data/2.5/weather?q=Edinburgh&units=metric&appid=6f1cd7092bd891624ef8cd58c8386af2 - converting units to celsius
// I got a JSON formatter Chrome extension to make things neater to see

    displayWeather: function(weatherData) {
        let { name } = weatherData;
        let { description, icon } = weatherData.weather[0];// JSON object "weather" contained an array so I'm taking position 1 here
        // console.log(weather.getWeather('Edinburgh'))
        let { temp, humidity } = weatherData.main;
        let { speed, wind } = weatherData.wind;
        // console.log(name, description, icon, temp, humidity, speed);

        document.querySelector('.weather-destination').textContent = `You searched for... ${name.toUpperCase()}`;
        document.querySelector('.weather-destination').style.color = 'lightGrey';


        document.querySelector('.weather-icon').src = `http://openweathermap.org/img/w/${icon}.png`;

        document.querySelector('.weather-temperature').textContent = `${temp}°C`;

        document.querySelector('.weather-description').textContent = description;
        document.querySelector('.weather-description').textContent = description[0].toUpperCase() + description.substring(1);

        document.querySelector('.humidity-level').textContent = `Humidity level: ${humidity}%`;
        document.querySelector('.wind-level').textContent = `Wind speed: ${wind, speed}km/h`;
    },
    searchWeather: function () {
        this.getWeather(document.querySelector('.search-box').value);
    },
};

document.querySelector('.search-box').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        weather.searchWeather();
    // } else {
    //         alert('Please enter a city name and then click search or press enter to view results.')
    }
});

document.querySelector('.search-area button').addEventListener('click', () => {
    weather.searchWeather();
});