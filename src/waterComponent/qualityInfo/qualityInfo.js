import React, { Component } from 'react';
import './qualityInfo.css'

class qualityInfo extends Component {
  render() {
    return (
      <div className='qualityInfo'>
        <div className='quality-title'>
          <img src={require('../../image/target.png')} alt='quality'></img>
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
{/*            <div>
              <span>Function Type:</span>
            </div>
            <div className='function-type'>
              <span>Type II Drinking Water Source Primary</span><br/>
              <span>Protection Area</span>
            </div>*/}
            <div>
              <span>Nutritional State: Moderate Nutrition</span><br/>
              <span>Avg Water Temperature: 15°C</span>
            </div>
          </div>
        </div>
        <div className='bottle-image'>
          <img src={require('../../image/bottleWater.png')} alt='bottleWater'></img>
        </div>
      </div>
    );
  }

}

export default qualityInfo;
