
import { useEffect, useState } from 'react';
import './App.css';
import WeatherCard from './WeatherApp/WeatherCard';


function App() {

  const [searchValue, setsearchValue] = useState("birtamod")
  const [myWeatherInfo, setmyWeatherInfo] = useState({})


  const foreCast = async () => {
    try {

      let weatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&appid=a4f8f34bc60ec556c6d9708b93b3baca`
      let data = await fetch(weatherApi)
      let weatherData = await data.json()

      let { temp, humidity, pressure } = weatherData.list[0].main;
      let { main: weatherMood } = weatherData.list[0].weather[0]
      let { name: location } = weatherData.city
      console.log(weatherMood)
      let finalWeatherDetails = {
        temp, humidity, pressure, weatherMood, location
      }

      setmyWeatherInfo(finalWeatherDetails)




      console.log(temp)
    } catch (error) {
      console.log(error)

    }


  }

  useEffect( () => {
 foreCast()
  
  
  }, [])
  

  return (
    <>

      <section className='wrapper'>
        <div className="main container">
          <div className="searchBar py-4">

            <div className="row height d-flex justify-content-center align-items-center">
              <div className="col-md-8" >

                <div className="search">


                  <input type="text" className="form-control" placeholder="Ask weather of anyplace" value={searchValue} onChange={(e) => setsearchValue(e.target.value)} />
                  <button className="btn btn-primary" onClick={foreCast}>Search</button>
                </div>

                <WeatherCard weatherInfo={myWeatherInfo}></WeatherCard>






              </div>

            </div>

          </div>
        </div>
      </section>


    </>
  )
}

export default App
