package com.example.rest_service.services;

import com.example.rest_service.dto.WeatherInfo;
import org.springframework.stereotype.Service;

@Service
public class WeatherService {
  private final String API_KEY = "8a5a57a2d79a7ebf0bd0ac91f92bf91f";
  private final String CITY = "NewYork";
  private final String URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + CITY
                            + "&units=metric&lang=ru&appid=" + API_KEY;
  private final OpenWeatherMap weatherMap;


  public WeatherService(OpenWeatherMap weatherMap) {
    this.weatherMap = weatherMap;
  }

  public WeatherInfo getForecast(String cityCode) {
    return weatherMap.getWeather(cityCode);
  }
}
