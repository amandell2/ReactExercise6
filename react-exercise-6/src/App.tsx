import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuotesList from './components/Quotes';
import WeatherList from './components/Weather';


function App() {
  return (
    <div className="App">
     {/*<WeatherList/>*/}
     <WeatherList/>
     <QuotesList/>
    </div>
  );
}

export default App;
