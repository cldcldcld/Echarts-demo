import React, { Component } from 'react';
import './basicInfo.css'

class basicInfo extends Component {
  render() {
    return (
      <div className='basicInfo'>
        <div className='info-title'>
          <span>Water Basic Information</span>
        </div>
        <div className='info-content'>
          <div className='info-location-image'>
            <img src={require('../../image/location.png')} alt='LocationMark'></img>
          </div>
          <div className='address'>
            <span>TongLu Country</span>
          </div>
          <div className='info-details'>
            <div className='station-name'>
              <span>Fuchun River Reservoir</span>
            </div>
            <div className='water-detials-info'>
              <span>Water Level: 22.42 m</span><br/>
              <span>River Length: 1 km</span><br/>
              <span>Precipitation: 55.2 mm</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default basicInfo;
