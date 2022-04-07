import axios from "axios";
import Quotes from "../model/Quotes-model";


export function fetchQuotes(): Promise<Quotes[]>{
    return axios.get<Quotes[]>("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then(response => response.data);
}

