import React from 'react';
import { speak } from '../textToSpeech'; // فرض کنید فایل textToSpeech.js در پوشه بالا قرار دارد

function WeatherInfo({ data }) {
    const { name, main } = data;
    const temperature = Math.round(main.temp);
    const feelsLike = Math.round(main.feels_like);

    const handleReadAloud = () => {
        let message = `The weather in ${name} is ${temperature} degrees Celsius.`;
        if (feelsLike > temperature + 5) {
            message += ` It feels hotter than it is. Remember to stay hydrated!`;
        } else if (feelsLike < temperature - 5) {
            message += ` It feels colder than it is. Make sure to dress warmly!`;
        } else {
            message += ` The weather feels just right. Enjoy your day!`;
        }
        speak(message);
    };

    return (
        <div className="weather-info">
            <h2>{name}</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Feels like: {feelsLike}°C</p>
            <button onClick={handleReadAloud}>Read Aloud</button>
        </div>
    );
}

export default WeatherInfo;
