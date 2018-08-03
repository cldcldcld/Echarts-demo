import React, { Component } from 'react';
import DashboardWeatherInfo from './dashboardWeatherInfo';
import AQIForecast from './AQIForecast';
import AQIInfo from './AQIInfo';
import { Link } from 'react-router-dom';
import '../../scss/air/_airMainDashboard.scss';

class airMainDashboard extends Component {

  constructor() {
    super();
   
    this.state = {change: true};

    this.AQIValue = 128;
    this.arrayCurrent = [50, 100, 90, 140, 160];
    this.arrayForecast = ['', '', '', '', 160, 90, 60]
    this.dataRefresh = this.dataRefresh.bind(this);
  }

  render() {

    return (
  	    <div className="air-main-dashboard">
            <div className='weather-info'>
                <DashboardWeatherInfo></DashboardWeatherInfo>
            </div>
             <div className='AQI-info'>
                <AQIInfo AQIValue={this.AQIValue}></AQIInfo>
            </div>
            <div className='AQI-forecast'>
                <AQIForecast AQIValue={this.AQIValue} arrayCurrent={this.arrayCurrent} arrayForecast={this.arrayForecast} dataRefresh={this.dataRefresh} ></AQIForecast>
            </div>
            <div className='navigation-module'>
                <div className='navigation-link'>
                  <Link to='/dashboardAir' className='navigtion-link-content'>VOC Analysis</Link>
                </div>
                <div className='navigation-content'>
                  <span>Categorize and deduce VOCs by industry and transportation, provide recommendations and forecast analysis</span>
                </div>
            </div>
  	    </div>
    );
  }


  componentDidMount() {

  }

  dataRefresh() {
    var self = this;
    var arrayHead = [];
    var arrayFuture = [];

    self.AQIValue = parseInt(Math.random()*150 + 50, 10);

    arrayHead = self.arrayForecast.slice(0, 4);
    arrayFuture = self.arrayForecast.slice(4, 7);

    self.arrayCurrent = self.arrayCurrent.slice(1); 
    self.arrayCurrent.push(arrayFuture[1]);
    arrayFuture = arrayFuture.slice(1);
    arrayFuture.push(self.AQIValue);
    self.arrayForecast = arrayHead.concat(arrayFuture);

    self.setState ({
        change: !self.setState.change
    });

  }

}

export default airMainDashboard;