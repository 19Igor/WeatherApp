import React from "react";
import { useState, useEffect } from "react";
import "./TimeComponent.css"


export function TimeSection() {
  const [currentTime, setCurrentTime] = useState(new Date());

  document.title = "You're not able to controll weather but you can controll your life.";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());

      return () => clearInterval(timer);
    }, 1000);
  }, []);

  const displayDate = (data: Date) => {
    return data.toLocaleDateString();
  };

  const displayTime = (data: Date) => {
    return data.toLocaleTimeString("ru-RU");
  };

  return (
    <div className="timeAndDate">
    {/* у страницы может быть только один уникальный h1 */}
      <h3>Current date:  {displayDate(currentTime)}</h3>
      <h3>Current time:  {displayTime(currentTime)}</h3>
    </div>
  );
}
