import Header from "./components/Header";
import WeatherApp from "./components/WeatherApp";
import body_bg from "./assets/images/body-bg.png";
import { useEffect } from "react";

function App() {
  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

  // const getWeatherInfo = async (location : string) => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  // getWeatherInfo('dhaka');

  useEffect(() => {
    const getWeatherInfo = async (location: string) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log({
          description: data.weather[0].description,
          city: data.name,
          tempMax: data.main.temp_max,
          tempMin: data.main.temp_min,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          clouds: data.clouds.all,
          wind: data.wind.speed,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getWeatherInfo("dhaka");
  }, []);

  return (
    <>
      <div
        className="min-h-screen bg-body bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${body_bg})` }}
      >
        <Header></Header>

        <main className="min-h-screen grid place-items-center">
          <WeatherApp></WeatherApp>
        </main>
      </div>
    </>
  );
}

export default App;
