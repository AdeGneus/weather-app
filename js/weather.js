class Weather {
    constructor(city) {
        this.apiKey = '3e2c416b8bd74b52952192814211603';
        this.city = city;
    }

    // fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

        const responseData = await response.json()

        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}