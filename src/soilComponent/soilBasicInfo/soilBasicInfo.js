import React, { Component } from 'react';
import './soilBasicInfo.css'

class soilBasicInfo extends Component {

  render() {
    return (
      <div className='soilBasicInfo'>
    	<div className='basic-info-title'>
    		<span>Soil Basic Information</span>
    	</div>
    	<div className='basic-info-content'>
        <div className='moisture-info'>
          <div className='moisture-img'>
            <img src={require('../../image/liquid.png')} alt='Liquid'></img>
          </div>
          <div className='moisture-content'>
            <span className='moisture-number'>34%</span><br/>
            <span className='moisture-label'>Moisture</span>
          </div>
          <div className='other-info'>
            <span>Texture: Clay</span><br/>
            <span>pH: 6.7</span>
          </div>
        </div>
        <div className='density-info'>
          <div className='density-img'>
            <img src={require('../../image/thermometer.png')} alt='Thermometer'></img>
          </div>
          <div className='density-content'>
            <span className='density-number'>20℃</span><br/>
            <span className='density-label'>Temperature</span>
          </div>
          <div className='other-info'>
            <span>Density: 1.33g/cm3</span>
          </div>
        </div>
    	</div>
      </div>
    );
  }

  componentDidMount() {

  }


}

export default soilBasicInfo;
