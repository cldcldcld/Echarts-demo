import React, { Component } from 'react';
// import '../../scss/air/_AQIInfo.scss';

class dashboardWeatherInfo extends Component {

  constructor() {
    super();
   
  }

  render() {

    return (
  	    <div className='dashboard-AQI-info'>
          <div className='AQI-title'>
            <span>AQI Summary</span>
          </div>
          <div className='AQI-location'>
            <span>Hangzhou: </span>
          </div>
          <div className='AQI-content'>
            <div className='AQI-number'>
              <span>{this.props.AQIValue}</span>
            </div>
            <div className='AQI-description'>
              <span>Light Pollution</span>
            </div>
          </div>
  	    </div>
    );
  }


  componentDidMount() {

  }

}

export default dashboardWeatherInfo;