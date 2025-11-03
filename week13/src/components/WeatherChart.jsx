import React from 'react'; 
import { Line } from 'react-chartjs-2'; 
import { Chart as ChartJS } from 'chart.js/auto'; 
 
const WeatherChart = ({ historicalData }) => { 
    const labels = historicalData.map((data, index) => `Day -${index + 1}`); 
    const temperatures = historicalData.map(data => data.current.temp - 273.15); 
    const data = { 
        labels, 
        datasets: [ 
            { 
                label: 'Temperature (°C)', 
                data: temperatures, 
                borderColor: 'rgba(75,192,192,1)', 
                fill: false, 
                tension: 0.1, 
            }, 
        ], 
    }; 
 
    return ( 
        <div> 
            <h2>Historical Weather (Last 5 Days)</h2> 
            <Line data={data} /> 
        </div> 
    ); 
}; 
 
export default WeatherChart; 