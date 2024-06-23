document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const cityInput = document.getElementById('cityInput');
    const weatherResult = document.getElementById('weatherResult');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const conditions = document.getElementById('conditions');
    const weatherIcon = document.getElementById('weatherIcon');

    searchButton.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            fetchWeather(city);
        } else {
            alert('Please enter a city name');
        }
    });

    const fetchWeather = (city) => {
        const apiKey = 'a33d39cefa7428384f955474dd3dd40a'; // Your OpenWeatherMap API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    cityName.textContent = data.name;
                    temperature.textContent = `Temperature: ${data.main.temp}°C`;
                    conditions.textContent = `Conditions: ${data.weather[0].description}`;
                    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                    weatherResult.classList.remove('hidden');
                } else {
                    alert('City not found');
                }
            })
            .catch(error => console.error('Error fetching the weather data:', error));
    };
});
