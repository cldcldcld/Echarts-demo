import React, { Component } from 'react';
import './alarmNotification.css'

class alarmNotification extends Component {
  render() {
    return (
      <div className='alarmNotification'>
        <div className='alarm-title'>
          <div className='alarm-image'>
            <img src={require('../../image/警报.png')} alt='Alarm'></img>
          </div>
          <div className='alarm-title-details'>
            <span>Alarm Notification</span>
          </div>
        </div>
        <div className='alarm-content'>
          <div className='alarm-details'>
            <div className='alarm-station'>
              <span className='station-name'>Fuchun Rd Station</span><br/>
              <span className='station-details'>KMnO4 Exceeds limit Pending</span>
            </div>
            <div className='alarm-operation'>
              <img src={require('../../image/soilBell.png')} alt='Details'></img>
              <span>Process</span>
            </div>
          </div>
          <div className='alarm-details'>
            <div className='alarm-station'>
              <span className='station-name'>Xixi Station</span><br/>
              <span className='station-details'>Equipment Failure Pending</span>
            </div>
            <div className='alarm-operation'>
              <img src={require('../../image/soilNotice.png')} alt='Details'></img>
              <span>Details</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default alarmNotification;
