import React from 'react';

function WeatherIcon({ condition }) {
    let iconClass = '';
    if (condition.includes('cloud')) {
        iconClass = 'cloudy';
    } else if (condition.includes('clear')) {
        iconClass = 'sunny';
    } else if (condition.includes('rain')) {
        iconClass = 'rainy';
    } else if (condition.includes('snow')) {
        iconClass = 'snowy';
    }

    return <div id="weatherIcon" className={iconClass}></div>;
}

export default WeatherIcon;
