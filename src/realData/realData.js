import React, { Component } from 'react';
import echarts from 'echarts';
import './realData.css'

class realData extends Component {

  render() {
    const trend = this.props.realData.trend ? (<img src={require('../image/图表上升趋势.png')}></img>
        ) : (
         <img src={require('../image/图表下降趋势.png')}></img>
        );
    const isWarning = this.props.realData.warning;
    return (
      <div className='realData'>
        <div className='index-value'>
            { !isWarning ? <span className='white'>{this.props.realData.value}</span>
              : <span className='red'>{this.props.realData.value}</span>}
            {trend}
        </div>
        <div className='index-title'>
            <span>{this.props.realData.title}</span>
        </div>
        <div className='index-description'>
            <span>{this.props.realData.description}</span>
        </div>        
      </div>
    );
  }

  componentDidMount() {

  }
}

export default realData;
