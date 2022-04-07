import axios from "axios";
import Weather from "../model/Weather-models";

export function fetchWeather(): Promise<Weather[]>{
    return axios.get("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then(response => response.data.properties.periods);
}
