package com.example.rest_service.controllers;

import com.example.rest_service.dto.WeatherInfo;
import com.example.rest_service.services.WeatherService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/controller")
public class Weather {

  private final WeatherService weatherService;

  public Weather(WeatherService weatherService) {
    this.weatherService = weatherService;
  }

  @GetMapping("/greeting")
  @CrossOrigin(origins = "http://weather.time:3000")
  public WeatherInfo getWeatherInfoByCode(@RequestParam(value = "code", defaultValue = "no") String cityName,
                                          HttpServletRequest request){
    // Получаем информацию о запросе
    String origin = request.getHeader("Origin");
    String clientIp = request.getRemoteAddr();
    String userAgent = request.getHeader("User-Agent");

    System.out.println("Запрос был.");
    System.out.println("Origin: " + origin);
    System.out.println("Client IP: " + clientIp);
    System.out.println("User-Agent: " + userAgent);
    return weatherService.getForecast(cityName);
  }
}
