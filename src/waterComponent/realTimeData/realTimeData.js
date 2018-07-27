import React, { Component } from 'react';
// import './realTimeData.css'

class realTimeData extends Component {

  render() {
    const isWarning = this.props.realData.warning;
    return (
      <div className='water-real-data'>
        <div className='item-title'>
            { !isWarning ? <span className='item-white'>{this.props.realData.title}</span>
              : <span className='item-red'>{this.props.realData.title}</span>}
        </div>
        <div className='item-value'>
            { !isWarning ? <span className='item-white'>{this.props.realData.value}</span>
              : <span className='item-red'>{this.props.realData.value}</span>}
        </div>
        <div className='item-description'>
            <span>{this.props.realData.description}</span>
        </div>        
      </div>
    );
  }

  componentDidMount() {

  }


}

export default realTimeData;
