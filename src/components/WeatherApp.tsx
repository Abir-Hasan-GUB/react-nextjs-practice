import heart from "../assets/images/heart.svg";
import cloud from "../assets/images/cloud.svg";
import temp_max from "../assets/images/icons/temp-max.svg";
import temp_min from "../assets/images/icons/temp-min.svg";
import humidity from "../assets/images/icons/humidity.svg";
import cloudy from "../assets/images/icons/cloud.svg";
import wind from "../assets/images/icons/wind.svg";
import pin from "../assets/images/pin.svg";
import { useCallback } from "react";
import { useWeatherContext } from "../context/WeatherContext";
import Loading from "./Loading";
import ErrorToast from "./ErrorToast";

export default function WeatherApp() {
  const { weatherData, isLoading, error, setError } = useWeatherContext();

  const handleCloseError = useCallback(() => setError(null), [setError]);

  const today = new Date();
  const date = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        weatherData.city && (
          <section className="">
            <div className="container">
              <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
                <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center justify-end space-x-6">
                      <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                        <span>Add to Favourite</span>
                        <img src={heart} alt="" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="max-md:flex items-center justify-between md:-mt-10">
                      <img src={cloud} alt="cloud" />
                      <div className="max-md:flex items-center max-md:space-x-4">
                        <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                          {weatherData.temperature}°
                        </h1>
                        <div className="flex items-center space-x-4 md:mb-4">
                          <img src={pin} />
                          <h2 className="text-2xl lg:text-[50px]">
                            {weatherData.city}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm lg:text-lg">{date}</p>
                  </div>
                  <div>
                    <p className="text-sm lg:text-lg font-bold uppercase mb-8">
                      {weatherData.description}
                    </p>
                    <ul className="space-y-6 lg:space-y-6">
                      <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                        <span>Temp max</span>
                        <div className="inline-flex space-x-4">
                          <p>{weatherData.tempMax}°</p>
                          <img src={temp_max} alt="temp-max" />
                        </div>
                      </li>
                      <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                        <span>Temp min</span>
                        <div className="inline-flex space-x-4">
                          <p>{weatherData.tempMin}°</p>
                          <img src={temp_min} alt="temp-min" />
                        </div>
                      </li>
                      <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                        <span>Humadity</span>
                        <div className="inline-flex space-x-4">
                          <p>{weatherData.humidity}%</p>
                          <img src={humidity} alt="humidity" />
                        </div>
                      </li>
                      <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                        <span>Cloudy</span>
                        <div className="inline-flex space-x-4">
                          <p>{weatherData.clouds}%</p>
                          <img src={cloudy} alt="cloudy" />
                        </div>
                      </li>
                      <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                        <span>Wind</span>
                        <div className="inline-flex space-x-4">
                          <p>{Math.round(weatherData.wind * 3.6)}km/h</p>
                          <img src={wind} alt="wind" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      )}

      {error && <ErrorToast message={error} onClose={handleCloseError} />}
    </>
  );
}
