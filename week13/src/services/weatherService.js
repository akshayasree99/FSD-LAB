const API_KEY = 'fb1011208802ddc3566815a5c8a3e3b9';

export const getCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Current weather fetch failed:', error);
    return null;
  }
};

export const getHistoricalWeather = async (lat, lon, timestamp) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${timestamp}&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Historical weather fetch failed:', error);
    return null;
  }
};
