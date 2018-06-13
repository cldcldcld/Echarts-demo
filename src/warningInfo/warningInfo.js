import React, { Component } from 'react';
import echarts from 'echarts';
import './warningInfo.css'

class warningInfo extends Component {
  render() {
    return (
      <div className='warningInfo'>
        <div className='warning-title'>
          <div className='warning-image'>
            <img src={require('../image/警报.png')}></img>
          </div>
          <div className='warning-title-details'>
            <span>警报通知</span>
          </div>
        </div>
        <div className='warning-content'>
          <div className='warning-details'>
            <div className='warning-content-img'>
              <img src={require('../image/31铃铛.png')}></img>
            </div>
            <div className='warning-station'>
              <span className='station-name'>市环保站点</span><br/>
              <span className='station-details'>空气质量严重超标 待处理</span>
            </div>
            <div className='operation'>
              <img src={require('../image/查看.png')}></img>
              <span>立即处理</span>
            </div>
          </div>
          <div className='warning-details'>
            <div className='warning-content-img'>
              <img src={require('../image/31铃铛.png')}></img>
            </div>
            <div className='warning-station'>
              <span className='station-name'>龙新站点</span><br/>
              <span className='station-details'>仪器故障掉线 待处理</span>
            </div>
            <div className='operation'>
              <img src={require('../image/查看.png')}></img>
              <span>查看详情</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default warningInfo;
