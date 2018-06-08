import React, { Component } from 'react';
import echarts from 'echarts';
import './weatherInfo.css'

class weatherInfo extends Component {
  render() {
    return (
      <div className='weatherInfo'>
        <div className='weather-title'>
          <div className='weather-image'>
            <img src={require('../image/天气.png')}></img>
          </div>
          <div className='weather-title-details'>
            <span>气象信息</span>
          </div>
        </div>
        <div className='weather-content'>
           <img src={require('../image/晴转小雨.png')}></img>
          <div className='temperature'>
            <span className='temperature-number'>31</span>
            <span className='temperature-degree'>°C</span><br/>
            <span className='temperature-details'>晴转小雨</span>
          </div>
          <div className='weather-details'>
            <span className='weather-date'>2017年6月15日</span><br/>
            <span>湿度：69%</span><br/>
            <span>空气质量指数：22优</span><br/>
            <span>风向：北偏东1级</span>
          </div>
        </div>
      </div>
    );
  }

}

export default weatherInfo;
