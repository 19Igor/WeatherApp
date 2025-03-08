import { useEffect, useState } from "react";
import React from "react";

interface User {
	id: number;
	title: string;
}

interface WeatherInfo {
  temperature: number;
  feelLikeTemperature: number;
  clouds: string;
  windSpeed: number;
}

// переименовать
// удали это нахер
export function Controller() {
  const defaultValue = [];
  const [weatherInfo, setweatherInfo] = useState(defaultValue);

  const url = "http://weather.time:8080/controller/greeting?code=Novosibirsk"
  const url2 = "http://localhost:4000/controller/greeting?code=Novosibirsk";
  const url3 = "http://localhost:8080/controller/greeting?code=Novosibirsk";

  const getApiData = async () => {
    const response = await fetch(url).then((response) =>
      response.json()
    );

    setweatherInfo(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  //  перед тем, как запускать запустить приложение, нужно запустить postman, потому что там mock server
  return (
    <div className="app">
      {weatherInfo.map((user: User, i) => (
          <div className="item-container" key={i}>
            Id:{user.id} <div className="title" key={i}>Title:{user.title}</div>
          </div>
        ))}
    </div> 
  );
}
