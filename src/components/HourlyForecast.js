import React from 'react';
import './HourlyForecast.css';

function HourlyForecast({ forecast }) {
    return (
        <div className="hourly-forecast">
            {forecast.map((hour, index) => (
                <div className="hour-card" key={index}>
                    <p>{new Date(hour.dt * 1000).toLocaleDateString()}</p> {/* تاریخ روز */}
                    <p>{new Date(hour.dt * 1000).getHours()}:00</p> {/* ساعت */}
                    <img
                        src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                        alt={hour.weather[0].description}
                    />
                    <p>{Math.round(hour.main.temp)}°C</p> {/* دمای واقعی */}
                    <p>Feels like: {Math.round(hour.main.feels_like)}°C</p> {/* دمای حس شده */}
                </div>
            ))}
        </div>
    );
}

export default HourlyForecast;
