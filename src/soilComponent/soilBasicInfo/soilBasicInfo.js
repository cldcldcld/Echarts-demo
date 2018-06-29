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
    		<span>Temperature: 20 ℃</span><br/>
    		<span>Moisture: 34%</span><br/>
    		<span>Texture: Clay</span><br/>
    		<span>Density: 1.33g/cm³</span><br/>
    		<span>pH: 6.7</span>	
    	</div>
      </div>
    );
  }

  componentDidMount() {

  }


}

export default soilBasicInfo;
