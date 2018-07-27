import React, { Component } from 'react';
// import './realData.css'

class realData extends Component {

  // constructor() {
  //   super();
  //   this.state = {realData: ''};
  //   var self = this; 
  //   setInterval(function () {
  //       var tempValue;
  //       if (self.props.realData) {
  //         self.state.realData = self.state.realData
  //         tempValue = this.state.realData.value
  //         this.state.realData.value = parseInt(Math.random()*200);
  //         this.state.realData.trend = this.state.realData.value > tempValue ? true : false;
  //         this.state.realData.warning = this.state.realData.value > 150 ? true : false;
  //       }
  //   },5000); 
  // }

  render() {
    const trend = this.props.realData.trend ? (<img src={require('../../image/图表上升趋势.png')} alt='Up'></img>
        ) : (
         <img src={require('../../image/图表下降趋势.png')} alt='Down'></img>
        );
    const isWarning = this.props.realData.warning;
    return (
      <div className='air-real-data'>
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
