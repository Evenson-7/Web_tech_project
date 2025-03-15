import React, { useState, useEffect } from "react";
import axios from "axios";
import clear_icon from '../assets/clear.png';
import drizzle_icon from '../assets/drizzle.png';
import cloud_icon from '../assets/cloud.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=12.9688&longitude=123.9901&current_weather=true`
      );
      setWeather(response.data.current_weather);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case 1:
        return clear_icon;
      case 2:
        return drizzle_icon;
      case 3:
        return cloud_icon;
      case 4:
        return rain_icon;
      default:
        return cloud_icon;
    }
  };

  const getWeatherDescription = (temperature, windspeed) => {
    if (windspeed > 10) {
      return "It's quite windy, stay warm!";
    } else if (temperature > 30) {
      return "It's a hot and sunny day!";
    } else if (temperature < 20) {
      return "It's a bit chilly, bring a jacket!";
    } else {
      return "It's a calm and warm day.";
    }
  };

  return (
    <div className="w-full h-[185px] bg-white rounded-lg shadow-lg p-6 flex flex-row items-center justify-between">
      {weather ? (
        <>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Weather</h2>
            <h3 className="text-lg font-semibold text-gray-800">Sorsogon</h3>
            <img
              src={getWeatherIcon(weather.weathercode)}
              alt="weather icon"
              className="w-16 h-16"
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-gray-800">{weather.temperature}°C</p>
            <p className="text-gray-600 text-sm mt-1 italic">{getWeatherDescription(weather.temperature, weather.windspeed)}</p>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-gray-600 text-sm flex items-center">
              <img src={humidity_icon} alt="Humidity" className="w-5 h-5 mr-2" />
              {weather.humidity}%
            </p>
            <p className="text-gray-600 text-sm flex items-center">
              <img src={wind_icon} alt="Wind" className="w-5 h-5 mr-2" />
              {weather.windspeed} m/s
            </p>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600 w-full">Loading weather data...</div>
      )}
    </div>
  );
};

export default Weather;
