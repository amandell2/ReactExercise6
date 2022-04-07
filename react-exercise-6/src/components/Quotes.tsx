import React, { useEffect, useState } from "react";
import Quotes from '../model/Quotes-model';
import { fetchQuotes } from "../service/QuotesApiService";


function QuotesList(){
    const [quotes, setQuotes] = useState<Quotes[]>([]);

    useEffect(()=> {
        fetchQuotes().then(data => {
            setQuotes(data);
        });

    }, []);

    return(
        <div className="Quotes_Container">
            <h2>Quotes List</h2>
            <ul>
                {quotes.map((quote, i) => 
                <li key={i}>"{quote.text}" -{quote.author}</li>)}
            </ul>
        </div>
    )

}

export default QuotesList;