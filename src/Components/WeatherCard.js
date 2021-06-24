import React, { Component } from 'react';
import moment from 'moment';

const WeatherCard = () => {

    function dateBuilder() {

    }

    return (

        <div className="cardContainer">
            <div className="city">Vegas</div>
            <div className="dateDay">{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            <div className="temprature">15°c</div>
            <div className="Sunny">Sunny</div>

        </div>

    );
}

export default WeatherCard;