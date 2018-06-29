import React, { Component } from 'react';
import './soilRealData.css'

class soilRealData extends Component {

  render() {
    return (
      <div className='soilRealData'>
        <div className='item-title'>
          <span className='item-white'>{this.props.realData.title}</span>
        </div>
        <div className='item-value'>
          <span className='item-white'>{this.props.realData.value}</span>
        </div>        
      </div>
    );
  }

  componentDidMount() {

  }


}

export default soilRealData;
