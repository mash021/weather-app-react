import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherInfo from './components/WeatherInfo';
import HourlyForecast from './components/HourlyForecast';
import './App.css';

function App() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [hourlyData, setHourlyData] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    const apiKey = 'dcca88c1d3058755e260b43515773103'; // کلید API خود را اینجا وارد کنید

    useEffect(() => {
        if (city.length >= 3) { // فقط وقتی طول ورودی به 3 حرف رسید
            const url = `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${apiKey}`;

            axios.get(url)
                .then(response => {
                    if (response.data.list) {
                        setSuggestions(response.data.list);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            setSuggestions([]);
        }
    }, [city]);

    useEffect(() => {
        if (selectedCity) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=${apiKey}`;
            const hourlyUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&units=metric&appid=${apiKey}`;

            axios.get(url)
                .then(response => {
                    if (response.data.cod === '404') {
                        alert('City not found');
                        return;
                    }
                    setWeatherData(response.data);
                })
                .catch(error => {
                    alert('An error occurred');
                    console.error(error);
                });

            axios.get(hourlyUrl)
                .then(response => {
                    if (response.data.cod === '404') {
                        return;
                    }
                    setHourlyData(response.data.list.slice(0, 12)); // نمایش 12 ساعت پیش‌بینی (3 ساعتی)
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [selectedCity]);

    const handleSuggestionClick = (cityName) => {
        setSelectedCity(cityName);
        setCity(cityName);
        setSuggestions([]);
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
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.id}
                            onClick={() => handleSuggestionClick(suggestion.name)}
                        >
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}
            {weatherData && <WeatherInfo data={weatherData} />}
            {hourlyData.length > 0 && <HourlyForecast forecast={hourlyData} />}
        </div>
    );
}

export default App;
