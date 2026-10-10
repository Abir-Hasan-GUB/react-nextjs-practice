import { useEffect, useState } from "react";

// 1. Weather data-এর TypeScript type
type WeatherData = {
    description: string | null;
    city: string | null;
    tempMax: number;
    tempMin: number;
    temperature: number;
    humidity: number | null;
    clouds: number | null;
    wind: number;
};

// 2. Custom Hook
export default function useWeather() {
    const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

    // Weather data state
    const [weatherData, setWeatherData] = useState<WeatherData>({
        description: null,
        city: null,
        tempMax: 0,
        tempMin: 0,
        temperature: 0,
        humidity: null,
        clouds: null,
        wind: 0,
    });

    // Loading state
    const [isLoading, setLoading] = useState(true);

    // Error state
    const [error, setError] = useState<string | null>(null);

    // API fetch function
    const getWeatherInfo = async (location: string) => {
        setLoading(true);
        setError(null);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            location,
        )}&units=metric&appid=${API_KEY}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);

                throw new Error(
                    errorData?.message
                        ? `${errorData.message} (${response.status})`
                        : `HTTP Error: ${response.status}`,
                );
            }

            const data = await response.json();

            setWeatherData({
                description: data.weather[0].description,
                city: data.name,
                tempMax: Math.round(data.main.temp_max),
                tempMin: Math.round(data.main.temp_min),
                temperature: Math.round(data.main.temp),
                humidity: data.main.humidity,
                clouds: data.clouds.all,
                wind: data.wind.speed,
            });
        } catch (error) {
            setError(
                error instanceof TypeError
                    ? "Network error. Please check your internet connection."
                    : error instanceof Error
                        ? error.message
                        : "Unable to fetch weather data.",
            );
        } finally {
            setLoading(false);
        }
    };

    // First render-এ Dhaka-এর weather fetch হবে
    useEffect(() => {
        getWeatherInfo("dhaka");
    }, []);

    // 3. Component-কে প্রয়োজনীয় data ও functions দেওয়া
    return {
        weatherData,
        isLoading,
        error,
        setError,
        getWeatherInfo,
    };
}
