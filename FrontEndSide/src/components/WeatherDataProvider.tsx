import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

interface WeatherInfo {
	temperature: number;
	feelLikeTemp: number;
	clouds: string;
	windSpeed: number;
}

export function FetchWeather() {
	const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	// http://weather.time:8080/controller/greeting
	useEffect(() => {
		const fetchWeather = async () => {
		  try {
			const response = await axios.get('http://localhost:8080/controller/greeting', {
			  params: {
				code: 'Novosibirsk'
			  }
			});
			setWeatherInfo(response.data);
			setLoading(false);
		  } catch (err) {
			setError(err.message);
			setLoading(false);
		  }
		};
		
		fetchWeather();
	}, []);
  
	if (loading) {
	  return <div>Loading...</div>;
	}
  
	if (error) {
	  return <div>Error: {error}</div>;
	}
	return (
		<div>
		  <h1>Weather in Novosibirsk</h1>
		  {weatherInfo ? (
			<div>
			  <p>Temperature: {weatherInfo.temperature}°C</p>
			  <p>Feels like: {weatherInfo.feelLikeTemp}°C</p>
			  <p>Clouds: {weatherInfo.clouds}</p>
			  <p>Wind speed: {weatherInfo.windSpeed} m/s</p>
			</div>
		  ) : (
			<p>No weather data available</p>
		  )}
		</div>
	);
};
