import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { urls } from '../constants';
import "./WeatherDataProvider.css"


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
	
	const params = useParams();
	const city = params.city;

	useEffect(() => {
		const fetchWeather = async () => {
		  try {
			const response = await axios.get(urls.server, {
			  params: {
				code: city
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
	}, [city]);
  
	if (loading) {
	  return <div>Loading...</div>;
	}
  
	if (error) {
	  return <div>Error: {error}</div>;
	}
	return (
		<div className="weatherInfo">
		  <h2 className="h2Header">Weather in {city}</h2>
		  {weatherInfo ? (
			<div>
			  <p>Temperature: {weatherInfo.temperature}°C</p>
			  <p>Feels like:  {weatherInfo.feelLikeTemp}°C</p>
			  <p>Clouds:      {weatherInfo.clouds}</p>
			  <p>Wind speed:  {weatherInfo.windSpeed} m/s</p>
			</div>
		  ) : (
			<p>No weather data available</p>
		  )}
		</div>
	);
};
