import { TimeSection } from "./components/TimeComponent";
import { Image } from "./components/Image";
import { FetchWeather } from "./components/WeatherDataProvider"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";


// http://weather.time:3000/Novosibirsk

function App() {
  return (
    <div className="center-container">
      <Image></Image>
      <TimeSection></TimeSection>
      
      
      <Router>
        <Routes>
          <Route path="/:city" element={<FetchWeather />} />
          <Route path="/" element={<span>Please enter a city in the URL</span>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;