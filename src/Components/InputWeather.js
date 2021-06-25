import React, { Component, useState } from 'react';
import moment from 'moment';

const api = {
    key: "51636f7b0a727a3107efaa2b6c94a717",
    base: "https://api.openweathermap.org/data/2.5/"
}

const InputWeather = () => {
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});



    const search = (e) => {
        if (e.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
                .then(response => response.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                    setLoading(true);
                });
        }

    }


    return (
        <div className="inputContainer">
            <input
                type="text"
                className="inputField"
                placeholder="Search a city"
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search} />

            <div className="cardContainer">
                <div className="city">{weather.name} {loading && weather.sys.country}</div>
                <div className="dateDay">{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
                <div className="temprature">{loading && Math.round(weather.main.temp)}°c</div>
            </div>

        </div>
    );

}

export default InputWeather;