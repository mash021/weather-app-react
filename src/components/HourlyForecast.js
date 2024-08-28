import React from 'react';
import Slider from 'react-slick';
import './HourlyForecast.css';

function HourlyForecast({ forecast }) {
    const settings = {
        dots: false, // غیرفعال کردن نقطه‌های نشان‌دهنده
        infinite: true,
        speed: 500,
        slidesToShow: 3, // تعداد اسلایدهای نمایش داده شده در هر بار
        slidesToScroll: 1,
        autoplay: true, // فعال کردن پخش خودکار
        autoplaySpeed: 3000, // سرعت تغییر اسلایدها (بر حسب میلی‌ثانیه)
    };

    return (
        <div className="hourly-forecast">
            <Slider {...settings}>
                {forecast.map((hour, index) => (
                    <div className="forecast-item" key={index}>
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
            </Slider>
        </div>
    );
}

export default HourlyForecast;
