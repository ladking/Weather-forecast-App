import {useState} from 'react'

function App() {
  const [location, setLocation] = useState('')
  const [WeatherData, setWeatherData] = useState([])
 console.log(WeatherData)
  function handleChange(e){
    const {value} = e.target
    setLocation(value)
  }
  function handleSubmit(event){
    if(event.key === 'Enter'){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=52158a0fe122b54dddda6f33a6fadb23`
  fetch(url)
  .then(res => res.json())
  .then(data => setWeatherData(data))
  setLocation('')
    }
  }
  return (
      <div className="App">
        <div className='container'>
          <div  className='searchbox'>
            <input 
              type='text'
              value={location}
              onChange={handleChange}
              name='city'
              placeholder='Search Location'
              onKeyPress={handleSubmit}
            />
          </div>
          {!WeatherData.name &&<div className='head'>
          Type in Your City to Know Your What the weather is like
        </div> 
        }
      
            <div className='location'>
                  <h1>{ WeatherData.name}</h1>
                  {WeatherData.sys ? <p>{WeatherData.sys.country}</p> : null }
              </div>
                {WeatherData.main ? <span className='celsius'>{`${(WeatherData.main.temp - 273.15).toFixed()}°C`}</span> : null}
              <div className='weather'>
                {WeatherData.weather ? <h1>{WeatherData.weather[0].main}</h1> : null}
                {WeatherData.weather ? <p className='desc'>{WeatherData.weather[0].description}</p> : null}
              </div>
      {WeatherData.name !== undefined && 
                <div className='main'>
                  <div>
                    {WeatherData.main ? <p>{`${Math.round(WeatherData.main.feels_like - 273.15)} °C`}</p> : null}
                      <p>Feels like</p>
                  </div>
                  <div>
                    {WeatherData.main ? <p>{WeatherData.main.humidity}%</p> : null}
                      <p>Humidity</p>
                  </div>
                  <div>
                    {WeatherData.wind ? <p>{WeatherData.wind.speed} MPH</p> : null}
                      <p>Wind speed</p>
              </div>
          </div>
      }
              
        </div>
      </div>
  );
}

export default App;
             
      
  
               
  
             