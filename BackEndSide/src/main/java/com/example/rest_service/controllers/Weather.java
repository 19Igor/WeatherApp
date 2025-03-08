package com.example.rest_service.controllers;

import com.example.rest_service.dto.WeatherInfo;
import com.example.rest_service.services.WeatherService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/controller")
public class Weather {

  private final WeatherService weatherService;

  public Weather(WeatherService weatherService) {
    this.weatherService = weatherService;
  }

  @GetMapping("/greeting")
  @CrossOrigin(origins = "http://localhost:3333")
  public WeatherInfo getWeatherInfoByCode(@RequestParam(value = "code", defaultValue = "no") String cityName){
    System.out.println("Запрос был.");
    return weatherService.getForecast(cityName);
  }


}
