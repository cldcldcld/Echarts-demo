import React, { Component } from 'react';
import './dashboardWater.css';
import BasicInfo from './waterComponent/basicInfo/basicInfo'
import IndexDependency from './waterComponent/indexDependency/indexDependency'

class dashboardWater extends Component {

  constructor() {
    super();
    this.state = {change: true};

    this.backToHome = this.backToHome.bind(this);
  }

  render() {

    return (

      	<div className="dashboardWater">
          <div className='host-button' onClick={this.backToHome}>
            <div className='button-image'>
              <img src={require('./image/主页.png')} alt='Home Page'></img>
            </div>
            <div>
              <span>Home Page</span>
            </div>
          </div>
          {/*<img src={require('./image/waterDashboard.png')} alt='Water Dashoard'></img>*/}
          <div className="water-dashboard-left">
            <div className="water-basic-info">
              <BasicInfo></BasicInfo>
            </div>
            <div className="water-quality-info">
              <BasicInfo></BasicInfo>
            </div>
            <div className="river-data-analysis">
              <BasicInfo></BasicInfo>
            </div>
          </div>
          <div className="water-dashboard-right">
            <div className="real-time-data">
              <BasicInfo></BasicInfo>
            </div>
            <div className="water-index-dependecies">
              <IndexDependency></IndexDependency>
            </div>
            <div className="warning-info">
              <BasicInfo></BasicInfo>
            </div>
            <div className="excessive-index-analysis">
              <BasicInfo></BasicInfo>
            </div>
            <div className="historic-data-analysis">
              <BasicInfo></BasicInfo>
            </div>
          </div>
        </div>

    );
  }


  componentDidMount() {


  }

  backToHome() {
    this.props.history.push('/landingpage/Water');
  }

}

export default dashboardWater;