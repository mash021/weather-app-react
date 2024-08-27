import React from 'react';
import WeatherIcon from './WeatherIcon';

function WeatherInfo({ data }) {
    return (
        <div id="weatherInfo">
            <h2 id="cityName">{data.name}</h2>
            <p id="temperature">{data.main.temp} °C</p>
            <p id="feelsLike">Feels like: {data.main.feels_like} °C</p>
            <p id="windSpeed">Wind Speed: {data.wind.speed} m/s</p>
            <WeatherIcon condition={data.weather[0].main.toLowerCase()} />
        </div>
    );
}

export default WeatherInfo;
