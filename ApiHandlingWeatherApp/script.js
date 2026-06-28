document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherbtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById('weather-info');
    const cityName = document.getElementById('city-name');
    const temprature = document.getElementById('temprature');
    const description = document.getElementById('description');
    const errorMessage = document.getElementById("error-msg");
    const API_KEY = '5f56d525d1619d0a2cd2eac4ce55588e';

    getWeatherbtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        if (errorMessage) errorMessage.classList.add('hidden');
        if (weatherInfo) weatherInfo.classList.add('hidden');

        try {
            const weatherData = await fetchWeatherInfo(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error("Error fetching weather Data", error);
            showError();
        }
    });

    async function fetchWeatherInfo(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} - ${response.statusText}`);
        }
        return await response.json();
    }

    function displayWeatherInfo(displayData) {
        const { name, main, weather } = displayData; 
        
        if (cityName) cityName.textContent = name;
        if (temprature) temprature.textContent = `Temperature: ${main.temp}°C`;
        if (description) description.textContent = `Description: ${weather[0].description}`;
        
        if (weatherInfo) {
            weatherInfo.classList.remove('hidden');
        }
    }

    function showError() {
        if (errorMessage) {
            errorMessage.classList.remove('hidden');
        }
    }
});