import React, { Component } from 'react';
import echarts from 'echarts';
import './warningInfo.css'

class warningInfo extends Component {
  render() {
    return (
      <div className='warning-info'>
        <div className='warning-title'>
          <img></img>
          <span>警报通知</span>
        </div>
        <div className='warning-content'>
          <div>
            <div>
              <img></img>
            </div>
            <div>
              <span>市环保站点</span><br/>
              <span>空气质量严重超标 待处理</span>
            </div>
            <div>
              <img></img>
              <span>立即处理</span>
            </div>
          </div>
          <div>
            <div>
              <img></img>
            </div>
            <div>
              <span>龙新站点</span><br/>
              <span>仪器故障掉线 待处理</span>
            </div>
            <div>
              <img></img>
              <span>查看详情</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default warningInfo;
