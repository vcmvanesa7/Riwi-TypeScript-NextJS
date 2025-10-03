import { Weather } from "@/dto/typeWeather";
import { useState } from "react";

export default function WeatherPage() {
  const [weather, setWeather] = useState<Weather | "">("");
  const [message, setMessage] = useState("");

  const weatherControll = () => {
    switch (weather) {
      case "rainy": {
        setMessage("Take your umbrella");
        break;
      }

      case "cloudy": {
        setMessage("It might rain, take your umbrella just in case");
        break;
      }

      case "sunny": {
        setMessage("Wear your sunglasses");
        break;
      }

      default: {
        setMessage("Please enter a valid weather: rainy, sunny or cloudy");
        break;
      }
    }
  };

  return (
    <div>
      <h1>WEATHER APP</h1>
      <input
        type="text"
        placeholder="Write rainy, sunny or cloudy"
        value={weather}
        onChange={(e) => setWeather(e.target.value as Weather)}
      />
      <button onClick={weatherControll}>Watch Message</button>
      <p>{message}</p>
    </div>
  );
}
