import React, { useEffect, useState } from 'react'
import { WiDayCloudy, WiDaySunny, WiDayRain } from 'weather-icons-react';
import Rain from '../assets/Rain.png'
import Clouds from '../assets/Clouds.png'
import Sunny from '../assets/Sunny.png'



const WeatherCard = ({ weatherInfo: { temp, humidity, pressure, weatherMood, location } }) => {


    const [weather_mood, setweather_mood] = useState(weatherMood)
    


    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case 'Clouds': setweather_mood(Clouds) 

                    break;
                case 'Rain': setweather_mood(Rain)

                    break;
                case 'Sunny': setweather_mood(Sunny)

                    break;

                default: setweather_mood(Sunny)
                    break;
            }
        }


    }, [weatherMood])




    return (
        <>

            <div className="weatherData py-4">
                <div className="place_name">

                    <h1>{location}</h1>

                </div>
                <div className="temp_icon">
                    <img src={weather_mood} alt="weatherMood"  width={200} height={200} />
                  



                </div>
                <div className="temp_units">
                    {temp}&deg;

                </div>
                <div className="extra_forecast">
                    <span>Humidity &nbsp;&nbsp; <b> {humidity}</b></span>
                    <span>Pressure &nbsp;&nbsp;<b> {pressure}</b></span>

                </div>
                <div className="temp_icon_text mt-4">
                    <h2>{weatherMood}</h2>

                </div>
            </div>


        </>

    )
}

export default WeatherCard