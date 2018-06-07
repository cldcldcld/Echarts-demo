import React, { Component } from 'react';
import echarts from 'echarts';
import './realData.css'

class realData extends Component {
  render() {
    return (
      <div className='realData'>
        <div className='index-value'>
            <span>{this.props.realData.value}</span>
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
