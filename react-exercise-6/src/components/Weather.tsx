import React, { useEffect, useState } from "react";
import Weather from "../model/Weather-models";
import { fetchWeather } from "../service/WeatherApiService";

function WeatherList(){
    const [weather, setWeather] = useState<Weather[]>([]);

    useEffect(()=>{
        fetchWeather().then(data=>{
            setWeather(data);
        });
    }, []);

    return(
        <div className="Weather_Container">
            <h2>Weather Forecast</h2>
            <ul>
                {weather.map((forecast, i) => 
                <li key={i}>
                    <h3>{forecast.name}</h3>
                    <p>Temperature: {forecast.temperature}{forecast.temperatureUnit}</p>
                    <img src={forecast.icon}/>
                    <p>{forecast.detailedForecast}</p>
                    </li>)}
            </ul>
        </div>
    )

}

export default WeatherList;