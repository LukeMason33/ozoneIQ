import React, {useState, useEffect, useRef} from 'react';
import './Dashboard.scss';
import locationIcon from '../../assets/location.svg';
import pollutionIcon from '../../assets/pollution.png';
import humidityIcon from '../../assets/humidity.png';
import pressureIcon from '../../assets/pressure.png';
import windIcon from '../../assets/wind.png';
import emptyFavIcon from '../../assets/star-empty.png';
import filledFavIcon from '../../assets/Five_Pointed_Star_Solid.svg'
import cloudIcon from '../../assets/cloud-computing.png';
import {convertToFahrenheit, convertWindToCardnialDirection, convertMsToMph} from '../../utilities.js';
import useLocalStorageState from 'use-local-storage-state'


function Dashboard({location}) {
const [savedLocations, setSavedLocations] = useLocalStorageState(`${location.city}`, [])
const [isStarred, setIsStarred] = useState(false)
// const savedItems = JSON.parse(localStorage.getItem('locations'))
// const [locations, setLocations] = useState([])


const locationAqi = location.current.pollution.aqius;
const tempInFahrenheit = convertToFahrenheit(location.current.weather.tp);
const windDirection = convertWindToCardnialDirection(location.current.weather.wd);
const windMph = convertMsToMph(location.current.weather.ws);


  const toggleStar = () => {
    setIsStarred(isStarred => !isStarred)
    if(!savedLocations.includes(location)) {
      setSavedLocations([...savedLocations, location])
    }
    if (isStarred) {
     removeLocation()
  }
  } 

  const removeLocation = () => {
    localStorage.removeItem(`${location.city}`)
  }
  

  // useEffect(() => {

  // },[])

  // useEffect(() => {
  //   if ( savedItems) {
  //     setLocations(savedItems)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('locations', JSON.stringify(locations))
  // },[locations])


  const airQualityMessages = (aqi) => {
    if (aqi <= 50) {
      return [
        'GOOD',
        'Air quality is satisfactory, and air pollution poses little or no risk.'
      ];
    }
    else if (aqi > 50 && aqi <= 100) {
      return [
        'MODERATE',
        'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.'
      ];
    }
    else if (aqi > 100 && aqi <= 150) {
      return [
        'UNHEALTHY FOR SENSITIVE GROUPS',
        'Members of sensitive groups may experience health effects. The general public is less likely to be affected.'
      ];
    }
    else if (aqi > 150 && aqi <= 200) {
      return [
        'UNHEALTHY',
        'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.'
      ];
    }
    else if (aqi > 200 && aqi <= 300) {
      return [
        'VERY UNHEALTHY',
        'Health alert: The risk of health effects is increased for everyone.'
      ];
    } else {
      return [
        'HAZARDOUS',
        'Health warning of emergency conditions: everyone is more likely to be affected.'
      ]
    }
  }
  //create state for isStarred or isFavorited - done
  //create a method onclick that toggles that state back and forth - done
  // when the onclick happens the svg will be replaces with a filled star
  // It will also be saved to local storage
  // once it is showing up in local storage, figure out a way to have it displayed in savedlocations component


  return (
    <main>
      <section className='main-dashboard'>
        <div className='location-name-temp-container'>
          <div className='location-and-fav-container'>
            <div className='location-container'>
              <img 
                className='location-icon icon' 
                onClick={toggleStar} 
                src={!isStarred ? emptyFavIcon : filledFavIcon} 
                alt='unfilled star'/>
              <h2 className='location-name'>{`${location.city}, ${location.state}`}</h2>
            </div>
          </div>
          <div className='temp-container'>
            <img className='weather-icon icon' src={cloudIcon} alt='Weather'/>
            <p className='temperature'>{`${tempInFahrenheit} F`}</p>
          </div>
        </div>
        <div className='aqi-container'>
          <h1 className='aqi-level'>{airQualityMessages(locationAqi)[0]}</h1>
          <div className={`aqi-number ${airQualityMessages(locationAqi)[0]}`}>{locationAqi}</div>
          <p className='aqi-description'>{airQualityMessages(locationAqi)[1]}</p>
        </div>
        <div className='additional-info-container'>
          <div className='additional-info'>
            <img className='pollutant-icon icon' src={pollutionIcon} alt='Outline of smoke stack'/>
            <p className='pollutant'>{location.current.pollution.mainus}</p>
          </div>
          <div className='additional-info'>
            <img className='humidity-icon icon' src={humidityIcon} alt='Outline of rain drop'/>
            <p className='humidity'>{`${location.current.weather.hu}`}</p>
          </div>
          <div className='additional-info'>
            <img className='pressure-icon icon' src={pressureIcon} alt='Outline of a pressure guage'/>
            <p className='pressure'>{`${location.current.weather.pr}hPa`}</p>
          </div>
          <div className='additional-info'>
            <img className='wind-icon icon' src={windIcon} alt='Outline of wind blowing'/>
            <p className='wind'>{`${windMph} mph ${windDirection}`}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashboard;
