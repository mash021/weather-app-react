import React, { useState } from 'react';
import WeatherInfo from './components/WeatherInfo';
import './App.css';

function App() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const apiKey = 'dcca88c1d3058755e260b43515773103'; // کلید API خود را اینجا وارد کنید

    const fetchWeather = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    alert('City not found');
                    return;
                }
                setWeatherData(data);
            })
            .catch(error => {
                alert('An error occurred');
                console.error(error);
            });
    };

    return (
        <div className="container">
            <h1>Weather App</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {weatherData && <WeatherInfo data={weatherData} />}
        </div>
    );
}

export default App;
