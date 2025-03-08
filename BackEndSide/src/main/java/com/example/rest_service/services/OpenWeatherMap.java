package com.example.rest_service.services;


import com.example.rest_service.dto.WeatherInfo;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@Service
public class OpenWeatherMap{
  private final String API_KEY = "8a5a57a2d79a7ebf0bd0ac91f92bf91f";
  private final String DOMAIN = "http://api.openweathermap.org/data/2.5/weather?q=";
  private final String DOMAIN_PART = "&appid=";
  private final String DOMAIN_END = "&units=metric";

  public WeatherInfo getWeather(String cityName) {
    String urlString = createURL(cityName);

    try {
      URL url = new URL(urlString);
      HttpURLConnection connection = (HttpURLConnection) url.openConnection();
      connection.setRequestMethod("GET");

      BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
      String inputLine;
      StringBuilder content = new StringBuilder();
      while ((inputLine = in.readLine()) != null) {
        content.append(inputLine);
      }
      in.close();
      connection.disconnect();

      double temp = getTemperature(content.toString());
      double feelLikeTemperature = getFeelLikeTemperature(content.toString());
      String clouds = getCloudInfo(content.toString());
      double windSpeed = getWindSpeed(content.toString());
      return assembleWeatherInfo(temp, feelLikeTemperature, clouds, windSpeed);

    } catch (Exception e) {
      e.printStackTrace();
    }

    return null;
  }

  public WeatherInfo assembleWeatherInfo(double temperature, double feelLikeTemperature, String clouds, double windSpeed){
    return new WeatherInfo(temperature, feelLikeTemperature, clouds, windSpeed);

    //    return "Температура: " + temperature + "\n"+
//            "Ощущение температуры: " + feelLikeTemperature + "\n" +
//            "Облочность: " + clouds + "\n" +
//            "Скорость ветра: " + windSpeed;
  }

  private double getWindSpeed(String content) {
    JSONObject obj = new JSONObject(content);
    JSONObject wind = obj.getJSONObject("wind");
    return wind.getDouble("speed");
  }

  private String getCloudInfo(String content){
    JSONObject obj = new JSONObject(content);
    JSONArray weather = obj.getJSONArray("weather");
    JSONObject mainObj = weather.getJSONObject(0);
    return mainObj.getString("main");
  }

  private double getFeelLikeTemperature(String content) {
    JSONObject obj = new JSONObject(content);
    JSONObject main = obj.getJSONObject("main");
    return main.getDouble("feels_like");
  }

  private double getTemperature(String content){
    JSONObject obj = new JSONObject(content);
    JSONObject main = obj.getJSONObject("main");
    return main.getDouble("temp");
  }

  private String createURL(String city){
    return DOMAIN + city + DOMAIN_PART + API_KEY + DOMAIN_END;
  }
}
