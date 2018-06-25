import React, { Component } from 'react';
import './qualityInfo.css'

class qualityInfo extends Component {
  render() {
    return (
      <div className='qualityInfo'>
        <div className='quality-title'>
          <img alt='quality'></img>
          <span>Water Quality Analysis</span>
        </div>
        <div className='quality-content'>
          <div className='quality-details'>
            <div>
              <span>Grade: </span>
            </div>
            <div className='quality-grade'>
              <span>Exceeds Grade II</span><br/>
              <span>Light Pollution</span>
            </div>
            <div>
              <span>Surface Color:</span>
              <span className='surface-color'>Green</span><br/>
              <span>Nutritional State: Moderate Nutrition</span><br/>
              <span>Avg Water Temperature: 15°C</span>
            </div>
          </div>
          <div className='quality-image'>
          </div>
        </div>
      </div>
    );
  }

}

export default qualityInfo;
