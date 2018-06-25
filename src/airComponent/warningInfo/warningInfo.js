import React, { Component } from 'react';
import './warningInfo.css'

class warningInfo extends Component {
  render() {
    return (
      <div className='warningInfo'>
        <div className='warning-title'>
          <div className='warning-image'>
            <img src={require('../../image/警报.png')} alt='Alarm'></img>
          </div>
          <div className='warning-title-details'>
            <span>Alarm Notification</span>
          </div>
        </div>
        <div className='warning-content'>
          <div className='warning-details'>
            <div className='warning-content-img'>
              <img src={require('../../image/31铃铛.png')} alt='Bell'></img>
            </div>
            <div className='warning-station'>
              <span className='station-name'>West Lake Station</span><br/>
              <span className='station-details'>Air Quality Exceeds Limit Pending</span>
            </div>
            <div className='operation'>
              <img src={require('../../image/查看.png')} alt='Details'></img>
              <span>Process</span>
            </div>
          </div>
          <div className='warning-details'>
            <div className='warning-content-img'>
              <img src={require('../../image/31铃铛.png')} alt='Bell'></img>
            </div>
            <div className='warning-station'>
              <span className='station-name'>Xixi Station</span><br/>
              <span className='station-details'>Equipment Failure Pending</span>
            </div>
            <div className='operation'>
              <img src={require('../../image/查看.png')} alt='Details'></img>
              <span>Details</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default warningInfo;
