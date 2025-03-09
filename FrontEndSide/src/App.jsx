import { TimeSection } from "./components/TimeComponent";
import { Image } from "./components/Image";
import { FetchWeather } from "./components/WeatherDataProvider"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Image></Image>
      <TimeSection></TimeSection>
      <Router>
        <Routes>
          <Route path="/:city" element={<FetchWeather />} />
          <Route path="/" element={<div>Please enter a city in the URL</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;