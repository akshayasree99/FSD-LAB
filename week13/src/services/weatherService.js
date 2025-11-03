const API_KEY = '5ab8ace32cc38205ab1bfe55b66828a6'; 
export const getCurrentWeather = async (city) => { 
    const response = await 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
 `); 
    return response.json(); 
}; 
 
export const getHistoricalWeather = async (lat, lon, timestamp) => { 
    const response = await 
fetch(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${ lat}&lon=${lon}&dt=${timestamp}&appid=${API_KEY}`); 
    return response.json(); 
}; 