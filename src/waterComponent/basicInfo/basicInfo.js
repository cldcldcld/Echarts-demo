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
          <img alt='Mark'></img>
          <div className='address'>
            <span>TongLu Country</span>
          </div>
          <div className='info-details'>
            <span className='station-name'>Fuchun River Reservoir</span><br/>
            <span>Water Level: 22.42 m</span><br/>
            <span>River Length: 1 km</span><br/>
            <span>Precipitation: 55.2 mm</span>
          </div>
        </div>
      </div>
    );
  }

}

export default basicInfo;
