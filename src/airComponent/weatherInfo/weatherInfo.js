import React, { Component } from 'react';
// import './weatherInfo.css'

class weatherInfo extends Component {
  render() {
    return (
      <div className='weatherInfo'>
        <div className='weather-title'>
          <div className='weather-image'>
            <img src={require('../../image/天气.png')} alt='Weather'></img>
          </div>
          <div className='weather-title-details'>
            <span>Weather Information</span>
          </div>
        </div>
        <div className='weather-content'>
          <img src={require('../../image/晴转小雨.png')} alt='Clear to Light Rain'></img>
          <div className='temperature'>
            <span className='temperature-number'>31</span>
            <span className='temperature-degree'>°C</span><br/>
            <span className='temperature-details'>Clear to Light Rain</span>
          </div>
          <div className='weather-details'>
            <span className='weather-date'>July 18, 2018</span><br/>
            <span>Humidity: 54%</span><br/>
            <span>AQI: </span>
            <span className='weather-AQI'>308 Moderate</span><br/>
            <span>Wind：S 11km/hr</span>
          </div>
        </div>
      </div>
    );
  }

}

export default weatherInfo;
