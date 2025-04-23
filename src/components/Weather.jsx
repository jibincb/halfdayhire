import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=6e837673dd604706abd71350231905&q=Kunnamkulam&aqi=no');
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error fetching weather data: {error.message}</div>;
  }

  if (!weather) {
    return null;
  }

  const { location, current } = weather;
  console.log(location)
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{location.name}, {location.country}</div>
          <p className="mt-2 text-gray-500"><strong>Temperature:</strong> {current.temp_c}°C ({current.temp_f}°F)</p>
          <p className="mt-2 text-gray-500"><strong>Feels Like:</strong> {current.feelslike_c}°C ({current.feelslike_f}°F)</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
