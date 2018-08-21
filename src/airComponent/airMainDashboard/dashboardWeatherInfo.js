import React, { Component } from 'react';
import moment from 'moment';
// import '../../scss/air/_dashboardWeatherInfo.scss';

class dashboardWeatherInfo extends Component {

  // constructor() {
  //   super();

  // }

  render() {

    return (
  	    <div className='dashboard-weather-info'>
          <div className='weather-left'>
            <div className='weather-title'>
              <span>Weather</span>
            </div>
            <div className='weather-date'>
              <span>{moment().format('LL')}</span>
            </div>
            <div className='weather-details'>
              <span>Humidity: 54%</span><br/>
              {/*<span>AQI: 22 Moderate</span><br/>*/}
              <span>Wind: S 11 km/h</span>
            </div>
          </div>
          <div className='weather-right'>
            <div className='weather-degree'>
              <div className='weather-number'>
                <span>31</span>
              </div>
              <div className='weather-image'>
                <img src={require('../../image/clearToLightRainBlue.png')} alt='weatherBlue'></img>
              </div>
              <div className='weather-unit'>
                <span>°C</span>
              </div>
            </div>
            <div className='weather-content'>
              <span>Clear to Light Rain</span>
            </div>
          </div>
  	    </div>
    );
  }


  componentDidMount() {

  }

}

export default dashboardWeatherInfo;