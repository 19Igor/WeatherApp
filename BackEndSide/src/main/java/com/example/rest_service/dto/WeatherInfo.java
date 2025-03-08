package com.example.rest_service.dto;

public record WeatherInfo(double temperature,
                          double feelLikeTemp,
                          String clouds,
                          double windSpeed) {}
