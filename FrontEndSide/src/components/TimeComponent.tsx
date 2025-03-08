import React from "react";
import { useState, useEffect } from "react";

// cmd + shift + E

export function TimeSection() {
  const [currentTime, setCurrentTime] = useState(new Date());

  document.title = "It's my Life";

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
    <>
    {/* у страницы может быть только один уникальный h1 */}
      <h2>Current date {displayDate(currentTime)}</h2>
      <h2>Current time {displayTime(currentTime)}</h2>
    </>
  );
}
