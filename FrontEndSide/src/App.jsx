import { TimeSection } from "./components/TimeComponent";
import { Image } from "./components/Image";
import { Controller } from "./components/Controller"
import { FetchWeather } from "./components/WeatherDataProvider"

function App() {
  return (
    <div>
      <Image></Image>
      <TimeSection></TimeSection>
      {/* <Controller></Controller> */}
      <FetchWeather></FetchWeather>
    </div>
  );
}

export default App;