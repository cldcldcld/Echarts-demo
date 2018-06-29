import React, { Component } from 'react';
import './soilQualityInfo.css'

class soilQualityInfo extends Component {

  render() {
    return (
      <div className='soilQualityInfo'>
        <div className='quality-info-title'>
          <div className='quality-info-image'>
            <img src={require('../../image/target.png')} alt='quality'></img>
          </div>
          <div className='quality-info-title-details'>
            <span>Soil Quality Analysis</span>
          </div>
        </div>
        <div className='quality-info-content'>
          <span>Function Type: Type II</span><br/>
          <span>Grade: Grade II Exceed the standard</span>
        </div>
      </div>
    );
  }

  componentDidMount() {

  }


}

export default soilQualityInfo;
