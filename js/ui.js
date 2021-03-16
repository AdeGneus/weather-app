class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
        this.gust = document.getElementById('w-gust');
    }

    displayWeather(weather) {
        this.location.textContent = `${weather.location.region}, ${weather.location.country}`;
        this.desc.textContent = weather.current.condition.text;
        this.temp.textContent = `${weather.current.temp_f} F (${weather.current.temp_c} C)`;
        this.icon.setAttribute('src', `https:${weather.current.condition.icon}`);
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_f} F (${weather.current.feelslike_c} C)`;
        this.pressure.textContent = `Pressure: ${weather.current.pressure_in} in (${weather.current.pressure_mb} mb)`;
        this.wind.textContent = `Wind: ${weather.current.wind_kph} kph (${weather.current.wind_mph} mph), Wind Direction: ${weather.current.wind_dir}`;
        this.gust.textContent = `Gust: ${weather.current.gust_kph} kph (${weather.current.gust_mph} mph)`;
    }
}