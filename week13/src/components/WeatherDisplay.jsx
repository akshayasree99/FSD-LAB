import React, { useState, useEffect } from 'react'; 
import { getCurrentWeather, getHistoricalWeather } from '../services/weatherService'; 
import WeatherChart from './WeatherChart'; 
 
const WeatherDisplay = () => { 
    const [city, setCity] = useState('New York'); 
    const [weatherData, setWeatherData] = useState(null); 
    const [historicalData, setHistoricalData] = useState([]); 
 
    const fetchWeatherData = async () => { 
        const data = await getCurrentWeather(city); 
        setWeatherData(data); 
 
        const lat = data.coord.lat; 
        const lon = data.coord.lon; 
        const currentTime = Math.floor(Date.now() / 1000); 
         
        let historyData = []; 
        for (let i = 1; i <= 5; i++) { 
            const timestamp = currentTime - i * 24 * 60 * 60; 
            const historical = await getHistoricalWeather(lat, lon, timestamp); 
            historyData.push(historical); 
        } 
        setHistoricalData(historyData); 
    }; 
 
    useEffect(() => { 
        fetchWeatherData(); 
45 
 
    }, [city]); 
 
    const handleCityChange = (e) => setCity(e.target.value); 
 
    return ( 
        <div> 
            <h1>Weather Information for {city}</h1> 
            <input 
                type="text" 
                value={city} 
                onChange={handleCityChange} 
                placeholder="Enter city" 
            /> 
            <button onClick={fetchWeatherData}>Get Weather</button> 
 
            {weatherData && ( 
                <div> 
                    <h2>Current Weather</h2> 
                    <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)} °C</p> 
                    <p>Humidity: {weatherData.main.humidity}%</p> 
                    <p>Weather: {weatherData.weather[0].description}</p> 
                </div> 
            )} 
             
            <WeatherChart historicalData={historicalData} /> 
        </div> 
    ); 
}; 
 
export default WeatherDisplay; 